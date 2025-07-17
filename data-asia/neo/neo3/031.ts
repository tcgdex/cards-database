import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Smoochum",
         ja: "スムーチュム",
         fr: "Smoochum",
         de: "Smochum",
         es: "Smoochum",
         it: "Smoochum",
         pt: "Smoochum",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [238],
      hp: 30,
      types: ["Psychic"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Psykiss",
            ja: "PSYKISS",
            fr: "Psykiss",
            de: "Psykiss",
            es: "Psíquico",
            it: "Psykiss",
            pt: "Psykiss",
          },
          effect: {
            en: "Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent's Pokemon. Your opponent shuffles that card into his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手のポケモンの1つに取り付けられた特別なエネルギーカードを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Retourner une pièce. Si les têtes, choisissez une carte d'énergie spéciale attachée à 1 du pokemon de votre adversaire. Votre adversaire mélange cette carte dans son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie eine spezielle Energiekarte, die an 1 des Pokémon Ihres Gegners angebracht ist. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Voltea una moneda. Si se dirige, elija una tarjeta de energía especial adjunta a 1 del Pokémon de su oponente. Tu oponente baraja esa carta en su mazo.",
            it: "Capovolgi una moneta. Se le teste, scegli una speciale carta energetica collegata a 1 del Pokemon del tuo avversario. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, escolha um cartão de energia especial anexado a 1 dos Pokémon do seu oponente. Seu oponente embaralha essa carta em seu deck.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
