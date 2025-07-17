import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown T",
         ja: "未定のt",
         fr: "Non-bas",
         de: "Unown t",
         es: "Tojo t",
         it: "Unown t",
         pt: "Unown t",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "TELL [Tell]",
            ja: "テル[Tell]",
            fr: "Dites [dire]",
            de: "Sagen Sie [sagen]",
            es: "Decir [decir]",
            it: "Dillo a [dillo]",
            pt: "Tell [Tell]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, look at your opponent's hand and show your hand to your opponent. This power can be used even if Unown [T] is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手の手を見て、相手に手を見せてください。この力は、眠っていない、混乱している、または麻痺している場合でも使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si la tête, regardez la main de votre adversaire et montrez votre main à votre adversaire. Cette puissance peut être utilisée même si l'on ne dort pas, confondu ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, schauen Sie sich die Hand Ihres Gegners an und zeigen Sie Ihre Hand Ihrem Gegner. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [t] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, mira la mano de tu oponente y muestra tu mano a tu oponente. Este poder se puede usar incluso si no se duerme, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, guarda la mano del tuo avversario e mostra la tua mano al tuo avversario. Questa potenza può essere usata anche se Unwn [t] è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, olhe para a mão do seu oponente e mostre sua mão ao seu oponente. Esse poder pode ser usado mesmo que não esteja dormindo, confuso ou paralisado.",
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
