import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown W",
         ja: "w",
         fr: "Non-bas",
         de: "Unown w",
         es: "Undow W",
         it: "Unown w",
         pt: "Unown w",
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
            en: "WANT [Want]",
            ja: "欲しい[欲しい]",
            fr: "Want [Want]",
            de: "Will [wollen]",
            es: "Quiero [quiero]",
            it: "Voglio [voglio]",
            pt: "Quer [quer]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have Unown [W], Unown [A], Unown [N], and Unown [T] on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand.",
            ja: "ターン中に（攻撃の前）</em> </em>、[W]、w]、[a]、[n]、および[t]がベンチにある場合、コインをひっくり返すことができます。頭の場合は、廃棄の山からトレーナーカードを手に入れてください。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, si vous avez non bassé [w], non-bass [a], non-bas [n] et non-bas [t] sur votre banc, vous pouvez retourner une pièce. Si les têtes, mettez une carte d'entraînement de votre dépassement dans votre main.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em>, wenn Sie unown [w], unown [a], unown [n] und unown [t] auf Ihrer Bank haben, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, geben Sie eine Trainerkarte von Ihrem Ablagerungsstapel in Ihre Hand.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si no tiene [w], sin duda [a], sin duda [n] y sin duda [t] en su banco, puede voltear una moneda. Si se dirige, coloque una tarjeta de entrenador de su pila de descarte en su mano.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se non hai [w], unwnewn [a], unwnown [n] e unwnown [t] in panchina, puoi capovolgere una moneta. Se la testa, metti in mano una carta dell'allenatore dalla tua pila di scarti.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tem [w], unido [a], unown [n] e não o mundo [t] em seu banco, você pode virar uma moeda. Se as cabeças, coloque um cartão de treinador da sua pilha de descarte em sua mão.",
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
