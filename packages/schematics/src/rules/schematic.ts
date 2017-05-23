import {Rule, SchematicContext} from '../engine/interface';
import {Tree} from '../tree/interface';
import {branch} from '../tree/static';

import {Observable} from 'rxjs/Observable';


export type SchematicOptions = {
  name: string;
  options: any;
};


export function schematic(options: SchematicOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const schematic = context.schematic.collection.createSchematic(options.name, options.options);
    return schematic.call(Observable.of(branch(host)), context);
  };
}