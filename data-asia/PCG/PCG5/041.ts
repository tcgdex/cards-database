import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Mew ex",
         ja: "Mew Ex",
         fr: "Mew Ex",
         de: "Mew ex",
         es: "Mew ex",
         it: "MEW EX",
         pt: "Mew ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [151],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Versatile",
            ja: "汎用性",
            fr: "Polyvalent",
            de: "Vielseitig",
            es: "Versátil",
            it: "Versatile",
            pt: "Versátil",
          },
          effect: {
            en: "Mew ex can use the attacks of all PokÃ©mon in play as its own. (You still need the necessary Energy to use each attack.)",
            ja: "Mew Exは、すべてのPokã©Monの攻撃を独自のものとして使用できます。 （各攻撃を使用するために必要なエネルギーが必要です。）",
            fr: "Mew Ex peut utiliser les attaques de tous les poké en jeu comme le sien. (Vous avez toujours besoin de l'énergie nécessaire pour utiliser chaque attaque.)",
            de: "MEW EX kann die Angriffe aller Pokémon in Spiel als seine eigenen verwenden. (Sie benötigen immer noch die notwendige Energie, um jeden Angriff zu nutzen.)",
            es: "Mew Ex puede usar los ataques de todos los Poké Mon en juego como propio. (Todavía necesita la energía necesaria para usar cada ataque).",
            it: "MEW Ex può usare gli attacchi di tutti i poké mon in gioco come proprio. (Hai ancora bisogno dell'energia necessaria per utilizzare ogni attacco.)",
            pt: "Mew Ex pode usar os ataques de todos os Poké Mon em jogo como sua. (Você ainda precisa da energia necessária para usar cada ataque.)",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Power Move",
            ja: "電力移動",
            fr: "Mouvement de puissance",
            de: "Kraftbewegung",
            es: "Movimiento de poder",
            it: "Mossa di potenza",
            pt: "Movimento de poder",
          },
          effect: {
            en: "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokemon.",
            ja: "デッキを検索してエネルギーカードを検索し、Mew Exに添付してください。その後、デッキをシャッフルします。次に、ベンチ付きポケモンの1つでMew Exを切り替えることができます。",
            fr: "Recherchez votre jeu pour une carte d'énergie et attachez-la à Mew Ex. Mélanger votre deck par la suite. Ensuite, vous pouvez changer de miw ex avec 1 de votre Pokémon banc.",
            de: "Suchen Sie Ihr Deck nach einer Energiekarte und fügen Sie sie an Mew Ex an. Mischen Sie anschließend Ihr Deck. Dann können Sie Mew EX mit 1 Ihres Bankpokémons wechseln.",
            es: "Busque en su mazo una tarjeta de energía y adjuntarlo a Mew Ex. Baraja tu mazo después. Luego, puede cambiar Mew Ex con 1 de su Pokémon de banca.",
            it: "Cerca nel tuo mazzo una carta energetica e attaccalo a MEW Ex. Shuffle il tuo mazzo in seguito. Quindi, puoi cambiare MEW Ex con 1 del tuo Pokemon in panchina.",
            pt: "Procure seu baralho por um cartão de energia e anexe -o a Mew Ex. Afaste seu baralho depois. Em seguida, você pode mudar o Mew EX com 1 do seu Pokémon em banco.",
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
