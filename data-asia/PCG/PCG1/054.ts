import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Mr. Mime ex - 054/082",
         ja: "Mr. Mime Ex -054/082",
         fr: "M. MIME EX - 054/082",
         de: "Mr. Mime Ex - 054/082",
         es: "Sr. Mime Ex - 054/082",
         it: "Mr. Mime Ex - 054/082",
         pt: "Sr. MIME EX - 054/082",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [122],
      hp: 80,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Magic Evens",
            ja: "魔法のイベン",
            fr: "Magic Evens",
            de: "Magie Evens",
            es: "Magic iguala",
            it: "Evens magic",
            pt: "Magic Evens",
          },
          effect: {
            en: "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180.",
            ja: "Mime Exが攻撃によって損傷を受けた場合、そのダメージが20、40、60、80、100、140、160、160、または180の場合、Mime Ex氏に対する攻撃の損傷を防ぎます。",
            fr: "Si M. Mime Ex était endommagé par une attaque, empêchez les dommages de cette attaque à M. Mime Ex si ces dégâts sont de 20, 40, 60, 80, 100, 120, 140, 160 ou 180.",
            de: "Wenn Mr. Mime Ex durch einen Angriff beschädigt würde, verhindern Sie, dass der Schaden dieses Angriffs Mr. Mime Ex angerichtet wird, wenn dieser Schaden 20, 40, 60, 80, 100, 120, 140, 160 oder 180 beträgt.",
            es: "Si el Sr. Mime Ex sería dañado por un ataque, evite el daño de ese ataque al Sr. Mime Ex si ese daño es 20, 40, 60, 80, 100, 120, 140, 160 o 180.",
            it: "Se il signor Mime Ex sarebbe danneggiato da un attacco, impedire il danno di quell'attacco fatto al signor Mime Ex se quel danno è 20, 40, 60, 80, 100, 120, 140, 160 o 180.",
            pt: "Se o Sr. Mime ex for danificado por um ataque, impedirá que o dano desse ataque tenha causado ao Sr. Mime EX se esse dano for 20, 40, 60, 80, 100, 120, 140, 160 ou 180.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Breakdown",
            ja: "壊す",
            fr: "Panne",
            de: "Abbauen",
            es: "Descomponer",
            it: "Guasto",
            pt: "Discriminação",
          },
          effect: {
            en: "Count the number of cards in your opponent's hand.  Put that many damage counters on the Defending Pokemon.",
            ja: "相手の手にカードの数を数えます。  その多くのダメージカウンターを防御ポケモンに置きます。",
            fr: "Comptez le nombre de cartes dans la main de votre adversaire.  Mettez autant de compteurs de dégâts sur le Pokémon en défense.",
            de: "Zählen Sie die Anzahl der Karten in der Hand Ihres Gegners.  Setzen Sie so viele Schadenszähler auf das verteidigende Pokémon.",
            es: "Cuente el número de cartas en la mano de tu oponente.  Ponga tantos contadores de daño en el Pokémon defensor.",
            it: "Conta il numero di carte nella mano del tuo avversario.  Metti molti contatori di danno sul Pokemon in carica.",
            pt: "Conte o número de cartas na mão do seu oponente.  Coloque tantos contadores de danos no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
