import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Gastly",
         ja: "ガストリー",
         fr: "Vigoureux",
         de: "Gastly",
         es: "Duende",
         it: "Gastly",
         pt: "Gastly",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [92],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Lick",
            ja: "なめる",
            fr: "Lécher",
            de: "Lecken",
            es: "Lamer",
            it: "Leccata",
            pt: "Lamber",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Energy Conversion",
            ja: "エネルギー変換",
            fr: "Conversion d'énergie",
            de: "Energieumwandlung",
            es: "Conversión de energía",
            it: "Conversione energetica",
            pt: "Conversão de energia",
          },
          effect: {
            en: "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
            ja: "捨てられた山から最大2枚のエネルギーカードを手に入れます。 Gastlyはそれ自体に10ダメージを与えます。",
            fr: "Mettez jusqu'à 2 cartes d'énergie de votre tas de défausse dans votre main. Se fait gaspillement 10 dégâts à lui-même.",
            de: "Legen Sie bis zu 2 Energiekarten aus Ihrem Ablagerungsstapel in Ihre Hand. Gastly schädigt sich 10.",
            es: "Ponga hasta 2 cartas de energía de su pila de descarte en su mano. Gastly hace 10 daños a sí mismo.",
            it: "Metti fino a 2 carte energetiche dalla tua pila di scarto in mano. Gastly fa 10 danni a se stesso.",
            pt: "Coloque até 2 cartões de energia da sua pilha de descarte em sua mão. Gastly causa 10 danos a si mesmo.",
          },
          damage: None,
        },
      ],


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
