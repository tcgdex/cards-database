import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Magcargo",
         ja: "ダークマグカルゴ",
         fr: "Magcargo noir",
         de: "Dark Magcargo",
         es: "Magcargo oscuro",
         it: "Magcargo oscuro",
         pt: "Dark Magcargo",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Hot Plate",
            ja: "ホットプレート",
            fr: "Plaque chauffante",
            de: "Heißer Teller",
            es: "Plato caliente",
            it: "Piatto caldo",
            pt: "Placa quente",
          },
          effect: {
            en: "As long as Dark Magcargo is your Active Pokmon, whenever a player puts a Baby Pokmon or a Basic Pokmon onto his or her Bench from his or her hand, this power does 10 damage to that Pokmon. <em>(Don't apply Weakness and Resistance.)</em> This power stops working while Dark Magcargo is Asleep, Confused, or Paralyzed.",
            ja: "ダークマグカルゴがアクティブなポッコンである限り、プレーヤーがベビーポクモンまたは基本的なポクモンを手からベンチに置くたびに、このパワーはそのポクモンに10ダメージを与えます。 <em>（弱さと抵抗を適用しないでください。）</em>このパワーは機能しなくなり、暗いマグカルゴが眠っている、混乱し、麻痺しています。",
            fr: "Tant que Dark Magcargo est votre Pokmon actif, chaque fois qu'un joueur met un bébé Pokmon ou un Pokmon de base sur son banc de sa main, cette puissance fait 10 dégâts à ce Pokmon. <em> (N'appliquez pas la faiblesse et la résistance.) </em> Ce pouvoir cesse de fonctionner pendant que Magcargo sombre est endormi, confus ou paralysé.",
            de: "Solange Dark Magcargo Ihr aktives Pokmon ist, wenn ein Spieler ein Baby -Pokmon oder ein einfaches Pokmon von seiner Hand auf seine Bank legt, schädigt diese Kraft dieses Pokmon 10. <em> (Wenden Sie keine Schwäche und Widerstand an.) </em> diese Kraft hört auf, während Dark Magcargo schläft, verwirrt oder gelähmt ist.",
            es: "Mientras Dark Magcargo sea tu Pokmon activo, cada vez que un jugador pone un bebé Pokmon o un Pokmon básico en su banco desde su mano, este poder hace 10 daños a ese Pokmon. <em> (no aplique debilidad y resistencia.) </em> Este poder deja de funcionar, mientras que Dark Magcargo está dormido, confundido o paralizado.",
            it: "Finché Magcargo oscuro è il tuo Pokmon attivo, ogni volta che un giocatore mette un Pokmon per bambini o un Pokmon di base sulla sua panchina dalla sua mano, questo potere fa 10 danni a quel Pokmon. <em> (Non applicare la debolezza e la resistenza.) </em> Questo potere smette di funzionare mentre Magcargo oscuro è addormentato, confuso o paralizzato.",
            pt: "Enquanto o Dark Magcargo for o seu Pokmon ativo, sempre que um jogador coloca um bebê Pokmon ou um Pokmon básico em seu banco ou dela de sua mão, esse poder causa 10 danos a esse Pokmon. <em> (não aplique fraqueza e resistência.) </em> Esse poder para de funcionar enquanto o magcargo escuro está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Ball of Flame",
            ja: "炎のボール",
            fr: "Boule de flamme",
            de: "Flammball",
            es: "Bola de llama",
            it: "Palla di fiamma",
            pt: "Ball of Flame",
          },
          effect: {
            en: "You may discard a Fire Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokemon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃を使用すると、Dark Magcargoに取り付けられたファイアエネルギーカードを捨てることができます。そうであり、相手がベンチでポケモンを持っている場合は、そのうち1つを選択すると、この攻撃は20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez jeter une carte d'énergie de feu attachée à Dark Magcargo lorsque vous utilisez cette attaque. Si vous le faites et si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 20 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können eine an Dark Magcargo befestigte Feuerergiekarte verwerfen, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun und wenn Ihr Gegner ein pokémon mit Bank hat, wählen Sie 1 davon und dieser Angriff schädigt es 20. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede descartar una tarjeta de energía de fuego unida a Dark Magcargo cuando usa este ataque. Si lo haces y si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y este ataque le da 20 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Puoi scartare una carta di energia antincendio attaccata a Magcargo oscuro quando usi questo attacco. Se lo fai e se il tuo avversario ha qualche Pokemon in panchina, scegli 1 e questo attacco fa 20 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode descartar um cartão de energia de incêndio anexado ao Magcargo escuro quando usa esse ataque. Se você o fizer e se seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 20 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
