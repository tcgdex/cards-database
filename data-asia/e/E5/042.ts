import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Haunter",
         ja: "ハンター",
         fr: "Hancher",
         de: "Haunter",
         es: "Perseguidor",
         it: "Haunter",
         pt: "Assombro",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [93],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Shadow Hand",
            ja: "影の手",
            fr: "Main de l'ombre",
            de: "Schattenhand",
            es: "Mano de la sombra",
            it: "Mano ombra",
            pt: "Mão da sombra",
          },
          effect: {
            en: "You may discard up to 2 cards from your hand. If you do, draw that many cards.",
            ja: "手から最大2枚のカードを捨てることができます。もしそうなら、その多くのカードを描きます。",
            fr: "Vous pouvez jeter jusqu'à 2 cartes de votre main. Si vous le faites, dessinez autant de cartes.",
            de: "Sie können bis zu 2 Karten von Ihrer Hand verwerfen. Wenn Sie dies tun, zeichnen Sie so viele Karten.",
            es: "Puede descartar hasta 2 cartas de su mano. Si lo haces, dibuja tantas cartas.",
            it: "Puoi scartare fino a 2 carte dalla tua mano. Se lo fai, disegna così tante carte.",
            pt: "Você pode descartar até 2 cartas da sua mão. Se o fizer, desenhe tantas cartas.",
          },
          damage: 30,
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
