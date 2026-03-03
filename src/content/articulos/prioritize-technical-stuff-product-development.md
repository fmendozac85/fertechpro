---
titulo: "Why is it important to prioritize constantly technical stuff in product development?"
fecha: 2025-05-10
pilar: pm
extracto: "¿Por qué priorizar lo técnico incluso cuando el negocio presiona por entregar rápido? Exploremos por qué invertir en lo invisible puede ser el mayor impulso a la velocidad y valor del producto digital."
lectura: 7
destacado: false
imagen: /imagenes/prioritize-technical-stuff-product-development/art3-featureImage.png
---

It would not be precise if I say that technical stuff is never prioritize on product sprint work. For a product to be launched, the team definitely have had to developed previously some kind of solution design and coding at least, but being aware of the importance of making it sustainable over time is the real challenge. The technology landscape continuously evolves and there are better ways to solve functional and non-functional needs. Whether your infrastructure approach (100% cloud or hybrid), database strategy (relational or non-relational database), architectural design (monolithic/microservices), coding needs (concurrency strategies, technical debt, refactoring) and testing strategy (TDD, automation), your team would require enough time to deal with this complexity and more. Hence, with technical stuff I mean all things related to SDLC [2]. This is pretty known for technology stakeholders but its benefits are not necessary as clear as you think they are for business users. So, in the following lines I’ll share some of the reasons I consider the most important for product leaders to encourage these technical activities.

## To fulfill business goals
For example, the typical business goal might be increasing sales and revenue. You need orders to do that and an important driver makes its entrance, the Page Load. [3] According to Google, as page load time goes from 1s to 3s, the probability of bounce increases 32%. As it goes from 1s to 5s, the probability of bounce increases 90%.

![estadisticas de tiempo de carga](/imagenes/prioritize-technical-stuff-product-development/art3-pageLoad.png)

Indeed!!, It is a big deal but how to monetize it? [4] For Amazon, a page load slowdown of just one second could cost $1.6 billion in sales each year. The same for Google if their search result get slow by just four tenths of a second, they could lose 8 M searches per day, thus millions on advertisement. Then, on both examples you may see direct impact on business goals. My suggestion is to calculate your company orders in a second per year and that is the business impact of not working on technical stuff and also the benefit if you do.

## To perform an excellent Time to Market
It is critical for a business to keep moving on delivering attractive features constantly to their users. In order to do that, you need a friendly software to adopt changes easily. Refactoring and technical debt might be perceived as low value activities but they both are in fact enablers for healthy and fast software development. We may say that software is like a human being. «You are what you eat». If you have a balanced diet then you probably don’t get tired for jogging but if all you eat is pizza and nuggets, as delicious as they are, you might find hard even walking. In product development happens the same history, every time you develop incremental functionality, you need to refactor and optimize code, otherwise, the system might end up in the emergency room with a couple of weeks not being able to receive new food (new features) or even worst, having the need on investing additional budget, time and resources to solve urgent technical needs not addressed before. This is a totally preventable situation with huge impact on TTM.

![Time to Market](/imagenes/prioritize-technical-stuff-product-development/art3-TTM.jpg)

In addition, imagine you do encourage refactoring activities but you are still having problems with delivering fast because your team is all over technical stuff and not focusing on new features. Should you stop doing it? Absolutely not. What is probably missing here is the lack of automation. For modern development, you need to automate testing and basically every manual task you identify takes valuable team’s capacity. Remember that repetitive tasks do not generate value. Focus on TTM and enable it by continuous automation.

## To manage an economic and financially healthy product
A key economic concept for investment analysis is the opportunity cost. [5] It is referred to the «cost» incurred by not enjoying the benefit associated with the best alternative choice. When evaluating investment decisions, you need to compare the benefit of option A vs option B ‘s opportunity cost. In product development, the opportunity cost of not taking care of technical stuff consistently is the sales lost occurred by software unavailability for a period of time or page load slowdown. Hence, for decision making remember to take this economic criterion into account.

![financially healthy product](/imagenes/prioritize-technical-stuff-product-development/art3-finance.jpg)

Likewise, debt is another concept very important here. We are all familiar with debt implications. We borrow money to do something now instead that later and in return, we pay interests until we pay all the money back. Technical debt ([6] which reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer) works pretty much as any other debt. It’s expected to pay interest in order to move forward faster (we all know that economic growth is based on leverage) but you need to be smart and careful on taking debts. It’s expected to pay interest from a student loan, a home mortgage or car loan but definitely not for high-interest credit cards. Accumulating technical debt is like the last one or not even paying for a low-rate interest debt. Hence, check continuously your technical debt as carefully as you monitor your finance.

## To protect your product from malicious access
There are many threats out there waiting for fragile software to take advantage of. Malware, trojans, sql injection, among others, may damage your system unless you keep an eye on it and design it to deal with edge cases and non-typical scenarios. Not availability situation might be the least of the problems if your data is compromised and your customer’s loyalty is lost. [7] A report by RiskBased Security revealed that a shocking 7.9 billion records have been exposed by data breaches in the first nine months of 2019 alone. This figure is more than double (112%) the number of records exposed in the same period in 2018. Hence, especially in these COVID times, all digitalization efforts ought to be accompanied with a security preventive approach. It is by far the best choice.

![cybersecurity is extremely important](/imagenes/prioritize-technical-stuff-product-development/art3-cybersecurity.jpg)

## To have an efficient implementation
In product development, it is typical to work using projects in which a team is in charge to create something new given a period of time, budget and scope. Besides all the work needed to address project needs, there is something else you all as professionals would look for, efficiency.

![efficiency](/imagenes/prioritize-technical-stuff-product-development/art3-efficiency.png)

On projects is expected to look for ways to work in efficient ways, I mean to work on tasks with the least amount of resources. This is obviously correct but you should be careful to apply it correctly according to the context. Software development has always been related to work as factories, using specifics steps to create something new with no waste at all. Others relate it to construction. Although you can get several good practices from there, they don’t fully apply on software development. They both assume once you design and implement the foundation, there is not much to change there. Nonetheless, [8] As Pragmatic programmer book states, «software is more like “gardening”. It is more organic than concrete. You plant many things in a garden according to an initial plan and conditions. Some thrive, others are destined to end up as compost. You may move plantings relative to each other to take advantage of the interplay of light and shadow, wind and rain. Overgrown plants get split or pruned, and colors that clash may get moved to more aesthetically pleasing locations. You pull weeds, and you fertilize plantings that need some extra help. You constantly monitor that health of the garden, and make adjustments (to the soil, the plants, the layout) as needed». Then, remember that making constant technical adjustments in software evolution is not lack of efficiency, in fact is the other way around.

Finally, it is crucial for product leaders to understand how important technical stuff is on a sprint-work basis. In order to fulfill business goals, perform a remarkable TTM, manage an economic and financially healthy product, protect it from malicious access, and being efficient on its development, making technical adjustment is something you do continuously. On the other hand, [9] for development teams, your most important mission is to **delight your users**, whether they are the actual customers or internal users. Hence, you need to work closely with product leaders explaining them technical adjustments needs so your software may adapt to changes easily and in consequence, most of the team’s time may be oriented to work on new features for your users needs.

Referencias:

- [1] Feature-Image. Omar Ordoñez. [«Speed Drawing: Captain America vs Ironman (Civil war)»](https://www.youtube.com/watch?v=JmJq5vTg9Kk).  
- [2] stackify. [«What is SDLC? Understand the Software Development Life Cycle»](https://stackify.com/what-is-sdlc/).  
- [3] Google. [«Find out how you stack up to new industry benchmarks for mobile page speed»](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/). 
- [4] FastCompany. [«How one second could cost Amazon $1.6 Billion in sales»](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales).  
- [5] Wikipedia. [«Opportunity cost»](https://en.wikipedia.org/wiki/Opportunity_cost).  
- [6] Wikipedia. [«Technical debt»](https://en.wikipedia.org/wiki/Technical_debt#:~:text=Technical%20debt%20(also%20known%20as,approach%20that%20would%20take%20longer).  
- [7] Kaspersky. [«What is Cyber Security»](https://www.kaspersky.com/resource-center/definitions/what-is-cyber-security).  
- [8,9] David Thomas, Andrew Hunt (2019). «The pragmatic programmer«, USA: Pearson Education Inc