import { styled } from "styled-components";
import { Card } from "../../atoms/Card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name}></UserIconWithName>
      <SDL>
        <dl>
          <dt>メール</dt>
          <dd>{user.email}</dd>
          <dt>TEL</dt>
          <dd>{user.phone}</dd>
          <dt>会社名</dt>
          <dd>{user.company.name}</dd>
          <dt>WEB</dt>
          <dd>{user.website}</dd>
        </dl>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-algin: left;
  dt{
    float: left;
  }
  dd{
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
