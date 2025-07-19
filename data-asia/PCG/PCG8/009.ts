import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Swalot",
         ja: "スワロット",
         fr: "Swalot",
         de: "Swalot",
         es: "Bucle",
         it: "Swalot",
         pt: "Swalot",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [317],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pick and Choose",
            ja: "選択して選択します",
            fr: "Choisir",
            de: "Wählen Sie aus",
            es: "Ser muy exigente",
            it: "Scegli e scegli",
            pt: "Escolha",
          },
          effect: {
            en: "Choose either Burned or Poisoned, and either Asleep or Confused. The Defending Pokemon is now affected by both Special Conditions.",
            ja: "燃やされたり毒されたり、眠ったり混乱したりするかのいずれかを選択します。防御ポケモンは現在、両方の特別な条件の影響を受けています。",
            fr: "Choisissez brûlé ou empoisonné, et endormi ou confus. Le Pokémon en défense est désormais affecté par les deux conditions spéciales.",
            de: "Wählen Sie entweder verbrannt oder vergiftet und schlafend oder verwirrt. Das verteidigende Pokémon ist jetzt von beiden besonderen Bedingungen betroffen.",
            es: "Elija quemado o envenenado, y dormido o confundido. El Pokémon defensor ahora se ve afectado por ambas condiciones especiales.",
            it: "Scegli bruciato o avvelenato e addormentato o confuso. Il Pokemon in carica è ora influenzato da entrambe le condizioni speciali.",
            pt: "Escolha queimado ou envenenado e dormindo ou confuso. O Pokémon atual agora é afetado por ambas as condições especiais.",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Reactive Poison",
            ja: "反応毒",
            fr: "Poison réactif",
            de: "Reaktives Gift",
            es: "Veneno reactivo",
            it: "Veleno reattivo",
            pt: "Veneno reativo",
          },
          effect: {
            en: "Does 50 damage plus 20 more damage for each Special Condition affecting the Defending Pokemon.",
            ja: "50のダメージと、防御ポケモンに影響を与える特別な状態ごとに20のダメージをさらに20回かけます。",
            fr: "Fait 50 dégâts plus 20 dommages supplémentaires pour chaque condition spéciale affectant le Pokémon en défense.",
            de: "Fügt 50 Schäden plus 20 weitere Schäden für jeden besonderen Zustand, der das verteidigende Pokémon betrifft.",
            es: "Hace 50 daños más 20 más de daño por cada condición especial que afecta al Pokémon defensor.",
            it: "Fa 50 danni più 20 danni in più per ogni condizione speciale che colpisce il Pokemon in difesa.",
            pt: "Causam 50 danos mais 20 mais danos para cada condição especial que afeta o pokemon defensor.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
