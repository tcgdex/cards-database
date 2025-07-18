import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Xatu",
         ja: "サブリナのXatu",
         fr: "Le xatu de Sabrina",
         de: "Sabrinas Xatu",
         es: "Xatu de Sabrina",
         it: "Sabrina's Xatu",
         pt: "Xatu de Sabrina",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [178],
      hp: 70,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Teleport",
            ja: "テレポート",
            fr: "Se téléporter",
            de: "Teleport",
            es: "Teletransporte",
            it: "Teletrasporto",
            pt: "Teleport",
          },
          effect: {
            en: "Switch Sabrina's Xatu with 1 of your Benched Pokemon, if any.",
            ja: "SabrinaのXatuを、1つのベンチポケモンを使用して切り替えます。",
            fr: "Communiquez le xatu de Sabrina avec 1 de votre pokemon banc, le cas échéant.",
            de: "Sabrinas Xatu mit 1 Ihres Bankpokémons, falls vorhanden, wechseln.",
            es: "Cambia de Xatu de Sabrina con 1 de tu Pokémon de banca, si es que hay alguno.",
            it: "Switch Sabrina's Xatu con 1 del tuo Pokemon in panchina, se presente.",
            pt: "Mudar o Xatu de Sabrina com 1 do seu Pokémon em banco, se houver.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sharp Beak",
            ja: "シャープなくちばし",
            fr: "Bec acéré",
            de: "Scharfer Schnabel",
            es: "Pico agudo",
            it: "Becco affilato",
            pt: "Bico afiado",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
