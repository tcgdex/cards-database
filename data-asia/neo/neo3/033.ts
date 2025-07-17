import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Unown Y",
         ja: "yなしy",
         fr: "Non-bas",
         de: "Unown y",
         es: "Sin ojo y",
         it: "Unown y",
         pt: "Unido y",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "YIELD [Yield]",
            ja: "収量[収量]",
            fr: "Rendement [rendement]",
            de: "Ausbeute [Ertrag]",
            es: "Rendimiento [rendimiento]",
            it: "Resa [resa]",
            pt: "Rendimento [rendimento]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Pokémon with Unown in its name. Shuffle your deck afterward. This power can be used even if Unown [Y] is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、デッキを検索してサイキックエネルギーカードを探して、名前が付けられていないポケモンの1枚にそれを取り付けます。その後、デッキをシャッフルします。この力は、眠っていない、眠っていても混乱している、または麻痺している場合でも使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, recherchez votre deck pour une carte d'énergie psychique et attachez-la à 1 de votre Pokémon avec Unown en son nom. Mélanger votre deck par la suite. Cette puissance peut être utilisée même si non basée [y] est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer psychischen Energiekarte und fügen Sie sie mit Unown in seinem Namen an 1 Ihres Pokémons zu. Mischen Sie anschließend Ihr Deck. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [y] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, busque en su mazo una tarjeta de energía psíquica y adhiérase a 1 de su Pokémon sin Own en su nombre. Baraja tu mazo después. Este poder se puede usar incluso si no se duerme, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, cerca nel tuo mazzo una carta di energia psichica e attaccalo a 1 dei tuoi Pokémon con un nome. Shuffle il tuo mazzo in seguito. Questa potenza può essere usata anche se Unwn [y] è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, procure um cartão de energia psíquica e anexe -o a 1 do seu Pokémon com Unwnow em seu nome. Afaste seu baralho depois. Esse poder pode ser usado mesmo que o UNOWN [Y] esteja dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
