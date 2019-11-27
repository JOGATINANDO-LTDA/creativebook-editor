import { Node, NodeId } from "interfaces";
import { ROOT_NODE } from "craftjs-utils";

export * from "./Canvas";
export * from "./NodeElement";
export * from  "./mapChildrenToNodes"
export * from './Selector';


/** Some helper functions */
export const isCanvas = (node: Node | NodeId) => typeof node == 'string' ? node.startsWith("canvas-") : node.data.isCanvas
export const isRoot = (node: Node) => node.id == ROOT_NODE;
export const isTopLevelCanvas = (node: Node) => !isRoot(node) && node.data.parent.startsWith("canvas-");
export const isDeletable = (node: Node) => !isRoot(node) && (isCanvas(node) ? isTopLevelCanvas(node) : true);
export const isMoveable = (node: Node) => isDeletable(node) && node.rules.canDrag();