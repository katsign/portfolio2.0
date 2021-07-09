import ProjectCard from '../ProjectCard';
import Devlr from '../../assets/images/ss_dev.PNG';
import PAIR from '../../assets/images/ss_pair.png';
import Budget from '../../assets/images/ss_budget.PNG';
import Devteam from '../../assets/images/ss_devteam.PNG';
import Burger from '../../assets/images/ss_brgr.png';
import Users from '../../assets/images/ss_users.PNG';

const WebDev = () => {
  return (
    <div>
      <div className="card-group mb-1">
        <ProjectCard
          link="https://devlrapp.herokuapp.com/"
          image={Devlr}
          title="devlr Developer Network"
          blurb="Create a customized profile to display your development background, pinned projects and status updates to share with other developers worldwide."
          repo="https://github.com/brandyquinlan/devlr"
        />
        <ProjectCard
          link="https://brandyquinlan.github.io/PAIR/"
          image={PAIR}
          title="PAIR Culinary Curation"
          blurb="Pair is a dynamic and mobile-responsive web application that lets a user search for food and cocktail recipes from separate databases and curate the results in one place."
          repo="https://github.com/brandyquinlan/PAIR"
        />
      </div>
      <div className="card-group mb-1">
        <ProjectCard
          link="https://katsign-budget-tracker.herokuapp.com/"
          image={Budget}
          title="Progressive Budget Tracker"
          blurb="This progressive web app uses MongoDB and IndexedDB to let a user add expenses and deposits to their budget on the go, with or without a connection."
          repo="https://github.com/katsign/pwa-budget"
        />
        <ProjectCard
          link="https://katsign.github.io/devteam/"
          image={Devteam}
          title="DevTeam Profile Generator"
          blurb="This Node.js command line application generates a styled HTML webpage containing your development team's contact info and professional roles."
          repo="https://github.com/katsign/devteam"
        />
      </div>
      <div className="card-group mb-1">
        <ProjectCard
          link="https://katsign-gotta-eat.herokuapp.com/"
          image={Burger}
          title="Express Burger Log"
          blurb="This simple full-stack application uses Node.js, Express, a MySQL database and the templating engine Handlebars to display logs of newly-ordered and devoured burgers."
          repo="https://github.com/katsign/gotta-eat"
        />
        <ProjectCard
          link="https://katsign.github.io/react-user-directory/"
          image={Users}
          title="React User Directory"
          blurb="This web app lets a user view, sort and filter through a directory of users from the Random User Generator API using state management in React."
          repo="https://github.com/katsign/react-user-directory"
        />
      </div>
    </div>
  );
};

export default WebDev;
