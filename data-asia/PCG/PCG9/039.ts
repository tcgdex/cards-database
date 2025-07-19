import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Cloyster (Delta Species)",
         ja: "クロイスター（デルタ種）",
         fr: "Cloyster (espèces delta)",
         de: "CLOYSTER (Delta -Arten)",
         es: "Cloyster (especie delta)",
         it: "Cloyster (Delta Species)",
         pt: "Cloyster (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [91],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Solid Shell",
            ja: "固体シェル",
            fr: "Coque solide",
            de: "Feste Hülle",
            es: "Concha sólida",
            it: "Guscio solido",
            pt: "Concha sólida",
          },
          effect: {
            en: "Prevent all effects of attacks, including damage, done by your opponent's PokÃ©mon to each of your Benched PokÃ©mon that has  on its card.",
            ja: "攻撃のすべての影響を防ぎます。これは、相手のPokã©Monがカードに載っているベンチポカモンに行われます。",
            fr: "Empêchez tous les effets des attaques, y compris les dégâts, causés par le poké de votre adversaire à chacun de vos poké bancs qui a sur sa carte.",
            de: "Verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die von dem Poké Mon Mon Mon Mong Ihres Gegners auf jeden Ihrer Bank -Poké Mons auf seiner Karte erfolgen.",
            es: "Evite todos los efectos de los ataques, incluido el daño, realizado por Poké Mon de su oponente a cada uno de sus Poké Mon que tiene en su tarjeta.",
            it: "Impedisci tutti gli effetti degli attacchi, inclusi i danni, eseguiti dal poké del tuo avversario a ciascuno dei tuoi poké in panchina che ha sulla sua carta.",
            pt: "Evite todos os efeitos dos ataques, incluindo danos, causados pelo Poké Mon do seu oponente a cada um dos seus Poké -Mon em bancos que possuem em seu cartão.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Grind",
            ja: "粉砕",
            fr: "Moudre",
            de: "Schleifen",
            es: "Moler",
            it: "Macinare",
            pt: "Moer",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each Energy attached to Cloyster.",
            ja: "10ダメージに加えて、クロイスターに付着した各エネルギーに対してさらに10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée à Cloyster.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede an Cloyster befestigte Energie.",
            es: "Hace 10 daños más 10 daños más por cada energía unida a Cloyster.",
            it: "Fa 10 danni più 10 danni in più per ogni energia attaccata a Cloyster.",
            pt: "10 danos mais 10 mais danos para cada energia ligada ao Cloyster.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
