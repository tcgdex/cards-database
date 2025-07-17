import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown V",
         ja: "v",
         fr: "Unwning V",
         de: "Unown v",
         es: "Undow V",
         it: "Unown v",
         pt: "Unown v",
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
            en: "VANISH [Vanish]",
            ja: "消える[vanish]",
            fr: "Vanish [Vanish]",
            de: "Verschwinden [Vanish]",
            es: "Vanish [Vanish]",
            it: "Vanish [Vanish]",
            pt: "Desaparecer [desaparecer]",
          },
          effect: {
            en: "When you play Unown [V] from your hand, you may flip a coin. If heads, return 1 of your Pokmon with Unown in its name (other than Unown [V]) to your hand. <em>(Discard all cards attached to that card.)</em>",
            ja: "手から[v]をプレイすると、コインをひっくり返すことができます。頭の場合は、その名前（[v]以外の）が手にないポクモンの1を返します。 <em>（そのカードに添付されたすべてのカードを破棄します。）</em>",
            fr: "Lorsque vous jouez non à votre main, vous pouvez retourner une pièce. Si les têtes, retournez 1 de votre pokmon avec un-onde en son nom (autre que non-bas [v]) à votre main. <em> (Jetez toutes les cartes attachées à cette carte.) </em>",
            de: "Wenn Sie von Ihrer Hand unown [v] spielen, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, geben Sie 1 Ihres Pokmon mit Unown in seinem Namen (außer unown [v]) in Ihre Hand zurück. <em> (Verwerfen Sie alle mit dieser Karte verbundenen Karten.) </em>",
            es: "Cuando juegas a Under [v] de tu mano, puedes voltear una moneda. Si se dirige, regrese 1 de su Pokmon con Unlow en su nombre (que no sea Unwn [V]) a su mano. <em> (Deseche todas las tarjetas adjuntas a esa tarjeta). </em>",
            it: "Quando giochi Unown [V] dalla tua mano, puoi capovolgere una moneta. Se le teste, restituisci 1 del tuo Pokmon con Unown nel suo nome (diverso da nonni [V]) alla tua mano. <em> (scartare tutte le carte collegate a quella carta.) </em>",
            pt: "Quando você toca unnown [v] da sua mão, você pode virar uma moeda. Se as cabeças, retorne 1 do seu Pokmon com Unnown em seu nome (exceto não o mundo [v]) à sua mão. <em> (descarte todos os cartões anexados a esse cartão.) </em>",
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
