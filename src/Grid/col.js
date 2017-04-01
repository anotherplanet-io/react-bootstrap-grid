/**
 * Copyright 2017 Autre planete Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

/* eslint-disable */

import React from 'react';
import classnames from 'classnames';

export default ({classNames, children, size, xs, sm, md, lg, xl, w, ...props}) => {

  console.log('props', classNames, children, align, size, xs, sm, md, lg, xl, w, flex, props);

  const sizeClassNames =  [];

  if (size) {
    sizeClassNames.push('col-' + size);
  } else {
    if (w) {
      sizeClassNames.push('w-' + w) // auto size
    } else {
      sizeClassNames.push('col') // auto size
    }
  }

  if (xs) {
    sizeClassNames.push('col-' + xs);
  }

  if (sm) {
    sizeClassNames.push('col-sm-' + sm);
  }

  if (md) {
    sizeClassNames.push('col-md-' + md);
  }

  if (lg) {
    sizeClassNames.push('col-lg-' + lg);
  }

  if (xl) {
    sizeClassNames.push('col-xl-' + xl);
  }

  switch (align) {
    case 'start':
      rowClassnames.push('align-self-start')
      break;
    case 'center':
      rowClassnames.push('align-self-center')
      break;
    case 'end':
      rowClassnames.push('align-self-end')
      break;
  }

  switch (flex) {
    case 'unordered':
      rowClassnames.push('flex-unordered')
      break;
    case 'first':
      rowClassnames.push('flex-first')
      break;
    case 'last':
      rowClassnames.push('flex-last')
      break;
  }

  console.log('sizeClassNames', sizeClassNames);

  return (
    <div
      {...props}
      className={classnames(sizeClassNames, classNames)}>
      {children}
    </div>
  );
}
