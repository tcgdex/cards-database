import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Stantler",
         ja: "スタントラー",
         fr: "Stingler",
         de: "Stantler",
         es: "Stantler",
         it: "Stantler",
         pt: "Stantler",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [234],
      hp: 70,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Screechy Voice",
            ja: "スクリーチの声",
            fr: "Voix hurlée",
            de: "Kreischige Stimme",
            es: "Voz chillida",
            it: "Voce screimale",
            pt: "Voz estridente",
          },
          effect: {
            en: "If the Defending Pokemon is an Evolved Pokemon, the Defending Pokemon is now Confused.",
            ja: "防御ポケモンが進化したポケモンである場合、防御ポケモンは混乱しています。",
            fr: "Si le Pokémon en défense est un Pokémon évolué, le Pokémon en défense est maintenant confus.",
            de: "Wenn das verteidigende Pokémon ein entwickeltes Pokémon ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si el Pokémon defensor es un Pokémon evolucionado, el Pokémon defensor ahora está confundido.",
            it: "Se il Pokemon in carica è un Pokemon evoluto, il Pokemon in difesa è ora confuso.",
            pt: "Se o Pokémon atual for um Pokemon evoluído, o Pokémon atual agora está confuso.",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Push Away",
            ja: "押しのけます",
            fr: "Repousser",
            de: "Wegschieben",
            es: "Apartar",
            it: "Spingere via",
            pt: "Afaste -se",
          },
          effect: {
            en: "Look at your opponent's hand, choose a Trainer card you find there, and discard it.",
            ja: "対戦相手の手を見て、そこにあるトレーナーカードを選択して、それを破棄します。",
            fr: "Regardez la main de votre adversaire, choisissez une carte d'entraîneur que vous y trouvez et jetez-la.",
            de: "Schauen Sie sich die Hand Ihres Gegners an, wählen Sie eine Trainerkarte, die Sie dort finden, und verwerfen Sie sie.",
            es: "Mira la mano de tu oponente, elige una tarjeta de entrenador que encuentres allí y descarte.",
            it: "Guarda la mano del tuo avversario, scegli una carta dell'allenatore che trovi lì e scartarla.",
            pt: "Olhe para a mão do seu oponente, escolha um cartão de treinador que você encontra lá e descarte -o.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
