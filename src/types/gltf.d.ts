import { GLTF } from "three-stdlib";
import type { Mesh, Material } from "three";

export type GLTFNodes = {
  [key: string]: Mesh;
};

export type GLTFMaterials = {
  [key: string]: Material;
};

export type GLTFResult = GLTF & {
  nodes: GLTFNodes;
  materials: GLTFMaterials;
};
