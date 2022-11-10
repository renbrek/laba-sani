import type { FC } from 'react';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <img
        style={{
          borderRadius: '1rem',
        }}
        src="/image.jpg"
      />
      <br />
      <br />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aspernatur labore quo incidunt velit qui molestiae delectus eligendi aut
        accusamus enim quaerat dicta reprehenderit consequatur, deleniti, nemo
        assumenda itaque voluptate! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat aspernatur labore quo incidunt velit qui
        molestiae delectus eligendi aut accusamus enim quaerat dicta
        reprehenderit consequatur, deleniti, nemo assumenda itaque voluptate!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aspernatur labore quo incidunt velit qui molestiae delectus eligendi aut
        accusamus enim quaerat dicta reprehenderit consequatur, deleniti, nemo
        assumenda itaque voluptate!
      </span>
    </div>
  );
};
export default HomePage;
