import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown G",
         ja: "g",
         fr: "Non-bas",
         de: "Unown g",
         es: "Uno G",
         it: "Unown g",
         pt: "Unown g",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "GIVE [Give]",
            ja: "give [giv]",
            fr: "Donner [donner]",
            de: "Geben [geben]",
            es: "Dar [dar]",
            it: "Dai [dare]",
            pt: "Dar [doar]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have Unown [G], Unown [I], Unown [V], and Unown [E] on your Bench, you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokmon. Shuffle your deck afterward.",
            ja: "ターン中に（攻撃の前）</em> </em>、[g]、own own [i]、own [v]、および[e]がベンチにある場合、コインをひっくり返すことができます。頭の場合は、デッキを検索して基本的なエネルギーカードを探して、1枚のポクモンに取り付けます。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si vous avez non bassé [g], non-bas [i], non-bas [v] et non-bas [e] sur votre banc, vous pouvez retourner une pièce. Si les têtes, recherchez votre jeu une carte d'énergie de base et fixez-la à 1 de votre pokmon. Mélanger votre deck par la suite.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Sie unown [g], unown [i], unown [v] und unown [e] auf Ihrer Bank haben, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, suchen Sie Ihr Deck nach einer grundlegenden Energiekarte und fügen Sie sie an 1 Ihres Pokmons an. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si tiene un noown [g], sin duda [i], sin duda [v] y sin duda [e] en su banco, puede voltear una moneda. Si se dirige, busque en su mazo una tarjeta de energía básica y adjunte a 1 de su Pokmon. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se non hai [g], unwnown [i], unwnown [v] e unwnown [e] sulla tua panchina, puoi capovolgere una moneta. Se la testa, cerca nel tuo mazzo una carta energetica di base e collegala a 1 del tuo Pokmon. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tem [g], unido [i], Unwnow [v] e não o mundo [e] em seu banco, você pode virar uma moeda. Se as cabeças, procure um cartão de energia básico e anexe -o a 1 do seu Pokmon. Afaste seu baralho depois.",
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

};
