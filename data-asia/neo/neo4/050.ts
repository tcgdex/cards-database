import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown L",
         ja: "l",
         fr: "Non-fous l",
         de: "Unown l",
         es: "Uno L",
         it: "Unown l",
         pt: "Unown l",
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
            en: "LAUGH [Laugh]",
            ja: "笑[笑]",
            fr: "Rire [rire]",
            de: "Lachen [lachen]",
            es: "Risas [risa]",
            it: "Ride [ride]",
            pt: "Risos [risos]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, each player shuffles his or her deck. This power can be used even if Unown [L] is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、各プレイヤーはデッキをシャッフルします。この力は、眠っていない、混乱している、または麻痺している場合でも使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si la tête, chaque joueur mélange son deck. Cette puissance peut être utilisée même si non basée [l] est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Köpfe, mischt jeder Spieler sein Deck. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [l] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, cada jugador baraja su mazo. Este poder se puede usar incluso si no se duerme, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, ogni giocatore mescola il suo mazzo. Questa potenza può essere usata anche se Unwn [L] è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, cada jogador embaralha seu deck. Esse poder pode ser usado mesmo que o UNOWN [l] esteja dormindo, confuso ou paralisado.",
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
