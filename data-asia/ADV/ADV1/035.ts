import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Nosepass",
         ja: "ノセパス",
         fr: "Nosepass",
         de: "Noses",
         es: "Noseepass",
         it: "Nosepass",
         pt: "Narizpass",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [299],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Invisible Hand",
            ja: "目に見えない手",
            fr: "Main invisible",
            de: "Unsichtbare Hand",
            es: "Mano invisible",
            it: "Mano invisibile",
            pt: "Mão invisível",
          },
          effect: {
            en: "If any of your opponent's Active Pokemon are Evolved Pokemon, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
            ja: "対戦相手のアクティブなポケモンのいずれかが進化したポケモンのいずれかである場合は、デッキを1枚のカードで検索して、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Si l'un des Pokémon actifs de votre adversaire est un pokemon évolué, recherchez votre jeu pour une carte 1 et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Wenn eines der aktiven Pokémon Ihres Gegners Pokémon Ihres Gegners entwickelt wird, suchen Sie Ihr Deck nach einer 1 -Karte und stecken Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Si alguno de los Pokémon activos de tu oponente está evolucionado Pokémon, busque en tu mazo cualquier carta de 1 y póngalo en tu mano. Baraja tu mazo después.",
            it: "Se uno dei pokemon attivi del tuo avversario viene evoluto Pokemon, cerca nel tuo mazzo per qualsiasi carta 1 e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Se algum dos Pokémon ativos do seu oponente estiver evoluído, pesquise seu baralho por 1 carta e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Repulsion",
            ja: "反発",
            fr: "Répulsion",
            de: "Abstoßung",
            es: "Repulsión",
            it: "Repulsione",
            pt: "Repulsão",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent returns the Defending Pokemon and all cards attached to it to his or her hand. (If your opponent doesn't have any Benched Pokemon or other Active Pokemon, this attack does nothing.)",
            ja: "コインをひっくり返します。頭の場合、対戦相手は防御するポケモンとそれに取り付けられたすべてのカードを自分の手に返します。 （相手がベンチ付きポケモンや他のアクティブなポケモンを持っていない場合、この攻撃は何もしません。）",
            fr: "Retourner une pièce. Si les têtes, votre adversaire renvoie le Pokémon en défense et toutes les cartes qui lui sont attachées à sa main. (Si votre adversaire n'a pas de pokemon bancaire ou d'autres Pokémon actifs, cette attaque ne fait rien.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, gibt Ihr Gegner das verteidigende Pokemon und alle Karten an seine Hand zurück. (Wenn Ihr Gegner kein Bankpokémon oder ein anderes aktives Pokémon hat, tut dieser Angriff nichts.)",
            es: "Voltea una moneda. Si se dirige, tu oponente devuelve el Pokémon defensor y todas las cartas adjuntas a su mano. (Si tu oponente no tiene ningún Pokémon de banca u otro Pokémon activo, este ataque no hace nada).",
            it: "Capovolgi una moneta. Se la testa, il tuo avversario restituisce il Pokemon in carica e tutte le carte attaccate alla sua mano. (Se il tuo avversario non ha Pokemon in panchina o altri Pokemon attivi, questo attacco non fa nulla.)",
            pt: "Vire uma moeda. Se as cabeças, seu oponente retornará o Pokémon atual e todas as cartas anexadas a ele à mão dele. (Se o seu oponente não tiver nenhum Pokémon em banco ou outro Pokémon ativo, esse ataque não fará nada.)",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
