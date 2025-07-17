import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo - 019/088",
         ja: "Magcargo -019/088",
         fr: "Magcargo - 019/088",
         de: "Magcargo - 019/088",
         es: "Magcargo - 019/088",
         it: "Magcargo - 019/088",
         pt: "Magcargo - 019/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Eruption",
            ja: "噴火",
            fr: "Éruption",
            de: "Eruption",
            es: "Erupción",
            it: "Eruzione",
            pt: "Erupção",
          },
          effect: {
            en: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Fire Energy card discarded in this way.",
            ja: "各プレイヤーは、デッキの一番上のカードを捨てます。この攻撃は、この方法で破棄された各火災エネルギーカードに対して20のダメージと20のダメージをもたらします。",
            fr: "Chaque joueur rejette la carte supérieure de son deck. Cette attaque fait 20 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie de feu jetée de cette manière.",
            de: "Jeder Spieler legt die Top -Karte seines Decks ab. Dieser Angriff verursacht 20 Schäden plus 20 weitere Schäden für jede auf diese Weise verworfene Feuerergiekarte.",
            es: "Cada jugador descarta la carta superior de su mazo. Este ataque hace 20 daños más 20 más de daño por cada carta de energía de fuego descartada de esta manera.",
            it: "Ogni giocatore scarta la carta superiore del suo mazzo. Questo attacco infligge 20 danni più 20 danni in più per ciascuna carta di energia antincendio scartata in questo modo.",
            pt: "Cada jogador descarta a carta superior do seu baralho. Este ataque causa 20 danos mais 20 mais danos a cada cartão de energia de incêndio descartado dessa maneira.",
          },
        },
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Fire Stream",
            ja: "火の流れ",
            fr: "Ruissellement des incendies",
            de: "Feuerströme",
            es: "Corriente de fuego",
            it: "Flusso di fuoco",
            pt: "Fluxo de incêndio",
          },
          effect: {
            en: "Discard a Fire Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokemon, this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃を使用するために、Magcargoに取り付けられた消防エネルギーカードを廃棄します。対戦相手がベンチでポケモンを持っている場合、この攻撃はそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jeter une carte d'énergie de feu attachée à Magcargo afin d'utiliser cette attaque. Si votre adversaire a des pokémon bancés, cette attaque fait 10 dégâts à chacun d'eux. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Verwerfen Sie eine an Magcargo befestigte Feuerergiekarte, um diesen Angriff zu verwenden. Wenn Ihr Gegner ein Bank -Pokémon hat, schädigt dieser Angriff jeweils 10 von ihnen. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Deseche una tarjeta de energía de fuego unida a Magcargo para usar este ataque. Si tu oponente tiene algún Pokémon de banca, este ataque hace 10 daños a cada uno de ellos. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scartare una carta di energia antincendio collegata a Magcargo per usare questo attacco. Se il tuo avversario ha un Pokemon in panchina, questo attacco fa 10 danni a ciascuno di essi. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte um cartão de energia de incêndio anexado ao Magcargo para usar esse ataque. Se o seu oponente tiver algum Pokémon em banco, esse ataque causará 10 danos a cada um deles. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 60,
        },
      ],

      retreat: 3,

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
