import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown D",
         ja: "d",
         fr: "Unwn",
         de: "Unown d",
         es: "Uno D",
         it: "Unown d",
         pt: "Unown d",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "DARK [Darkness]",
            ja: "暗い[暗闇]",
            fr: "Dark [Darkness]",
            de: "Dunkel [Dunkelheit]",
            es: "Oscuro [Oscuridad]",
            it: "Oscuro [oscurità]",
            pt: "Dark [escuridão]",
          },
          effect: {
            en: "Whenever a Darkness Pokmon damages 1 of your Pokmon, reduce that damage by 30 <em>(after applying Weakness and Resistance)</em>. This power stops working if you have more than 1 Unown [D] in play. <em>(This power works even if Unown [D] is Asleep, Confused, or Paralyzed.)</em>",
            ja: "暗闇のポクモンがポクモンの1を損傷するときはいつでも、その損傷を30 <em>（衰弱と抵抗を適用した後）</em>に減らします。このパワーは、プレイ中に複数の[D]を1つ以上持っている場合、機能しなくなります。 <em>（このパワーは、眠っていない、混乱している、または麻痺している場合でも機能します。）</em>",
            fr: "Chaque fois qu'un pokmon de l'obscurité endommage 1 de votre Pokmon, réduisez ces dommages de 30 <em> (après avoir appliqué une faiblesse et une résistance) </em>. Cette puissance cesse de fonctionner si vous avez plus de 1 non-bas [D] en jeu. <em> (Ce pouvoir fonctionne même si non-bas [d] est endormi, confus ou paralysé.) </em>",
            de: "Wenn ein Dunkelheitspokmon 1 Ihres Pokmons schädigt, verringern Sie diese Schädigung um 30 <em> (nach Auftragen von Schwäche und Widerstand) </em>. Diese Kraft funktioniert nicht mehr, wenn Sie mehr als 1 Unown [d] im Spiel haben. <em> (diese Kraft funktioniert auch, wenn Unown [d] schläft, verwirrt oder gelähmt ist.) </em>",
            es: "Cada vez que una oscuridad Pokmon daña 1 de su Pokmon, reduzca ese daño en 30 <em> (después de aplicar debilidad y resistencia) </em>. Esta potencia deja de funcionar si tiene más de 1 Unlow [D] en juego. <em> (este poder funciona incluso si no se duerme [d] está dormido, confundido o paralizado). </em>",
            it: "Ogni volta che un'oscurità Pokmon danneggia 1 del tuo Pokmon, ridurre quel danno di 30 <em> (dopo aver applicato la debolezza e la resistenza) </em>. Questo potere smette di funzionare se hai più di 1 discesa [d] in gioco. <em> (Questo potere funziona anche se non è stato addormentato, confuso o paralizzato.) </em>",
            pt: "Sempre que uma escuridão Pokmon danifica 1 do seu Pokmon, reduza esse dano em 30 <em> (após aplicar fraqueza e resistência) </em>. Esse poder para de funcionar se você tiver mais de 1 unição [d] em jogo. <em> (esse poder funciona mesmo que o UNOWN [D] esteja dormindo, confuso ou paralisado.) </em>",
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
