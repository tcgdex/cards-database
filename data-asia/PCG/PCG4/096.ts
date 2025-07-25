import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Scizor ex",
         ja: "Scizor Ex",
         fr: "Scizor Ex",
         de: "Scizor Ex",
         es: "Scizor ex",
         it: "Scizor Ex",
         pt: "Scizor Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [212],
      hp: 120,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Danger Perception",
            ja: "危険の認識",
            fr: "Perception du danger",
            de: "Gefahrwahrnehmung",
            es: "Percepción del peligro",
            it: "Percezione del pericolo",
            pt: "Percepção de perigo",
          },
          effect: {
            en: "As long as Scizor ex's remaining HP is 60 or less, Scizor ex does 40 more damage to the Defending PokÃ©mon (before applying Weakness and Resistance).",
            ja: "Scizor Exの残りのHPが60以下である限り、Scizor Exは防御するPokã©Monに40個のダメージを与えます（脱力感と抵抗を適用する前）。",
            fr: "Tant que les HP restants de Scizor Ex sont de 60 ans ou moins, Scizor Ex fait 40 dommages supplémentaires aux Poké en défense (avant d'appliquer une faiblesse et une résistance).",
            de: "Solange der verbleibende HP von Scizor Ex 60 oder weniger beträgt, schadet Scizor EX 40 weitere Schäden an der verteidigenden Poké Mon (bevor Sie Schwäche und Widerstand anwenden).",
            es: "Mientras el HP restante de Scizor Ex sea 60 o menos, Scizor Ex hace 40 daños más al Poké Mon (antes de aplicar debilidad y resistencia).",
            it: "Finché gli HP rimanenti di Scizor Ex sono 60 o meno, Scizor Ex fa altri 40 danni al poké mon (prima di applicare debolezza e resistenza).",
            pt: "Enquanto o HP restante do Scizor Ex for 60 ou menos, o Scizor EX causar mais 40 danos ao Poké -Mon (antes de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Steel Wing",
            ja: "スチール翼",
            fr: "Aile en acier",
            de: "Stahlflügel",
            es: "Ala de acero",
            it: "Ala d'acciaio",
            pt: "Asa de aço",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Scizor ex by attacks is reduced by 20 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、攻撃によってScizor Exに与えられた損害は20増加します（脱力と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à Scizor Ex par les attaques est réduit de 20 (après avoir appliqué une faiblesse et une résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird jeder Schaden, den Scizor EX durch Angriffe angerichtet hat, um 20 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a Scizor ex por ataques se reduce en 20 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato a Scizor Ex dagli attacchi viene ridotto di 20 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao Scizor EX por ataques é reduzido em 20 (após aplicar fraqueza e resistência).",
          },
          damage: 40,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Cross-Cut",
            ja: "クロスカット",
            fr: "Croix",
            de: "Cross-Cut",
            es: "Cortado transversal",
            it: "Croce",
            pt: "Corte transversal",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, this attack does 50 damage plus 30 more damage.",
            ja: "防御ポケモンが進化したポケモンである場合、この攻撃は50のダメージと30のダメージを与えます。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, cette attaque fait 50 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon ein weiterentwickeltes Pokémon ist, verursacht dieser Angriff 50 Schäden plus 30 weitere Schäden.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, este ataque hace 50 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, questo attacco infligge 50 danni più 30 danni.",
            pt: "Se o Pokémon atual for um Pokémon evoluído, esse ataque causará 50 danos mais 30 danos.",
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
