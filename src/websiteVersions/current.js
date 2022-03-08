export const site_template = {
    
  pages: [
    {
      id:1,
      name:"LaRae Day",
      path:"/"
    },
    {
      id:2,
      name:"Partnerships",
      path:"/partnerships"
    }, 
    {
      id:3,
      name:"Social Media Coaching",
      path:"/social-media-coaching"
    },
    {
      id:4,
      name:"Talent Coaching",
      path:"/talent-coaching"
    },
    {
      id:5,
      name:"Life Coaching",
      path:"/life-coaching"
    },
    
    {
      id: 6,
      name:"Talent",
      path:"/talent"
    }
          ],
  masterNavBarData: 
      [
        {
          id:2,
          name:"Partnerships",
          path:"/partnerships"
          
        },
        {
          id:4,
          name:"Coaching",
          dropdown:
            [
              { name: "Social Media Coaching", path: "/social-media-coaching", id: 7},
              { name: "Talent Coaching", path: "/talent-coaching", id: 8},
              { name: "Life Coaching", path: "/life-coaching", id: 9},
            ]
        },
        
        {
          id:5,
          name:"Talent",
          path:"/talent"
        }
      ],
      socialMedias:[
        {
          location  :"Instagram",
          link:"https://www.instagram.com/larae.day"
        },
        {
          location  :"Tiktok",
          link:"https://www.tiktok.com/@larae.day?"
        },
        {
          location  :"Pinterest",
          link:"https://www.pinterest.com/laraedaylifebylarae/_created/"
        },
        {
          location  :"Facebook",
          link: "https://www.facebook.com/larae.day.erwin"
        }
      ],
  
    ["LaRae Day"]: [
        { 
          name: "Header",
          id: `Home-Header-0-589`,
          content: { html: "Coming Soon" }
        },
        {
          name: "Paragraph",
          id: `Home-Paragraph-2-381`,
          content: {html:`<h3 class="text-center">LaRaeDay.com</h3>`}
        },
        {
          name: "CountDown",
          id: `Home-CountDown-2-381`,
          content:
            {
              date: '2022-03-15',
              includes: [true,true],
              timeStyle: "Words",
              finalText: "",
            }
          // content:{src: "construction.png"}
        },
        {
          name: "SubscriberBox",
          id: `Home-SubscriberBox-2-381`,
          content:
            {
              header: "Subscribe here to learn more"
            }
          // content:{src: "construction.png"}
        },
        {
          name: "Paragraph",
          id: `Home-Paragraph-2-381`,
          content: {html:`<p>
          <br>
          <br>
          </p>`}
        },
        {
          name: "Footer",
          id: `Site Creator-Footer-596`,
          content:{}

        }
    ],
    ["Partnerships"]: [
      {
        name: "Header",
        id: `Getting Started-Header-0-654`,
        type: "h1",
        content: { html: "Partnerships" }
      },
      {
        name: "Navbar",
        id: `Getting Started-Navbar-1-891`,
        content:{}

      },
      {
        name: "Paragraph",
        id: `Home-Paragraph-2-381`,
        content: {html:`<p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        </p>`}
      },
      {
        name: "Footer",
        id: `Getting Started-Footer-5-298`,
        content: { }
      }
    ],
    ["Social Media Coaching"]:[
      {
        name: "Header",
        id: `Need Help-Header-0-654`,
        type: "h1",
        content: { html: "Need Help?" }
      },
      {
        name: "Navbar",
        id: `Need Help-Navbar-1-381`,
        content:{}

      },
      {
        name:"ProductComparisonCards",
        id:"Need Help-ProductComparisonCards-2-381",
        content:[
          {
          header:"Basic Help (Steps 1-3)",
          price:"500$",
          bodyContent: {html:` <p>- Personal domain and business email</p>
                        <p>- 1 Year of website hosting included</p>
                        <p>- Server set up and Installation</p>
                        <p>- Upload any templates or site files</p>`}
        },
        {
          header:"Advanced Help (Steps 1-4)",
          price:"1,250$",
          bodyContent: {html:` <p>- Everything in the Basic Help Package</p>
                        <p>- 2 Years of website hosting included</p>
                        <p>- Help with website design</p>
                        <p>- Payment & Social Media integration</p>`}
        },
        {
          header:"Custom Help",
          price:"Inquire Below",
          bodyContent:{html:` <p>- Want a custom component?</p>
                        <p>- Want to do more with your website?</p>
                        <p>- Want a custom website style or design?</p>
                        <p>- Anything else?</p>`}
        },
        ]
      },
      {
        name: "Header",
        id: `Need Help-Header-4-654`,
        type: "h1",
        content: { html: "Have additional questions?" }
      },
      {
        name: "DyanmicForm",
        id: `Need Help-EmailSender-4-654`,
        content: {
          
        }
      }
    ],
    
    ["How It Works"]: [
      { 
        name: "Header",
        id: `How It Works-Header-0-${ String(new Date().getTime()).slice(-3) }`,
        content: { html: "React Site Creator" }
      },
      {
        name: "Navbar",
        id: `How It Works-Navbar-1-${ String(new Date().getTime()).slice(-3) }`,
        content:{}

      },
      {
        name: "WalkThrough",
        id: `How It Works-WalkThrough-2-886`,
        content: {
          pagePath:"how-it-works",
          links: [],
          html: `<h1>Everything Is Customizable</h1>
          <p>Literally everything is customizable to some degree or another. Go ahead and try and edit something. You should be able to just click on text and start typing. Other components may have a pencil icon that will toggle editing. </p>
          <p>If you can't edit anything you probably have edit mode turned off.</p>
          <h2>Admin Edit Mode</h2>
          <p>To begin customizing the website first ensure that edit mode is on. If you can click on the page header "How It Works" and change it to whatever you would like, then you are in edit mode. Congrats! Go ahead and skip to the next section. If not, you will need to go to your admin landing page. Go ahead and change the browser url to /&lt;your-site-name&gt;/admin. This page is called jado66.github.io/site-creator so my final url will look like this:</p>
          <pre class="ql-syntax" spellcheck="false">https://jado66.github.io/site-creator/admin</pre>
          <p>When you hit enter you'll be prompted with a login page (if you haven't logged in before). Sign in by whatever method you prefer and check "Remember Me" if this is your personal computer. </p><p>You should immediately see the editor ribbon under the "Admin Editor Tools" header. Go ahead and click the on the admin controls.</p>
          <p> It looks like this:    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMmSURBVGhD1Vm9dtowFHZ5AXiCwNRsZmq7kanZoEs6kicInZoNtnQqeQLSFyhZSjfSF2g74S2dYGs78QbO/cSVjxz92AYZw3fOd64sS7Kk+6MrCLbB4+OfeDgaxZ2zs7jRaMRUJSSex7e3Md5vWh4o/v77H/cvL8XEs4h2aE/lw8LPX7/jZqulTdhFtEc/Kh8GYCrShIoS/Q7G1NrttjbBIuT+1WIyudMmtg15nOpQ1C9srFQrbNveWKav1FgasYgWXPID3+OpcC4kWkRc8gPf46lwLuSY4FxI2A655Ae+x8uNY3L2TDSbTW1C2zAMQ8jqcCwH4guWTmA3o2j7iEP9A+qf61vA/OFHsujmyUlwevoyd18nYNv1ej21w3mJfnl9gzNljd1uD9IPRBpf0F/QvkgaP58/aGOAnU4H0h/Exarf1z5kItoVvVjtbSESMJXP47H4gDQ5SDyjPsuU5E1TagvPuDq77jy4RvNCk/aVZ9TqdRnlIhn2YPAhaV/ppe3rdJqa2K6U1wNnWIMKEXYjylrX67Woo47B+4uLzHA4vb+PF4tNtktRJ3jz+pXog91cLZei3hdoc8wLge1+urkJZrNvXJMGqTTo9no49YktIVerFXEp5PfZLFk4QOoXZwFs/Pz8Lde6Qf7GY664xg7yHy4pgA2S8E2BPGY1HI4gE2BTOb2xMhXVYEa7/shgoxpd4Jx8wGm8uhpAakAf04GMOi1y9XrvtIa+iOiiHoy288J1eJoWr2pC3EewKps/+AD8hZxd7CxXGSEDggkIMi7UYFLX1x/5sRyQCcDWM5M/l0ZkBLSCbaxUPvcRmxm7fMR06qNucvdl08fmeJ4pkCtqUepBMgG0lBWEkL7s/HNoHsJ8SVqd3ERMLm/qIp1ee+Gbqmn5ujqrZE2bX/ok76yA71xL/S1Ae1kGVa2odxqUi2gJAUG2x4GohvRUw7KICCN9BRILkOEWz0hNTKe3JPxA3kcAtJcmJZHqUCY57FphCwapXMqCGlLsfQHZAxajagZ/nsrnncDq3TvV0CpNxjYXPuuygQHQ2GWjZRHffZ6DYWGS+bQVBE9ClNr0DLkDwwAAAABJRU5ErkJggg=="></p>
          <p>Make sure that "Admin Edit Mode" is checked. If you would like to see the editor ribbon while you make edits click the "Show Admin Editor" checkbox.</p>
          <p>Now go and have fun!</p>
          <h2>Dynamic Pages</h2>
          <p>Your site should come with a few pre-defined pages. You can change each pages name, the path, and add or delete pages as you like.</p>
          <p>To do so, go to the editor ribbon (see the previous step if it isn't at the top of the page) and click on the pages menu. </p>
          <p>It looks like this:    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAoCAYAAADpE0oSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFESURBVFhH7ZjNbYMwFIBfsgCcktzYIGzABqETMEXaG0zDBskpyY1b2xPdgFvbE0xA3gPrSQRjOYlxVcmf9ORf+GxDLGIg3j8+2zh+aTH7dIRh2KZZRnk1JMXEeNAAvn9+KS9nt4tHF5kKlXyBwQ2e5wF2FiU9yrKEpmlEaQzd73S+wGa9ItcAHmEURdLRqRDXcCRJMihTTM2cO5gQU52unBtNiQkdOTeYFBNTckw7uNK0mJDJ0zRrl5iZlTzPFygXpZ7j8dClPBJDM9aK2Wc8xdPiIAhE7j4GOxcuGxRFMdphVNDP4+11D1VViRo5sh2O1/2RZ6zL7bvwf5/xozixNZzYGk5sDSe2hhNbw4mt8Wfiweet7/uwvfOPuS5f+Hlb13WXpwOAWY8ipqJzznX4ogrh7E9+aBS4BKNOpoLuTY5eCnAFGmNf8DBo/xoAAAAASUVORK5CYII="></p>
          <p>In the pages menu you will a submenu for each of your websites pages. In each submenu you will be able to change either the name or path of the page. There is also a link to the page and a delete option. </p>
          <blockquote>Pro tip: It might be difficult if to try and change the page you are currently on. This is because with each key press the page will be re-rendered under and updated with a new name or new path. To avoid this, simply navigate to another page on your site and then return after making modifications. </blockquote>
          <p>In addition to your website pages you will find submenus for the Checkout Page and your Admin page. For the time being these submenus only have links to visit the pages. </p>
          <p>To add pages simply press the "<strong>+</strong>" button and give your new page a name and a path. Make sure that each page has a unique name and path.</p>
          <p>You might expect a new page to be automatically added to your navigation bar, however, this is not the case. </p>
          <h2>Editing The Navigation bar</h2>
          <p>The navigation bar, a.k.a. the navbar, operates independent of your sites pages. This is behavior is intentional to allow for pages to be separated from the main website content (some examples we'll be given later on) and to allow for external links to be added to the navbar.  </p>
          <p>While in edit mode, the positioning of the links can be modified by hovering the mouse cursor over each link. You will notice edit buttons appear on both sides of the link. The "<strong>+</strong>" button will insert a link on either the left or the right side of the link, while the double arrowed buttons, "<strong>&gt;</strong>", will swap the link's position with its neighbor.   </p>
          <p>To edit the link names, or to delete links, move your cursor to the anywhere on the navbar and you will see a pencil icon. When clicked on all of the links will become editable. You can edit both the link text and the link path much like the pages.</p>
          <blockquote>Pro tip: Make sure all external links start with "https://". If the paths start with "/" they will be internal links and will direct you and users to a page in the website, which may or may not exist. </blockquote>
          <p><br></p>`
        }
      },
      {
        name: "Footer",
        id: `Site Creator-Footer-5-${ String(new Date().getTime()).slice(-3) }`,
        content:{}

      }
  ],
    ["Components"]: [
    { 
      name: "Header",
      id: `Components-Header-0-459`,
      content: { html: "React Site Creator" }
    },
    
    {
      name: "Navbar",
      id: `How It Works-Navbar-1-496`,
      content:{}
    },
    { 
      name: "Header",
      id: `Components-Header-2-896`,
      content: { html: "Gallery: Try Dragging The Pictures" }
    },
    {
      name:"PhotoGallery",
      id:"Components-Gallery-3-837",
      content: { }
    },
    { 
      name: "Header",
      id: `Components-Header-4-879`,
      content: { html: "Appointments: Connect To Your Google Calendar" }
    },
    {
      name:"Appointments",
      id:"Components-Appointments-5-837",
      content: { }
    },
    {
      name:"Mosaic",
      id:"Components-Mosiac-6-165",
      content: {
        lPicContent: {src:"test.png"},
        lLinkBoxContent:{
          title:"Get Your Own Site",
          subTitle:"Pay Us Nothing",
          linkTxtContent:{
            txt:"These are the steps",
            href:"getting-started"
          }
        },
        rPicContent: {src:"test2.png"},
        rLinkBoxContent:{
          title:"Everything Is Editable (Even this)",
          subTitle:"Try editing this website",
          linkTxtContent:{
            txt:"This tutorial explains how.",
            href:"how-it-works"
          }
        }
      }
    },
    
    {
      name: "Footer",
      id: `Site Creator-Footer-5-${ String(new Date().getTime()).slice(-3) }`,
      content:{}

    }
  ],
  };