import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton - 037/088",
         ja: "マグネトン-037/088",
         fr: "Magneton - 037/088",
         de: "Magneton - 037/088",
         es: "Magneton - 037/088",
         it: "Magneton - 037/088",
         pt: "Magneton - 037/088",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Attach Energy",
            ja: "エネルギーを取り付けます",
            fr: "Attacher l'énergie",
            de: "Energie befestigen",
            es: "Adjuntar energía",
            it: "Attaccare energia",
            pt: "Anexe energia",
          },
          effect: {
            en: "When you play Magneton from your hand to evolve 1 of your Pokmon, you may move any number of basic Energy cards attached to your other Pokmon to Magneton.",
            ja: "手からマグネトンを演奏してポケモンの1つを進化させると、他のポケモンに取り付けられた基本エネルギーカードを任意の数のマグネトンに移動できます。",
            fr: "Lorsque vous jouez à Magneton de votre main pour évoluer 1 de votre Pokémon, vous pouvez déplacer n'importe quel nombre de cartes d'énergie de base attachées à votre autre Pokémon à Magneton.",
            de: "Wenn Sie Magneton von Ihrer Hand spielen, um 1 Ihres Pokémon zu entwickeln, können Sie eine beliebige Anzahl von grundlegenden Energiekarten an Ihr anderes Pokémon in Magneton verschieben.",
            es: "Cuando juegas a Magneton desde tu mano para evolucionar 1 de tu Pokémon, puedes mover cualquier cantidad de tarjetas de energía básicas unidas a tu otro Pokémon a Magneton.",
            it: "Quando giochi a Magneton dalla tua mano per evolvere 1 del tuo Pokemon, puoi spostare qualsiasi numero di carte di energia di base collegate all'altro Pokemon a Magneton.",
            pt: "Quando você joga magneton da sua mão para evoluir 1 do seu Pokemon, você pode mover qualquer número de cartões básicos de energia anexados ao seu outro Pokémon para Magneton.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Electric Blast",
            ja: "電気爆発",
            fr: "Explosion électrique",
            de: "Elektrische Explosion",
            es: "Explosión eléctrica",
            it: "Esplosione elettrica",
            pt: "Explosão elétrica",
          },
          effect: {
            en: "You may discard all Lightning Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent's Benched Pokemon in the way you like. (For example, if you discard 3 Lightning Energy cards, you can put 1 damage counter on 1 of your opponent's Benched Pokemon and 2 counters on another.)",
            ja: "この攻撃を使用すると、マグネトンに取り付けられたすべての稲妻エネルギーカードを破棄できます。そうした場合、この方法で削除されたエネルギーカードの量に等しいダメージカウンターを、相手のベンチでポケモンを好きなように配置します。 （たとえば、3枚のLightning Energyカードを破棄すると、対戦相手のベンチ付きポケモンの1つに1つのダメージカウンターを配置し、別のカウンターに2つのカウンターを配置できます。）",
            fr: "Vous pouvez éliminer toutes les cartes d'énergie Lightning attachées à Magneton lorsque vous utilisez cette attaque. Si vous le faites, mettez les compteurs de dégâts égaux à la quantité de cartes d'énergie supprimées de cette manière sur n'importe quel nombre de pokemon bancés de votre adversaire comme vous le souhaitez. (Par exemple, si vous jetez 3 cartes d'énergie Lightning, vous pouvez mettre 1 compteur de dégâts sur 1 des pokemon bancés de votre adversaire et 2 compteurs sur un autre.)",
            de: "Sie können alle an Magneton befestigten Blitzelenergiekarten verwerfen, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun, setzen Sie Schadenszähler, die der auf diese Weise entfernten Energiekarten entspricht, auf einer beliebigen Anzahl von Pokemon Ihres Gegners in der Art, wie Sie möchten. (Wenn Sie beispielsweise 3 Lightning Energy -Karten verwerfen, können Sie 1 Schadenschalter auf 1 der Bank -Pokemon Ihres Gegners und 2 Zähler auf einen anderen stellen.)",
            es: "Puede descartar todas las cartas de energía de Lightning unidas a Magneton cuando usa este ataque. Si lo hace, coloque los contadores de daño igual a la cantidad de tarjetas de energía eliminadas de esta manera en cualquier número de Pokémon de banca de su oponente en la forma en que lo desee. (Por ejemplo, si desechas 3 tarjetas de energía Lightning, puedes poner 1 contador de daño en 1 de los Pokémon de banca de tu oponente y 2 mostradores en otro).",
            it: "Puoi scartare tutte le carte di energia fulmini attaccate a Magneton quando usi questo attacco. Se lo fai, inserisci i contatori di danno pari alla quantità di carte di energia rimosse in questo modo su un numero di Pokemon in panchina del tuo avversario nel modo in cui vuoi. (Ad esempio, se scarti 3 carte di energia Lightning, puoi mettere 1 contatore di danni su 1 dei Pokemon in panchina del tuo avversario e 2 contatori su un altro.)",
            pt: "Você pode descartar todos os cartões de energia da Lightning anexados a Magneton quando usar esse ataque. Se o fizer, coloque os contadores de danos iguais à quantidade de cartões de energia removidos dessa maneira em qualquer número de Pokémon em banco do seu oponente da maneira que você gosta. (Por exemplo, se você descartar 3 cartões de energia relâmpago, poderá colocar 1 contador de danos em 1 dos Pokémon bancos do seu oponente e 2 contadores em outro.)",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
