import React, { useState } from 'react';
import { Leaf, Sun, Snowflake, Users, Heart, ShieldCheck, Menu, X, Droplets, Thermometer } from 'lucide-react';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const calculateShipping = (quantity: number) => {
    if (quantity <= 3) {
      return 10;
    }
    return 0; // Will be calculated by sales team
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const productTotal = orderQuantity * 80;
    const shippingCost = calculateShipping(orderQuantity);
    const totalPrice = productTotal + (shippingCost || 0);
    
    const shippingNote = orderQuantity > 3 
      ? "\n\nNote: Shipping cost for orders over 3 units will be calculated by our sales team."
      : `\nShipping Cost: $${shippingCost}.00`;

    const mailtoLink = `mailto:sales@rawpeak.com?subject=New Salve Order&body=Name: ${customerName}%0D%0AEmail: ${customerEmail}%0D%0A%0D%0AShipping Address:%0D%0A${address}%0D%0A${city}, ${state} ${zipCode}%0D%0A%0D%0AQuantity: ${orderQuantity} units%0D%0AProduct Total: $${productTotal}.00${shippingNote}%0D%0ATotal: $${totalPrice}.00%0D%0A%0D%0AAdditional Message:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  const renderContent = () => {
    switch(currentTab) {
      case 'roots':
        return (
          <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Our Roots</h2>
                <p className="mt-4 text-lg text-gray-600">
                  A story of innovation, inclusivity, and sustainable farming in the heart of Beulah Valley.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&q=80"
                    alt="Sustainable farming"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p className="text-xl font-semibold text-gray-900 mb-4">Breaking Barriers, Growing Together</p>
                  <p>As a proud Deaf-owned business, Raw Peak Hemp Farm stands as a testament to breaking barriers in agriculture. Our journey began with a vision to create not just premium hemp products, but opportunities for the Deaf community in sustainable agriculture.</p>
                  <p className="mt-4">Our 100% sun-powered operation reflects our deep commitment to environmental stewardship. Every decision we make, from our cultivation methods to our packaging choices, is guided by our responsibility to protect and preserve our natural resources.</p>
                  <p className="mt-4">In Beulah Valley, we've found more than just fertile soil for our hemp - we've found a community that supports our mission of inclusive entrepreneurship and sustainable farming practices.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'process':
        return (
          <div className="py-16 bg-green-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white">
                  Our Unique Preservation Process
                </h2>
                <p className="mt-4 text-lg text-green-200">
                  From Field to Freezer: Our Meticulous Journey to Preserve Nature's Potency
                </p>
              </div>
              <div className="mt-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-200 text-green-900">
                      <Snowflake className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-white">Flash Freezing</h3>
                    <p className="mt-2 text-green-200">
                      Hemp flowers frozen at -15°F immediately after harvest to preserve cannabinoids and terpenes at their peak potency.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-200 text-green-900">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-white">Gentle Extraction</h3>
                    <p className="mt-2 text-green-200">
                      Using our ancient water-and-ice extraction method, we maintain temperatures below 40°F to ensure the gentlest processing possible.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-200 text-green-900">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-white">Fresh Until Delivery</h3>
                    <p className="mt-2 text-green-200">
                      Our CBD remains frozen until the moment of infusion, and salves are kept at optimal temperature until they reach your doorstep.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 bg-white/5 backdrop-blur-lg rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-8">The Raw Peak Difference</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="prose prose-invert">
                    <p className="text-green-200">Our process begins in the field, where we cultivate hemp using organic practices that work in harmony with nature. Each plant is carefully tended to ensure optimal CBD content and overall plant health.</p>
                  </div>
                  <div className="prose prose-invert">
                    <p className="text-green-200">Through our unique freezing process, we're able to capture and preserve the full spectrum of beneficial compounds exactly as nature intended, resulting in a more potent and effective final product.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'order':
        return (
          <div className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900">Order Our Premium 1000MG CBD Salve</h2>
                <p className="mt-4 text-lg text-gray-600">$80.00 per unit</p>
                <p className="mt-2 text-sm text-gray-500">
                  Shipping: $10.00 flat rate for orders up to 3 units
                  <br />
                  For orders of more than 3 units, shipping will be calculated by our sales team
                </p>
              </div>
              <form onSubmit={handleSubmitOrder} className="space-y-6 bg-green-50 p-8 rounded-lg shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                {/* Shipping Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Shipping Address</label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Street Address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      id="city"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      id="state"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                  <select
                    id="quantity"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num} unit{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="text-right">
                  <div className="mb-4 text-left">
                    <p className="text-lg font-semibold text-gray-900">Order Summary:</p>
                    <p className="text-gray-600">Product Total: ${orderQuantity * 80}.00</p>
                    {orderQuantity <= 3 ? (
                      <p className="text-gray-600">Shipping: $10.00</p>
                    ) : (
                      <p className="text-gray-600">Shipping: To be calculated</p>
                    )}
                    {orderQuantity <= 3 && (
                      <p className="text-lg font-semibold text-gray-900 mt-2">
                        Total: ${(orderQuantity * 80) + 10}.00
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      default:
        return (
          <>
            {/* Hero Section with Product Image */}
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1536179247184-595918a36b93?auto=format&fit=crop&q=80"
                  alt="Hemp field at sunset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-green-900/70 mix-blend-multiply"></div>
              </div>
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Raw Peak Hemp Farm</span>
                    <span className="block text-green-200 mt-2">100% Sun-Powered • Deaf-Owned</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-xl text-green-100 sm:max-w-3xl">
                    Premium organic hemp products from Beulah Valley, crafted with ancient wisdom and modern sustainability
                  </p>
                  
                  {/* Product Image and CTA Buttons */}
                  <div className="mt-10 relative">
                    <div className="max-w-md mx-auto mb-8">
                      <img
                        src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80"
                        alt="Raw Peak CBD Salve"
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => setCurrentTab('order')}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Get Your CBD Salve
                      </button>
                      <button
                        onClick={() => setCurrentTab('process')}
                        className="inline-flex items-center px-6 py-3 border border-green-100 text-base font-medium rounded-md text-green-100 hover:bg-green-800/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    Our Commitment to Excellence
                  </h2>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-green-50 rounded-xl p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                      <Sun className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">100% Sun-Powered</h3>
                    <p className="mt-2 text-gray-600">Harnessing natural energy for sustainable farming practices that protect our environment.</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Organic Cultivation</h3>
                    <p className="mt-2 text-gray-600">Pure, organic hemp grown with care in the rich soil of Beulah Valley.</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">Deaf-Owned & Operated</h3>
                    <p className="mt-2 text-gray-600">Proudly promoting inclusivity and empowerment in the agricultural community.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Overview Section */}
            <div className="py-24 bg-green-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    Our Unique Process
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    From harvest to healing: preserving nature's potency through innovation
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&q=80"
                      alt="Hemp harvesting"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Flash-Freezing Technology</h3>
                    <div className="prose prose-lg text-gray-600">
                      <p>Within moments of harvest, our hemp flowers are flash-frozen at -15°F, capturing the full spectrum of beneficial compounds at their peak potency. This critical step preserves the delicate terpenes and cannabinoids that make our product uniquely effective.</p>
                      <div className="flex items-center gap-3 mt-6 text-green-700">
                        <Thermometer className="h-6 w-6" />
                        <span className="font-semibold">Preserved at -15°F</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ancient Wisdom, Modern Methods</h3>
                    <div className="prose prose-lg text-gray-600">
                      <p>Our water-and-ice extraction method, inspired by ancient techniques, maintains temperatures below 40°F throughout the entire process. This gentle approach ensures we capture the purest essence of the plant without harsh chemicals or excessive heat.</p>
                      <div className="flex items-center gap-3 mt-6 text-green-700">
                        <Droplets className="h-6 w-6" />
                        <span className="font-semibold">Pure Water Extraction</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1584165857770-84a8ab802e02?auto=format&fit=crop&q=80"
                      alt="Extraction process"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center mt-16">
                  <button
                    onClick={() => setCurrentTab('process')}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Learn More About Our Process
                  </button>
                </div>
              </div>
            </div>

            {/* Product Section */}
            <div id="products" className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    Our Premium 1000MG CBD Salve
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Nature's healing power, preserved at peak potency
                  </p>
                </div>
                <div className="mt-16">
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <button 
                        onClick={() => setCurrentTab('order')}
                        className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-lg overflow-hidden"
                      >
                        <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white">
                          <img
                            src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80"
                            alt="1000MG CBD Salve"
                            className="h-full w-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                      </button>
                      <div className="mt-8 text-center">
                        <h3 className="text-2xl font-medium text-gray-900">Fresh-Frozen 1000MG CBD Salve</h3>
                        <p className="mt-4 text-lg text-gray-600">
                          Our signature salve, crafted with care and preserved at peak potency through our unique freezing process. Each unit contains 1000MG of premium CBD, extracted using our ancient water-and-ice method that ensures maximum preservation of beneficial compounds.
                        </p>
                        <div className="mt-6">
                          <button
                            onClick={() => setCurrentTab('order')}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            Order Now - $80.00
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Leaf className="h-8 w-8 text-green-200" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => setCurrentTab('home')}
                    className={`${
                      currentTab === 'home'
                        ? 'bg-green-800 text-white'
                        : 'text-green-200 hover:bg-green-800'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => setCurrentTab('roots')}
                    className={`${
                      currentTab === 'roots'
                        ? 'bg-green-800 text-white'
                        : 'text-green-200 hover:bg-green-800'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Roots
                  </button>
                  <button
                    onClick={() => setCurrentTab('process')}
                    className={`${
                      currentTab === 'process'
                        ? 'bg-green-800 text-white'
                        : 'text-green-200 hover:bg-green-800'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Process
                  </button>
                  <button
                    onClick={() => setCurrentTab('order')}
                    className={`${
                      currentTab === 'order'
                        ? 'bg-green-800 text-white'
                        : 'text-green-200 hover:bg-green-800'
                    } px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    Order Salve
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-green-200 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => {
                  setCurrentTab('home');
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentTab === 'home'
                    ? 'bg-green-800 text-white'
                    : 'text-green-200 hover:bg-green-800'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentTab('roots');
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentTab === 'roots'
                    ? 'bg-green-800 text-white'
                    : 'text-green-200 hover:bg-green-800'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Roots
              </button>
              <button
                onClick={() => {
                  setCurrentTab('process');
                  
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentTab === 'process'
                    ? 'bg-green-800 text-white'
                    : 'text-green-200 hover:bg-green-800'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Process
              </button>
              <button
                onClick={() => {
                  setCurrentTab('order');
                  setIsMenuOpen(false);
                }}
                className={`${
                  currentTab === 'order'
                    ? 'bg-green-800 text-white'
                    : 'text-green-200 hover:bg-green-800'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Order Salve
              </button>
            </div>
          </div>
        )}
      </nav>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-green-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-green-200">
              © 2025 Raw Peak Hemp Farm. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-green-300">
              Proudly serving our community from Beulah Valley
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;