import {Card} from "../../../interfaces"
import Set from "../PMCG4"

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

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [80],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
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
            en: "When you play this Pokmon from your hand to evolve 1 of your Pokmon, you may put 3 Pokmon from your discard pile into your hand.",
            ja: "このポケモンを手から演奏してポケモンを1つ進化させると、捨てられた山から3ポクモンを手に入れることができます。",
            fr: "Lorsque vous jouez ce pokemon de votre main pour évoluer 1 de votre Pokémon, vous pouvez mettre 3 Pokmon de votre tas de défausse dans votre main.",
            de: "Wenn Sie dieses Pokémon aus Ihrer Hand spielen, um 1 Ihres Pokémon zu entwickeln, können Sie 3 Pokmon aus Ihrem Ablagestapel in Ihre Hand geben.",
            es: "Cuando juegas este Pokémon de tu mano para evolucionar 1 de tu Pokémon, puedes poner 3 Pokmon de tu pila de descarte en tu mano.",
            it: "Quando suoni questo Pokemon dalla tua mano per evolvere 1 del tuo Pokemon, puoi mettere 3 Pokmon dalla tua pila di scarto in mano.",
            pt: "Quando você toca este Pokémon da sua mão para evoluir 1 do seu Pokémon, você pode colocar 3 Pokmon da sua pilha de descarte em sua mão.",
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
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
