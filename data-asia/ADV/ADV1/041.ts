import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Slakoth",
         ja: "スラコス",
         fr: "Slakoth",
         de: "Slakoth",
         es: "Slakoth",
         it: "Slakoth",
         pt: "Slakoth",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [287],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Claw",
            ja: "爪",
            fr: "Griffe",
            de: "Klaue",
            es: "Garra",
            it: "Artiglio",
            pt: "Garra",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Slack Off",
            ja: "スラックオフ",
            fr: "Se relâcher",
            de: "Nachlassen",
            es: "Aflojar",
            it: "Allentare",
            pt: "Slack Off",
          },
          effect: {
            en: "Remove all damage counters from Slakoth. Slakoth can't attack during your next turn.",
            ja: "Slakothからすべてのダメージカウンターを削除します。スラコスは次のターン中に攻撃できません。",
            fr: "Retirez tous les compteurs de dégâts de Slakoth. Slakoth ne peut pas attaquer pendant votre prochain tour.",
            de: "Entfernen Sie alle Schadenszähler von Slakoth. Slakoth kann in Ihrer nächsten Kurve nicht angreifen.",
            es: "Retire todos los contadores de daño de Slakoth. Slakoth no puede atacar durante tu próximo turno.",
            it: "Rimuovere tutti i contatori di danno da Slakoth. Slakoth non può attaccare durante il tuo prossimo turno.",
            pt: "Remova todos os contadores de danos de Slakoth. Slakoth não pode atacar durante o seu próximo turno.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
