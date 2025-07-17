import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown M",
         ja: "未定のm",
         fr: "Non-bas",
         de: "Unown m",
         es: "Uno M",
         it: "Unown m",
         pt: "Unown m",
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
            en: "METAL [Metal]",
            ja: "金属[金属]",
            fr: "Métal [métal]",
            de: "Metall [Metall]",
            es: "Metal [metal]",
            it: "Metallo [metallo]",
            pt: "Metal [metal]",
          },
          effect: {
            en: "Whenever a Metal Pokmon damages 1 of your Pokmon, reduce that damage by 30 <em>(after applying Weakness and Resistance)</em>. This power stops working if you have more than 1 Unown [M] in play. <em>(This power works even if Unown [M] is Asleep, Confused, or Paralyzed.)</em>",
            ja: "金属PokmonがPokmonの1を損傷するときはいつでも、その損傷を30 <em>（脱力感と抵抗を適用した後）</em>に減らします。このパワーは、プレイ中に複数の[m]を1つ以上持っている場合、機能しなくなります。 <em>（このパワーは、眠っていない、眠っていても混乱している、または麻痺していても機能します。）</em>",
            fr: "Chaque fois qu'un pokmon métallique endommage 1 de votre Pokmon, réduisez ces dommages de 30 <em> (après avoir appliqué une faiblesse et une résistance) </em>. Cette puissance cesse de fonctionner si vous avez plus de 1 non-bas [m] en jeu. <em> (Ce pouvoir fonctionne même si non-bas [m] est endormi, confus ou paralysé.) </em>",
            de: "Wenn ein Metallpokmon 1 Ihres Pokmons schädigt, verringern Sie diese Schädigung um 30 <em> (nach Anwendung von Schwäche und Widerstand) </em>. Diese Kraft funktioniert nicht mehr, wenn Sie mehr als 1 Unown [M] im Spiel haben. <em> (diese Kraft funktioniert auch, wenn Unown [m] schläft, verwirrt oder gelähmt ist.) </em>",
            es: "Cada vez que un Pokmon de metal daña 1 de su Pokmon, reduzca ese daño en 30 <em> (después de aplicar debilidad y resistencia) </em>. Esta potencia deja de funcionar si tienes más de 1 sin own [m] en juego. <em> (este poder funciona incluso si no se duerme [m] está dormido, confundido o paralizado). </em>",
            it: "Ogni volta che un Pokmon di metallo danneggia 1 del tuo Pokmon, ridurre quel danno di 30 <em> (dopo aver applicato debolezza e resistenza) </em>. Questa potenza smette di funzionare se hai più di 1 discesa [m] in gioco. <em> (Questo potere funziona anche se non è stato addormentato, confuso o paralizzato.) </em>",
            pt: "Sempre que um Pokmon de metal danifica 1 do seu Pokmon, reduza esse dano em 30 <em> (após aplicar fraqueza e resistência) </em>. Esse poder para de funcionar se você tiver mais de 1 unição [M] em jogo. <em> (esse poder funciona mesmo que Unown [M] esteja dormindo, confuso ou paralisado.) </em>",
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
