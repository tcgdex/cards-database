import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown S",
         ja: "s",
         fr: "Non-bas",
         de: "Unown s",
         es: "Undo",
         it: "Unown s",
         pt: "Unown s",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [201],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "SEARCH [Search]",
            ja: "検索[検索]",
            fr: "Recherche [Recherche]",
            de: "Suche [Suche]",
            es: "Búsqueda [búsqueda]",
            it: "Cerca [Cerca]",
            pt: "Pesquisar [Pesquisar]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may look at 1 of your Prize cards. Return that Prize card face down. This power can be used even if Unown [S] is Asleep, Confused, or Paralyzed.",
            ja: "ターン<em>（攻撃前）</em> </em>中に、賞カードの1枚を見ることができます。その賞品カードを下に戻します。この力は、眠っていない、混乱している、または麻痺している場合でも使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez consulter 1 de vos cartes de prix. Retournez cette carte de prix face vers le bas. Cette puissance peut être utilisée même si les [s] non dorés sont endormis, confus ou paralysés.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie sich 1 Ihrer Preiskarten ansehen. Geben Sie diese Preiskarte mit dem Gesicht nach unten zurück. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [s] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mirar 1 de sus cartas de premio. Devuelve esa tarjeta de premio boca abajo. Este poder se puede usar incluso si no se duerme, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi guardare 1 delle tue carte premio. Restituisce quella carta premio a faccia in giù. Questa potenza può essere usata anche se non è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode olhar para 1 de seus cartões de prêmios. Retorne esse cartão de prêmio com a face para baixo. Esse poder pode ser usado mesmo que o UNOWN esteja dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
