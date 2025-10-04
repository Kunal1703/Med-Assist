// function checkStrength(password, type) {
//     const bar = document.getElementById(type + "-strength-bar");
//     const text = document.getElementById(type + "-strength-text");

//     let strength = 0;
//     if (password.length >= 6) strength++;
//     if (password.match(/[A-Z]/)) strength++;
//     if (password.match(/[0-9]/)) strength++;
//     if (password.match(/[^A-Za-z0-9]/)) strength++;
//     if (password.length >=8) strength++;

//     let width = ["10%", "30%", "50%", "75%", "100%"][strength] || "0%";
//     let colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#16a34a"];
//     let labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

//     bar.style.width = width;
//     bar.style.backgroundColor = colors[strength - 1] || "#d1d5db";
//     text.innerText = password ? `Strength: ${labels[strength - 1] || "Too short"}` : "Enter password...";
// }

function handleRegister() {
            showModal(`
                <h3 class="text-2xl font-bold text-gray-900 mb-4">📝 Join MedAssist</h3>
                <p class="text-gray-600 mb-6">Create your account and start managing your health more effectively.</p>
                <div class="space-y-4">
                    <input type="text" placeholder="Full Name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <input type="password" placeholder="Create Password" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <button class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                        Create Account
                    </button>
                </div>
                <p class="text-sm text-gray-500 mt-4 text-center">
                    Already have an account? <span class="text-indigo-600 cursor-pointer" onclick="closeModal(); handleLogin();">Sign in here</span>
                </p>
            `);
            
        }

        function handleEmergency() {
            showModal(`
                <h3 class="text-2xl font-bold text-red-600 mb-4">🚨 Emergency Assistance</h3>
                <p class="text-gray-600 mb-6">Immediate help is available. Choose your emergency type:</p>
                <div class="space-y-3">
                    <button class="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                        🚑 Call Ambulance
                    </button>
                    <button class="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                        🏥 Find Nearest Hospital
                    </button>
                    <button class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        👨‍⚕ Emergency Consultation
                    </button>
                </div>
                <p class="text-sm text-red-500 mt-4 text-center font-semibold">
                    For life-threatening emergencies, call 911 immediately
                </p>
            `);
        }

        function showAppointmentDemo() {
            showModal(`
                <h3 class="text-2xl font-bold text-blue-600 mb-4">📅 Appointment Scheduler</h3>
                <p class="text-gray-600 mb-6">Book your next medical appointment with ease.</p>
                <div class="space-y-4">
                    <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>Select Doctor Type</option>
                        <option>General Physician</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Neurologist</option>
                    </select>
                    <input type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>Available Times</option>
                        <option>9:00 AM</option>
                        <option>11:30 AM</option>
                        <option>2:00 PM</option>
                        <option>4:30 PM</option>
                    </select>
                    <button class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Book Appointment
                    </button>
                </div>
            `);
        }

        function showSymptomDemo() {
            showModal(`
                <h3 class="text-2xl font-bold text-green-600 mb-4">📊 Symptom Tracker</h3>
                <p class="text-gray-600 mb-6">Log your symptoms for better health monitoring.</p>
                <div class="space-y-4">
                    <input type="text" placeholder="Describe your symptoms" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option>Severity Level</option>
                        <option>Mild</option>
                        <option>Moderate</option>
                        <option>Severe</option>
                    </select>
                    <input type="date" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                    <button class="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                        Log Symptom
                    </button>
                </div>
                <div class="mt-6 p-4 bg-green-50 rounded-lg">
                    <p class="text-sm text-green-700">💡 AI Insight: Based on your symptoms, consider scheduling a consultation.</p>
                </div>
            `);
        }

        function showDashboardDemo() {
            showModal(`
                <h3 class="text-2xl font-bold text-purple-600 mb-4">🎯 Health Dashboard</h3>
                <p class="text-gray-600 mb-6">Your complete health overview at a glance.</p>
                <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-blue-50 p-4 rounded-lg text-center">
                            <div class="text-2xl font-bold text-blue-600">3</div>
                            <div class="text-sm text-gray-600">Upcoming</div>
                        </div>
                        <div class="bg-green-50 p-4 rounded-lg text-center">
                            <div class="text-2xl font-bold text-green-600">12</div>
                            <div class="text-sm text-gray-600">Records</div>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-semibold mb-2">Recent Activity</h4>
                        <ul class="text-sm space-y-1">
                            <li>✅ Appointment with Dr. Smith - Completed</li>
                            <li>📊 Blood pressure logged - Today</li>
                            <li>💊 Medication reminder - 2 hours ago</li>
                        </ul>
                    </div>
                    <button class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                        View Full Dashboard
                    </button>
                </div>
            `);
        }

        function showContactForm() {
            showModal(`
                <h3 class="text-2xl font-bold text-gray-900 mb-4">📞 Contact Us</h3>
                <p class="text-gray-600 mb-6">Get in touch with our support team.</p>
                <div class="space-y-4">
                    <input type="text" placeholder="Your Name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                    <button class="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                        Send Message
                    </button>
                </div>
            `);
        }