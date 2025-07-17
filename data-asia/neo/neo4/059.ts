import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown Q",
         ja: "Q",
         fr: "Un-bas",
         de: "Unown q",
         es: "Uno Q",
         it: "Unown Q.",
         pt: "Unown q",
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
            en: "QUICKEN [Quicken]",
            ja: "Quicken [Quicken]",
            fr: "Quicken [Quicken]",
            de: "Quicken [Quicken]",
            es: "Quicken [Quicken]",
            it: "Quicken [Quicken]",
            pt: "Quicken [Quicken]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, prevent all effects of attacks, including damage, done to any of your Pokmon with Unown in its name during your opponent's next turn. If you have more than 1 Unown [Q] in play, use only 1 [Quicken] each turn. This power can be used even if Unown [Q] is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、被害を含む攻撃のすべての影響を防ぎ、相手の次のターン中に名前が付けられていないPokmonのいずれかに対して行われます。プレイ中に複数の[Q]を使用している場合は、ターンごとに1 [Quicken]のみを使用します。 [Q]が眠っていない、混乱し、麻痺している場合でも、このパワーを使用できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, empêchent tous les effets des attaques, y compris les dégâts, causés à l'un de vos pokmon avec Unown en son nom lors du prochain tour de votre adversaire. Si vous avez plus de 1 non-bas [Q] en jeu, utilisez seulement 1 [Quicken] à chaque tour. Cette puissance peut être utilisée même si non-bas [Q] est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen von Angriffen, einschließlich Schäden, die Sie in der nächsten Runde Ihres Gegners in seinem Namen in seinem Namen angerichtet haben. Wenn Sie mehr als 1 unown [q] im Spiel haben, verwenden Sie in jeder Runde nur 1 [Quicken]. Diese Kraft kann auch dann eingesetzt werden, wenn Unown [q] schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si las cabezas, evitan todos los efectos de los ataques, incluidos el daño, a cualquiera de sus Pokmon con Unlow en su nombre durante el próximo turno de su oponente. Si tiene más de 1 Unlow [Q] en el juego, use solo 1 [Quicken] cada turno. Este poder se puede usar incluso si no se duerme [Q] está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se le teste, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a uno qualsiasi dei tuoi Pokmon con Unown nel suo nome durante il prossimo turno del tuo avversario. Se hai più di 1 Unown [Q] in gioco, usa solo 1 [Quicken] ogni turno. Questa potenza può essere usata anche se Unwne [Q] è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, impedem todos os efeitos dos ataques, incluindo danos, causados a qualquer um dos seus Pokmon com Unnown em seu nome durante o próximo turno do seu oponente. Se você tiver mais de 1 unido [q] em jogo, use apenas 1 [Quicken] a cada turno. Esse poder pode ser usado mesmo que o UNOWN [q] esteja dormindo, confuso ou paralisado.",
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
