/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/model_files/anatomymodel.gltf 
*/

import React, { useEffect} from "react";
import { useGLTF } from '@react-three/drei';
import { useCharacterCustomization } from "./CharacterCustomizationContext.jsx";

function Anatomymodel (props) {
  const { nodes, materials } = useGLTF('/model_files/anatomymodel.gltf')

  const { skinColor, setSkinColor } = useCharacterCustomization();

  useEffect(() => {
    // Set the initial skin color based on the state
    setSkinColor(`#${materials.MBLab_skin2.color.getHexString()}`);
  }, [setSkinColor, materials.MBLab_skin2]);


  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.root} />
      <skinnedMesh 
      geometry={nodes.MBLab_human_male.geometry} 
      material={materials.MBlab_eyelash} 
      skeleton={nodes.MBLab_human_male.skeleton} 
      />

      <skinnedMesh 
      geometry={nodes.MBLab_human_male_1.geometry} 
      material={materials.MBlab_generic} 
      skeleton={nodes.MBLab_human_male_1.skeleton} 
      >
        <meshStandardMaterial
         {...materials.Skin}
         color={skinColor}
       />
       </skinnedMesh>

      <skinnedMesh geometry={nodes.MBLab_human_male_2.geometry} material={materials.MBlab_pupil} skeleton={nodes.MBLab_human_male_2.skeleton} />
      <skinnedMesh geometry={nodes.MBLab_human_male_3.geometry} material={materials.MBlab_human_eyes} skeleton={nodes.MBLab_human_male_3.skeleton} />
      <skinnedMesh geometry={nodes.MBLab_human_male_4.geometry} material={materials.MBlab_cornea} skeleton={nodes.MBLab_human_male_4.skeleton} />
      <skinnedMesh geometry={nodes.MBLab_human_male_5.geometry} material={materials.MBlab_iris} skeleton={nodes.MBLab_human_male_5.skeleton} />
      
      <skinnedMesh 
      geometry={nodes.MBLab_human_male_6.geometry} 
      material={materials.MBLab_skin2} 
      skeleton={nodes.MBLab_human_male_6.skeleton}
      >
        <meshStandardMaterial
                {...materials.Skin}
                color={skinColor}
              />
      </skinnedMesh>

      <skinnedMesh geometry={nodes.MBLab_human_male_7.geometry} material={materials.MBLab_tongue} skeleton={nodes.MBLab_human_male_7.skeleton} />
      <skinnedMesh geometry={nodes.MBLab_human_male_8.geometry} material={materials.MBlab_human_teeth} skeleton={nodes.MBLab_human_male_8.skeleton} />
      <skinnedMesh geometry={nodes.MBLab_human_male_9.geometry} material={materials.MBLab_nails} skeleton={nodes.MBLab_human_male_9.skeleton} />
    </group>
  )
}

useGLTF.preload('/anatomymodel.gltf')
export default Anatomymodel;