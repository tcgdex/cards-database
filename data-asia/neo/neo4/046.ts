import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Ampharos",
         ja: "暗いアンファロ",
         fr: "Ampharos sombres",
         de: "Dunkle Ampharos",
         es: "Ámpharos oscuro",
         it: "Ampharos scuri",
         pt: "Ímparos escuros",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [181],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Conductivity",
            ja: "導電率",
            fr: "Conductivité",
            de: "Leitfähigkeit",
            es: "Conductividad",
            it: "Conduttività",
            pt: "Condutividade",
          },
          effect: {
            en: "Whenever your opponent attaches an Energy card from his or her hand to a Pokmon, this power does 10 damage to that Pokmon. <em>(Don't apply Weakness and Resistance.)</em> This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused, or Paralyzed.",
            ja: "相手が手からエネルギーカードをポクモンに取り付けるたびに、このパワーはそのポクモンに10ダメージを与えます。 <em>（弱さと抵抗を適用しないでください。）</em>このパワーは、プレイに複数の暗いアンファロがある場合、または暗いアンファロが眠っている、混乱し、麻痺している場合に動作します。",
            fr: "Chaque fois que votre adversaire attache une carte d'énergie de sa main à un pokmon, cette puissance fait 10 dégâts à ce pokmon. <em> (N'appliquez pas la faiblesse et la résistance.) </em> Ce pouvoir cesse de fonctionner si vous avez plus d'un ampharos sombre en jeu ou pendant que les ampharos sombres sont endormis, confus ou paralysés.",
            de: "Immer wenn Ihr Gegner eine Energiekarte von seiner Hand an ein Pokmon anbringt, schädigt diese Kraft dieses Pokmon 10. <em> (Wenden Sie keine Schwäche und Widerstand an.) </em> Diese Kraft hört auf, wenn Sie mehr als 1 dunkle Ampharos im Spiel haben oder während dunkle Ampharos schlafen, verwirrt oder gelähmt sind.",
            es: "Cada vez que tu oponente une una tarjeta de energía de su mano a un Pokmon, este poder hace 10 daños a ese Pokmon. <em> (no aplique debilidad y resistencia.) </em> Este poder deja de funcionar si tiene más de 1 anfaros oscuros en juego o mientras los anfaros oscuros están dormidos, confundidos o paralizados.",
            it: "Ogni volta che il tuo avversario collega una carta energetica dalla sua mano a un Pokmon, questa potenza fa 10 danni a quel Pokmon. <em> (Non applicare la debolezza e la resistenza.) </em> Questo potere smette di funzionare se hai più di 1 Ampharos scuro in gioco o mentre gli anfARos oscuri sono addormentati, confusi o paralizzati.",
            pt: "Sempre que seu oponente prende um cartão de energia da mão dele a um Pokmon, esse poder causa 10 danos a esse Pokmon. <em> (não aplique fraqueza e resistência.) </em> Esse poder para de funcionar se você tiver mais de 1 ânpharos escuro em jogo ou enquanto os ânpharos escuros estão dormindo, confusos ou paralisados.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Shock Bolt",
            ja: "ショックボルト",
            fr: "Boulon de choc",
            de: "Stoßschraube",
            es: "Perno de choque",
            it: "Bullone d'urto",
            pt: "Parafuso de choque",
          },
          effect: {
            en: "Discard all Lightning Energy cards attached to Dark Ampharos or this attack does nothing.",
            ja: "暗いアンファロに取り付けられたすべての稲妻エネルギーカードを廃棄するか、この攻撃は何もしません。",
            fr: "Jeter toutes les cartes d'énergie de foudre attachées aux ampharos sombres ou cette attaque ne fait rien.",
            de: "Verwerfen Sie alle Blitzelenergiekarten, die an dunklen Ampharos angebracht sind, oder dieser Angriff tut nichts.",
            es: "Deseche todas las cartas de energía del rayo unidas a los anfaros oscuros o este ataque no hace nada.",
            it: "Scartare tutte le carte energetiche fulmini attaccate agli anfAROS buoni o questo attacco non fa nulla.",
            pt: "Descarte todos os cartões de energia de raios ligados a ânpharos escuros ou esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
