import React from 'react';
import {
    TrendingUp,
    Users,
    Shield,
    Smartphone,
    DollarSign,
    Clock,
    Heart,
    Star,
    CheckCircle,
    ArrowRight,
    Calculator,
    Target,
    Calendar,
    Bell,
    Video,
    BookOpen,
    Compass,
    Settings,
    CreditCard,
    UserCheck,
    MessageSquare,
    FileText,
    Award,
    Building
} from 'lucide-react';

function App() {

    const coreModules = [
        {
            icon: <Clock />,
            title: "Prayer Timetable Module",
            features: ["Daily/Weekly/Monthly Views", "Auto Location Updates", "Prayer Notifications", "Calculation Methods"],
            value: "£300",
            justification: "Replaces manual timetable updates, reduces enquiries by 80%"
        },
        {
            icon: <Video />,
            title: "Live Stream & Media Center",
            features: ["Live Jumu'ah", "Event Streaming", "Video/Audio Library", "Archive System"],
            value: "£400",
            justification: "Eliminates need for separate streaming platform (£50/month saved)"
        },
        {
            icon: <Calendar />,
            title: "Events & Activities Calendar",
            features: ["Event Listings", "Youth Programs", "Madrasa Timetables", "RSVP System"],
            value: "£250",
            justification: "Reduces printing costs, improves attendance by 40%"
        },
        {
            icon: <CreditCard />,
            title: "Donations & Charity Module",
            features: ["Multiple Categories", "One-Click Donations", "Receipts", "Subscriptions"],
            value: "£500",
            justification: "Increases donations by 60%, saves processing time"
        },
        {
            icon: <Bell />,
            title: "Push Notifications Center",
            features: ["Prayer Adjustments", "Janazah Notices", "Emergency Alerts", "Event Reminders"],
            value: "£200",
            justification: "Instant communication, reduces missed announcements"
        },
        {
            icon: <BookOpen />,
            title: "Madrasa Portal",
            features: ["Student Dashboard", "Attendance", "Homework", "Parent Communication"],
            value: "£350",
            justification: "Streamlines education management, saves 10 hours/week"
        },
        {
            icon: <Compass />,
            title: "Qiblah & Halal Guide",
            features: ["Qiblah Compass", "Nearby Mosques", "Halal Restaurants", "Location Filters"],
            value: "£150",
            justification: "Community service enhancement, attracts visitors"
        },
        {
            icon: <FileText />,
            title: "Islamic Content Library",
            features: ["Quran Audio", "Daily Hadith", "Duas", "Educational Articles"],
            value: "£200",
            justification: "Spiritual engagement, reduces need for printed materials"
        }
    ];

    const premiumModules = [
        {
            icon: <Building />,
            title: "Room & Hall Booking",
            features: ["Availability Calendar", "Payment Processing", "Admin Dashboard"],
            value: "£150",
            justification: "Generates rental income, automates booking process"
        },
        {
            icon: <UserCheck />,
            title: "Digital Membership",
            features: ["QR Code Cards", "Validation System", "Renewal Reminders"],
            value: "£100",
            justification: "Modernizes membership, reduces card printing costs"
        },
        {
            icon: <MessageSquare />,
            title: "Community Polls & Decisions",
            features: ["Vote Creation", "Multiple Choice", "Results Display"],
            value: "£75",
            justification: "Democratic engagement, transparent decision making"
        },
        {
            icon: <Heart />,
            title: "Enhanced Janazah Module",
            features: ["Death Announcements", "Burial Info", "Family Communication"],
            value: "£125",
            justification: "Sensitive community service, reduces communication burden"
        }
    ];

    const adminFeatures = [
        "Complete Web Dashboard",
        "Content Management System",
        "User Management",
        "Financial Reports",
        "Analytics & Insights",
        "Multi-admin Access Control"
    ];

    const benefits = [
        {
            icon: <DollarSign />,
            title: "Direct Financial Return",
            description: "Conservative estimate: £250/month from just 50 people donating £5 extra. Investment recovered within 12 months.",
            highlight: "£3,000+ annual return"
        },
        {
            icon: <Clock />,
            title: "Operational Efficiency",
            description: "Eliminates printing costs, reduces manual updates, saves staff hours every week for actual community service.",
            highlight: "15+ hours saved weekly"
        },
        {
            icon: <Shield />,
            title: "Trust & Transparency",
            description: "Official announcements, clear donation channels, reduced confusion, centralized information builds donor confidence.",
            highlight: "Increased Credibility"
        },
        {
            icon: <Users />,
            title: "Community Engagement",
            description: "Brings youth closer to mosque, keeps families informed, ensures inclusivity across all generations.",
            highlight: "40% better attendance"
        }
    ];

    const costBreakdown = [
        { item: "Core Development (8 modules)", cost: "£1,850", percentage: "77%" },
        { item: "Premium Features (4 modules)", cost: "£450", percentage: "19%" },
        { item: "Admin Dashboard & Testing", cost: "£100", percentage: "4%" }
    ];

    const features = [
        { icon: <Smartphone />, title: "13 Complete Modules", desc: "Comprehensive mosque management" },
        { icon: <Settings />, title: "Admin Dashboard", desc: "Full control and management" },
        { icon: <Shield />, title: "Secure Payments", desc: "Stripe/PayPal integration" },
        { icon: <Star />, title: "Custom Design", desc: "Built specifically for your mosque" }
    ];

    return (
        <div className="container">
            <div className="proposal-card">
                <div className="header">
                    <h1>Mosque Mobile Application</h1>
                    <p className="subtitle">Strategic Investment Proposal</p>
                    <div className="investment-highlight">
                        <div className="investment-amount">£2,400</div>
                        <p>One-time investment • Lifetime value • Complete ownership</p>
                    </div>
                </div>

                <div className="section">
                    <h2><Target /> Executive Summary</h2>
                    <p>
                        The £2,400 proposed for the mosque mobile application is not a development expense;
                        it is a <strong>capital investment</strong> in your mosque's operational efficiency,
                        financial sustainability, community engagement, and long-term relevance.
                    </p>
                    <p>
                        This investment creates a permanent digital asset that works for your mosque
                        every day, every month, and every year, with measurable returns in communication
                        efficiency, donation growth, and community trust.
                    </p>
                </div>

                <div className="roi-calculator">
                    <h3><Calculator /> Investment Breakdown & ROI</h3>
                    <p>Detailed cost justification for 13 comprehensive modules:</p>
                    <div className="roi-breakdown">
                        {costBreakdown.map((item, index) => (
                            <div key={index} className="roi-item">
                                <div className="number">{item.cost}</div>
                                <div className="label">{item.item}</div>
                                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px' }}>
                                    {item.percentage} of total
                                </div>
                            </div>
                        ))}
                        <div className="roi-item" style={{ background: 'linear-gradient(135deg, #2c5530 0%, #1a3d1f 100%)', color: 'white' }}>
                            <div className="number" style={{ color: '#ffd700' }}>£2,400</div>
                            <div className="label" style={{ color: 'white' }}>Total Investment</div>
                            <div style={{ fontSize: '0.8rem', color: '#ffd700', marginTop: '5px' }}>
                                Complete Solution
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '10px' }}>
                        <h4 style={{ color: '#2c5530', marginBottom: '15px' }}>Conservative ROI Projection:</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c5530' }}>50</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>People donating £5 extra/month</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c5530' }}>£250</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Additional monthly income</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c5530' }}>£3,000</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Annual return</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c5530' }}>10 months</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Payback period</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2><Smartphone /> Core Modules - Every Penny Justified</h2>
                    <div className="benefits-grid">
                        {coreModules.map((module, index) => (
                            <div key={index} className="benefit-card">
                                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: '15px' }}>
                                    {module.icon}
                                </div>
                                <h3>{module.title}</h3>
                                <div style={{ color: '#2c5530', fontWeight: 'bold', fontSize: '1.2rem', margin: '10px 0' }}>
                                    {module.value}
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} style={{ padding: '2px 0', fontSize: '0.9rem' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ color: '#666', fontStyle: 'italic', fontSize: '0.9rem', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                    {module.justification}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2><Award /> Premium Modules - Added Value</h2>
                    <div className="benefits-grid">
                        {premiumModules.map((module, index) => (
                            <div key={index} className="benefit-card" style={{ borderLeft: '5px solid #ffd700' }}>
                                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: '15px', background: '#ffd700', color: '#2c5530' }}>
                                    {module.icon}
                                </div>
                                <h3>{module.title}</h3>
                                <div style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '1.2rem', margin: '10px 0' }}>
                                    {module.value}
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px' }}>
                                    {module.features.map((feature, idx) => (
                                        <li key={idx} style={{ padding: '2px 0', fontSize: '0.9rem' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ color: '#666', fontStyle: 'italic', fontSize: '0.9rem', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                    {module.justification}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2><Settings /> Admin Dashboard & Management</h2>
                    <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #2c5530' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                            <div>
                                <h4 style={{ color: '#2c5530', marginBottom: '15px' }}>Complete Web Dashboard - £100</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {adminFeatures.map((feature, index) => (
                                        <li key={index} style={{ padding: '5px 0', fontSize: '0.9rem' }}>
                                            ✓ {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ padding: '20px', background: 'white', borderRadius: '10px' }}>
                                <h4 style={{ color: '#2c5530', marginBottom: '10px' }}>Value Justification</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>
                                    Professional admin panel that would cost £500+ separately
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                                    Saves 20+ hours monthly in manual management tasks
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2><TrendingUp /> Measurable Benefits & Returns</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: '15px' }}>
                                    {benefit.icon}
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                                <div style={{ color: '#2c5530', fontWeight: 'bold', marginTop: '10px' }}>
                                    {benefit.highlight}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <h2><Smartphone /> What You Get - Complete Solution</h2>
                    <div className="features-showcase">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '30px', padding: '25px', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', borderRadius: '15px' }}>
                        <h3 style={{ color: '#2c5530', textAlign: 'center', marginBottom: '20px' }}>
                            Comprehensive Feature Summary
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', textAlign: 'center' }}>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c5530' }}>13</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Complete Modules</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c5530' }}>50+</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Individual Features</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c5530' }}>100%</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Custom Built</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c5530' }}>∞</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>Lifetime Ownership</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2><CheckCircle /> Investment vs Expense</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
                        <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '15px', borderLeft: '5px solid #dc3545' }}>
                            <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>Traditional Expense</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>✗ Money spent once</li>
                                <li>✗ No lasting return</li>
                                <li>✗ Recurring costs</li>
                                <li>✗ Temporary solution</li>
                            </ul>
                        </div>
                        <div style={{ padding: '25px', background: '#f8f9fa', borderRadius: '15px', borderLeft: '5px solid #28a745' }}>
                            <h3 style={{ color: '#28a745', marginBottom: '15px' }}>Strategic Investment</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>✓ Built once, used daily</li>
                                <li>✓ Continuous returns</li>
                                <li>✓ Complete ownership</li>
                                <li>✓ Permanent solution</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h2><Heart /> Sadaqah Jariyah Perspective</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <h4>Every prayer time update</h4>
                            <p>Continuous benefit to the community</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Every announcement</h4>
                            <p>Improved communication and engagement</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Every donation</h4>
                            <p>Facilitated giving and community support</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Every reminder</h4>
                            <p>Spiritual connection and community unity</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#2c5530' }}>
                        The benefit continues long after deployment, transforming this investment into ongoing Sadaqah Jariyah.
                    </p>
                </div>

                <div className="cta-section">
                    <h2>Complete Investment Justification</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0' }}>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffd700' }}>Total Investment</div>
                            <div style={{ fontSize: '2rem' }}>£2,400</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>One-time payment</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffd700' }}>Annual Return</div>
                            <div style={{ fontSize: '2rem' }}>£3,000+</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Conservative estimate</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffd700' }}>Payback Period</div>
                            <div style={{ fontSize: '2rem' }}>10 months</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Then pure profit</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffd700' }}>Ownership</div>
                            <div style={{ fontSize: '2rem' }}>Lifetime</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>No recurring fees</div>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
                        <h3 style={{ marginBottom: '15px' }}>Cost Comparison</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
                            <div>
                                <h4 style={{ color: '#ffd700', marginBottom: '10px' }}>Alternative Solutions Cost:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>• Separate donation platform: £50/month</li>
                                    <li>• Streaming service: £30/month</li>
                                    <li>• Event management: £25/month</li>
                                    <li>• Notification service: £15/month</li>
                                    <li><strong>Total: £120/month = £1,440/year</strong></li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: '#ffd700', marginBottom: '10px' }}>Our Complete Solution:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>• All 13 modules included</li>
                                    <li>• Custom design & features</li>
                                    <li>• Complete ownership</li>
                                    <li>• No monthly fees</li>
                                    <li><strong>Total: £2,400 one-time</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                        This is not money spent. This is <strong>value created</strong> with every penny justified.
                    </p>
                    <button className="cta-button">
                        Approve £2,400 Investment <ArrowRight style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;