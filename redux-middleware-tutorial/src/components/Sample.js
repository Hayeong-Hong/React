import React from 'react';

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩 중 . . .'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중 . . .'}
        {!loadingUsers && users && (
          <div>
            {users.map((user) => (
              <li key={user.di}>
                {user.username} ({user.email})
              </li>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Sample;