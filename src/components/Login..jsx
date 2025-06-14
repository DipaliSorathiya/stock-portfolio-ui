const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await loginUser({ username, password });
    localStorage.setItem('token', response.data.token);  // ✅ Save JWT token

    console.log("✅ Login successful, navigating to portfolio...");
    navigate('/portfolio'); // ✅ Redirect after successful login
  } catch (error) {
    console.error('❌ Login failed:', error);
    alert('Invalid credentials. Try again.');
  }
};
