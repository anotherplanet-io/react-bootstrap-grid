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

export default ({classNames, align, justify, noGutters, children,...props}) => {

  const rowClassNames = ['row'];

  switch (align) {
    case 'start':
      rowClassNames.push('align-items-start')
      break;
    case 'center':
      rowClassNames.push('align-items-center')
      break;
    case 'end':
      rowClassNames.push('align-items-end')
      break;
  }

  switch (justify) {
    case 'start':
      rowClassNames.push('justify-content-start')
      break;
    case 'center':
      rowClassNames.push('justify-content-center')
      break;
    case 'end':
      rowClassNames.push('justify-content-end')
      break;
    case 'around':
      rowClassNames.push('justify-content-around')
      break;
    case 'between':
      rowClassNames.push('justify-content-between')
      break;
  }

  if (noGutters) {
    rowClassNames.push('no-gutters')
  }

  return (
    <div
      {...props}
      className={classnames(rowClassNames, classNames)}>
      {children}
    </div>
  );
}
