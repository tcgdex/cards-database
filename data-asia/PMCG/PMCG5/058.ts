import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Jigglypuff",
         ja: "エリカのジグリプフ",
         fr: "Jigglypuff d'Erika",
         de: "Erikas Jigglypuff",
         es: "Jigglypuff de Erika",
         it: "Jigglypuff di Erika",
         pt: "Erika de Jigglypuff",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [39],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Group Therapy",
            ja: "グループ療法",
            fr: "Thérapie de groupe",
            de: "Gruppentherapie",
            es: "Terapia grupal",
            it: "Terapia di gruppo",
            pt: "Terapia de grupo",
          },
          effect: {
            en: "You and your opponent remove 1 damage counter from each of your Pokemon with damage counters on them.",
            ja: "あなたとあなたの対戦相手は、それぞれのポケモンのそれぞれから1つのダメージカウンターを削除します。",
            fr: "Vous et votre adversaire supprimez 1 compteur de dégâts de chacun de vos Pokémon avec des compteurs de dégâts dessus.",
            de: "Sie und Ihr Gegner entfernen einen Schadenschalter von jedem Ihrer Pokémon mit Schadenszähler.",
            es: "Tú y tu oponente eliminan 1 contador de daño de cada uno de tus Pokémon con contadores de daño.",
            it: "Tu e il tuo avversario rimuovi 1 contatore di danni da ciascuno dei tuoi Pokemon con contatori di danno su di essi.",
            pt: "Você e seu oponente removem 1 contador de danos de cada um dos seus Pokémon com contadores de danos.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Pulled Punch",
            ja: "引っ張られたパンチ",
            fr: "Poinçon tiré",
            de: "Ziehschlag",
            es: "Golpe",
            it: "Punch tirato",
            pt: "Punchado puxado",
          },
          effect: {
            en: "If the Defending Pokemon has no damage counters on it, this attack does 40 damage. If it has any damage counters on it, this attack does 10 damage.",
            ja: "防御するポケモンにダメージカウンターがない場合、この攻撃は40のダメージを与えます。ダメージがある場合、この攻撃は10ダメージを与えます。",
            fr: "Si le Pokémon en défense n'a pas de compteurs de dégâts dessus, cette attaque fait 40 dégâts. S'il a des compteurs de dégâts dessus, cette attaque fait 10 dégâts.",
            de: "Wenn das verteidigende Pokemon keine Schadenszähler hat, verursacht dieser Angriff 40 Schaden. Wenn es Schadenszähler hat, verursacht dieser Angriff 10 Schaden.",
            es: "Si el Pokémon defensor no tiene contadores de daño, este ataque hace 40 daños. Si tiene algún contador de daño, este ataque hace 10 daños.",
            it: "Se il Pokemon in difesa non ha contatori di danni su di esso, questo attacco fa 40 danni. Se ha dei contatori di danno, questo attacco infligge 10 danni.",
            pt: "Se o Pokémon atual não tiver contadores de danos, esse ataque causará 40 danos. Se tiver algum contador de danos, esse ataque causará 10 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
