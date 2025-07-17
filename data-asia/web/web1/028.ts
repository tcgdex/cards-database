import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Slowbro",
         ja: "暗いスローブロ",
         fr: "Slowbro noir",
         de: "Dark Slowbro",
         es: "Dark Slowbro",
         it: "Dark Slowbro",
         pt: "Dark Slowbro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [80],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reel In",
            ja: "リールイン",
            fr: "Ramener",
            de: "Einspulen",
            es: "Volver a entrar",
            it: "Vacillare",
            pt: "Enrolar",
          },
          effect: {
            en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put 3 Pokémon from your discard pile into your hand.",
            ja: "このポケモンを手から演奏してポケモンを1つ進化させると、捨てられた山から3個のポケモンを手に入れることができます。",
            fr: "Lorsque vous jouez ce Pokémon de votre main pour évoluer 1 de votre Pokémon, vous pouvez mettre 3 Pokémon de votre tas de défausse dans votre main.",
            de: "Wenn Sie dieses Pokémon von Ihrer Hand spielen, um 1 Ihrer Pokémon zu entwickeln, können Sie 3 Pokémon von Ihrem Ablagestapel in Ihre Hand geben.",
            es: "Cuando tocas este Pokémon de tu mano para evolucionar 1 de tus Pokémon, puedes poner 3 Pokémon de tu pila de descarte en tu mano.",
            it: "Quando giochi a questo Pokémon dalla tua mano per evolvere 1 dei tuoi Pokémon, puoi mettere 3 Pokémon dalla tua pila di scarto in mano.",
            pt: "Quando você toca este Pokémon da sua mão para evoluir 1 do seu Pokémon, você pode colocar 3 Pokémon da sua pilha de descarte em sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Fickle Attack",
            ja: "気まぐれな攻撃",
            fr: "Attaque capricieuse",
            de: "Launischer Angriff",
            es: "Atago",
            it: "Attacco volubile",
            pt: "Ataque inconstante",
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
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
