import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Marowak (Delta Species)",
         ja: "マロワク（デルタ種）",
         fr: "Marowak (espèces delta)",
         de: "Marowak (Delta -Arten)",
         es: "Marowak (especie delta)",
         it: "Marowak (Delta Species)",
         pt: "Marowak (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [105],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Metal"],
          name: {
            en: "Energy Bone",
            ja: "エネルギー骨",
            fr: "Os de l'énergie",
            de: "Energieknochen",
            es: "Hueso de la energía",
            it: "Osso di energia",
            pt: "Energy Bone",
          },
          effect: {
            en: "Choose a number of your opponent's Pokemon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them.",
            ja: "Marowakに取り付けられたエネルギーの量まで、相手のポケモンをいくつか選択してください。この攻撃は、それぞれに20のダメージを与えます。",
            fr: "Choisissez un certain nombre de Pokémon de votre adversaire jusqu'à la quantité d'énergie attachée à Marowak. Cette attaque fait 20 dégâts à chacun d'eux.",
            de: "Wählen Sie eine Reihe des Pokémon Ihres Gegners bis zu der an Marowak verbundenen Energie. Dieser Angriff schädigt jeweils 20 von ihnen.",
            es: "Elija varios de los Pokémon de su oponente hasta la cantidad de energía unida a Marowak. Este ataque hace 20 daños a cada uno de ellos.",
            it: "Scegli un numero di Pokemon del tuo avversario fino alla quantità di energia collegata a Marowak. Questo attacco fa 20 danni a ciascuno di essi.",
            pt: "Escolha um número de Pokémon do seu oponente até a quantidade de energia anexada a Marowak. Este ataque causa 20 danos a cada um deles.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Metal Crusher",
            ja: "メタルクラッシャー",
            fr: "Broyeur en métal",
            de: "Metallbrecher",
            es: "Trituradora de metal",
            it: "Crusher in metallo",
            pt: "Triturador de metal",
          },
          effect: {
            en: "If the Defending Pokemon is Metal Pokemon, this attack's base damage is 90.",
            ja: "防御ポケモンが金属ポケモンの場合、この攻撃の基本ダメージは90です。",
            fr: "Si le Pokémon en défense est Pokémon en métal, les dégâts de base de cette attaque sont de 90.",
            de: "Wenn das verteidigende Pokémon Metal -Pokemon ist, beträgt der Grundschaden dieses Angriffs 90.",
            es: "Si el Pokémon defensor es Pokémon de metal, el daño base de este ataque es 90.",
            it: "Se il Pokemon in carica è Pokemon di metallo, il danno base di questo attacco è 90.",
            pt: "Se o Pokémon atual for Pokémon de metal, o dano básico deste ataque é 90.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
