import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Jynx",
         ja: "サブリナのジンクス",
         fr: "Jynx de Sabrina",
         de: "Sabrinas Jynx",
         es: "Jynx de Sabrina",
         it: "Jynx di Sabrina",
         pt: "Jynx de Sabrina",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [124],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Helping Hand",
            ja: "手伝います",
            fr: "Coup de main",
            de: "Hand helfen",
            es: "Mano",
            it: "Aiuto",
            pt: "Mão de ajuda",
          },
          effect: {
            en: "Choose 1 of your opponent's Pokemon. Remove any number of damage counters from that Pokemon, then draw that many cards.",
            ja: "対戦相手のポケモンを1つ選択します。そのポケモンから数のダメージカウンターを削除し、その多くのカードを描きます。",
            fr: "Choisissez 1 du pokemon de votre adversaire. Retirez n'importe quel nombre de compteurs de dégâts de ce Pokémon, puis dessinez autant de cartes.",
            de: "Wählen Sie 1 des Pokémon Ihres Gegners. Entfernen Sie eine beliebige Anzahl von Schadenszähler von diesem Pokémon und zeichnen Sie dann viele Karten.",
            es: "Elija 1 de Pokémon de tu oponente. Elimine cualquier cantidad de contadores de daño de ese Pokémon, luego dibuje tantas cartas.",
            it: "Scegli 1 Pokemon del tuo avversario. Rimuovi qualsiasi numero di contatori di danno da quel Pokemon, quindi disegna quelle carte.",
            pt: "Escolha 1 do Pokémon do seu oponente. Remova qualquer número de contadores de danos desse Pokémon e desenhe muitas cartas.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Hug",
            ja: "ハグ",
            fr: "Câlin",
            de: "Umarmung",
            es: "Abrazo",
            it: "Abbraccio",
            pt: "Abraço",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't retreat during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas se retirer pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann sich das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht zurückziehen.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede retirarse durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in difesa non può ritirarsi durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode recuar durante o próximo turno do seu oponente.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
