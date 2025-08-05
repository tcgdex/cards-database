import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown X",
         ja: "未作たx",
         fr: "Unown x",
         de: "Unown x",
         es: "Uno x",
         it: "Unown x",
         pt: "Unown x",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [201],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "XXXXX [XXXXX]",
            ja: "xxxxx [xxxxx]",
            fr: "Xxxxx [xxxxx]",
            de: "Xxxxx [xxxxx]",
            es: "Xxxxx [xxxxx]",
            it: "XXXXX [XXXXX]",
            pt: "Xxxxx [xxxxx]",
          },
          effect: {
            en: "Whenever 1 of your Pokmon with Unown in its name uses its Hidden Power attack, flip a coin until you get tails. That attack does 10 more damage for each heads. If you have more than 1 Unown [X] in play, use only 1 [XXXXX] each turn.",
            ja: "名前が付けられていないPokmonが隠されたパワー攻撃を使用しているときはいつでも、尾をつけるまでコインをひっくり返します。その攻撃は、各ヘッドに対してさらに10回のダメージを与えます。再生されていない[x]が複数ある場合は、各ターンを1 [xxxxx]のみを使用します。",
            fr: "Chaque fois que 1 de votre pokmon avec Unown en son nom utilise son attaque de puissance cachée, retournez une pièce jusqu'à ce que vous obteniez des queues. Cette attaque fait 10 dommages supplémentaires pour chaque tête. Si vous avez plus de 1 non-bas [x] en jeu, utilisez seulement 1 [xxxxx] à chaque tour.",
            de: "Immer wenn 1 Ihres Pokmons mit Unown in seinem Namen seinen versteckten Power -Angriff verwendet, drehen Sie eine Münze, bis Sie Schwänze erhalten. Dieser Angriff verursacht 10 weitere Schäden für jeden Köpfe. Wenn Sie mehr als 1 unown [x] im Spiel haben, verwenden Sie jeweils nur 1 [xxxxx].",
            es: "Cada vez que 1 de tu Pokmon con Under en su nombre usa su ataque de poder oculto, voltea una moneda hasta que obtengas colas. Ese ataque hace 10 daños más para cada cabezal. Si tiene más de 1 Unlow [x] en juego, use solo 1 [xxxxx] cada turno.",
            it: "Ogni volta che 1 dei tuoi Pokmon con Unown nel suo nome usa il suo attacco di potere nascosto, capovolgi una moneta fino a quando non si ottiene la coda. Quell'attacco fa altri 10 danni per ogni teste. Se hai più di 1 Unown [x] in gioco, usa solo 1 [xxxxx] ogni giro.",
            pt: "Sempre que 1 do seu Pokmon com Unnown em seu nome usa seu ataque de poder oculto, vire uma moeda até obter caudas. Esse ataque causa mais 10 danos para cada cabeça. Se você tiver mais de 1 unição [x] em jogo, use apenas 1 [xxxxx] a cada turno.",
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
