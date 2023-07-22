        <span class="mb-10 text-sm">Filters <i class="bi bi-filter"></i></span>
        <div class="flex gap-3 flex-wrap mb-10">
          <button class="button " :class="{ 'selected': projects == 'all' }" @click="projects = 'all'">
            All
          </button>
          <button class="button " :class="{ 'selected': projects == 'ux' }" @click="projects = 'ux'">
            UX Design
          </button>
          <button class="button " :class="{ 'selected': projects == 'fse' }" @click="projects = 'fse'">
            Full-stack development
          </button>
        </div>
        <Transition name="fade" mode="out-in">
          <div data-aos="fade-up" data-aos-duration="1200" class="mb-20 md:columns-2 gap-10 mx-auto"
            v-if="projects != 'ux'">
            <div class="col-md-5 w-full " data-aos="fade-up" data-aos-duration="1600">
              <h3 class="mb-4 text-3xl">Front End Development & UX Design at MyPocketSkill</h3>
              <p class="mb-4">
                Currently working as 1 of 2 developers at MyPocketSkill to help grow user base, improve UX, site
                performance
                and improve site
                authority and visual style. I redeveloped over 100 site components from
                inception, to research, to delivery to improve modularity,
                and performance. This has helped improve the number of returning users and grow revenues.
              </p>
              <div class="mb-5">
                <div class="tag">html</div>
                <div class="tag">css</div>
                <div class="tag">javascript</div>
                <div class="tag">vue</div>
                <div class="tag">django</div>
                <div class="tag">rest API</div>
                <div class="tag">python</div>
                <div class="tag">usability testing</div>
                <div class="tag">wireframing</div>
                <div class="tag">google analytics</div>
                <div class="tag">UI design</div>
              </div>
              <!-- <button class="button me-1"><a href="/">Read more <i class="bi bi-arrow-right"></i></a></button> -->
              <a href="https://www.mypocketskill.com" target="_blank">
                <button class="button">
                  Visit site <i class="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
            <div style="display: flex; justify-content: center;">
              <div class="image-container">
                <img src="assets/images/tlevel-image.jpg" style="width: 100%; height: fit-content;"
                  alt="platform screencap" />
              </div>
            </div>
          </div>
        </Transition>

        <transition name="fade" mode="out-in">
          <div data-aos="fade-up" data-aos-duration="1200" class="md:columns-2 gap-10 mx-auto mb-10"
            v-if="projects != 'ux'">
            <div class="col-md-5 w-full" data-aos="fade-up" data-aos-duration="1600">
              <h3 class="mb-2 text-3xl">Full-Stack Recipe App</h3>
              <p class="mb-5"><em>Work in progress</em></p>
              <p class="mb-5">
                A daily problem I encounter is not knowing what to cook. I wanted to create a recipe app that would help
                me
                randomly generate recipes for the week, customise my preferences and scrape recipes from sites such as
                BBC
                Good Food and others so that I could more intuitively plan weekly meals.
              </p>
              <div class="mb-5">
                <div class="tag">html</div>
                <div class="tag">css</div>
                <div class="tag">javascript</div>
                <div class="tag">vue</div>
                <div class="tag">django</div>
                <div class="tag">python</div>
                <div class="tag">fireship deployment</div>
                <div class="tag">relational databases</div>
                <div class="tag">web scraper</div>
                <div class="tag">UI design</div>
              </div>
              <a href="https://recipe-app-frontend-92d44.web.app/" target="_blank">
                <button class="button">
                  Visit site <i class="bi bi-arrow-right"></i>
                </button>
              </a>
            </div>
            <div style="display: flex; justify-content: center;">

              <div class="image-container">
                <img src="assets/images/recipe-planner.png" style="width: 100%; "
                  alt="platform screencap" />
              </div>
            </div>
          </div>
        </transition>