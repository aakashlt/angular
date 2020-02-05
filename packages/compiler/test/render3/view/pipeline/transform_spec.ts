/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
import {TemplateAstGen} from './util';
import {CreateIRKind, CirElementStart} from '@angular/compiler/src/render3/view/pipeline/api';

describe('', () => {
  describe('elements', () => {
    fit('should produce a series of element start/end instructions', () => {
      const list = new TemplateAstGen();
      const section = list.elementStart('section');
      const div = list.elementStart('div');
      list.elementEnd(div);
      list.elementEnd(section);

      debugger;
      const result = list.build();
      expect(result[0].kind).toEqual(CreateIRKind.ElementStart);
      expect((result[0] as CirElementStart).tag).toEqual('section');

      expect(result[1].kind).toEqual(CreateIRKind.ElementStart);
      expect((result[1] as CirElementStart).tag).toEqual('div');

      expect(result[2].kind).toEqual(CreateIRKind.ElementEnd);
      expect(result[3].kind).toEqual(CreateIRKind.ElementEnd);
    });
  });
});
