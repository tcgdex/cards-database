import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo",
         ja: "マグカルゴ",
         fr: "Magcargo",
         de: "Magcargo",
         es: "Magcargo",
         it: "Magcargo",
         pt: "Magcargo",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Magma Pool",
            ja: "マグマプール",
            fr: "Mare de magma",
            de: "Magma Pool",
            es: "Piscina de magma",
            it: "Piscina di magma",
            pt: "Piscina de magma",
          },
          effect: {
            en: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. <em>(You can't choose an Energy card that you used to pay the Retreat Cost.)</em>",
            ja: "Magcargoがアクティブなポケモンであり、ベンチに移動する場合は、Magcargoに取り付けられた1つのFire Energyカードを削除し、新しいアクティブポケモンに取り付けます。 <em>（リトリートコストを支払うために使用したエネルギーカードを選択することはできません。）</em>",
            fr: "Si Magcargo est votre Pokémon actif et se déplace vers le banc, retirez 1 carte d'énergie de feu attachée à Magcargo, le cas échéant, et fixez-la au nouveau Pokémon actif. <em> (Vous ne pouvez pas choisir une carte d'énergie que vous avez utilisée pour payer le coût de retraite.) </em>",
            de: "Wenn Magcargo Ihr aktives Pokémon ist und sich auf die Bank bewegt, entfernen Sie 1 Feuerergiekarte, die an Magcargo angebracht sind, und befestigen Sie sie an das neue aktive Pokémon. <em> (Sie können keine Energiekarte auswählen, mit der Sie die Rückzugskosten bezahlt haben.) </em>",
            es: "Si Magcargo es su Pokémon activo y se mueve al banco, retire 1 tarjeta de energía de fuego unida a MagCargo, si lo hay, y adhiérase al nuevo Pokémon activo. <em> (no puede elegir una tarjeta de energía que solía pagar el costo de retiro). </em>",
            it: "Se Magcargo è il tuo Pokémon attivo e si sposta in panchina, rimuovi 1 carta di energia antincendio attaccata a Magcargo, se presente e attaccalo al nuovo Pokémon attivo. <em> (non puoi scegliere una carta energetica che hai usato per pagare il costo di ritiro.) </em>",
            pt: "Se o Magcargo for o seu Pokémon ativo e se mover para o banco, remova 1 cartão de energia de incêndio conectado ao Magcargo, se houver, e conecte -o ao novo Pokémon ativo. <em> (você não pode escolher um cartão de energia que você costumava pagar o custo do retiro.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Lava Flow",
            ja: "溶岩流",
            fr: "Flux de lave",
            de: "Lavastrom",
            es: "Flujo de lava",
            it: "Flusso di lava",
            pt: "Fluxo de lava",
          },
          effect: {
            en: "You may discard any number of Fire Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Fire Energy card you discarded in this way.",
            ja: "この攻撃を使用すると、Magcargoに取り付けられた火災エネルギーカードを廃棄することができます。もしそうなら、この攻撃は40ダメージに加えて、この方法で廃棄した火災エネルギーカードごとに20のダメージをさらに20回かけます。",
            fr: "Vous pouvez éliminer n'importe quel nombre de cartes d'énergie de feu attachées à Magcargo lorsque vous utilisez cette attaque. Si vous le faites, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires pour chaque carte d'énergie de feu que vous avez jetée de cette manière.",
            de: "Sie können eine beliebige Anzahl von Brandenergiekarten verwerfen, die an Magcargo angebracht sind, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun, verursacht dieser Angriff 40 Schäden plus 20 weitere Schäden für jede Brandenergiekarte, die Sie auf diese Weise weggeworfen haben.",
            es: "Puede descartar cualquier cantidad de cartas de energía de fuego unidas a Magcargo cuando use este ataque. Si lo hace, este ataque hace 40 daños más 20 más de daño por cada carta de energía de fuego que descartó de esta manera.",
            it: "Puoi scartare qualsiasi numero di carte di energia del fuoco collegate a Magcargo quando usi questo attacco. Se lo fai, questo attacco infligge 40 danni più 20 danni in più per ogni carta di energia antincendio che hai scartato in questo modo.",
            pt: "Você pode descartar qualquer número de cartões de energia de incêndio anexados ao Magcargo quando usar esse ataque. Se o fizer, esse ataque causa 40 danos mais 20 mais danos a cada cartão de energia de incêndio que você descartou dessa maneira.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
