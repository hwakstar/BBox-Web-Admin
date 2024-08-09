import React, { useState, useEffect } from 'react';

const VendorForm = () => {
  const [vendorId, setVendorId] = useState(null);
  const [formData, setFormData] = useState({
    businessName: '',
    status: '',
    registerDate: '',
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('vendorId');
    if (id) {
      setVendorId(id);
      fetch(`http://localhost:3001/get_vendor/${id}`)
        .then(response => response.json())
        .then(data => {
          setFormData(data);
        })
        .catch(error => console.error('Error fetching vendor:', error));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = vendorId ? 'update_vendor' : 'save_vendor';
    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      body.append(key, value);
    });
    if (vendorId) body.append('vendorId', vendorId);

    fetch(`http://localhost:3001/${method}`, {
      method: 'POST',
      body: body,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('An error occurred while processing the request');
        }
        return response.json();
      })
      .then(() => {
        alert('Vendor processed successfully');
        window.print(); // Print report
        window.location.href = 'showvender.html';
      })
      .catch(error => console.error('Error processing vendor:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="businessName">Business Name</label>
        <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label htmlFor="registerDate">Register Date</label>
        <input type="date" id="registerDate" name="registerDate" value={formData.registerDate} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VendorForm;