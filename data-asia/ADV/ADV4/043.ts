import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Lanturn",
         ja: "ラントン",
         fr: "Chanteur",
         de: "Lanturn",
         es: "Lanturn",
         it: "Lanturn",
         pt: "Lanturn",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Energy Grounding",
            ja: "エネルギー接地",
            fr: "Mise à la terre énergétique",
            de: "Energie Erdung",
            es: "Puesta en tierra",
            it: "Messa a terra energetica",
            pt: "Aterramento de energia",
          },
          effect: {
            en: "Once during your opponent's turn, when any of your PokÃ©mon is Knocked Out by your opponent's attacks, you may use this power. Choose a basic Energy card discarded from the Knocked Out PokÃ©mon and attach it to Lanturn. You can't use more than 1 Energy Grounding PokÃ©-Power each turn.",
            ja: "対戦相手のターン中に、ポカンのいずれかが相手の攻撃によってノックアウトされると、このパワーを使用できます。ノックアウトされたポケモンから捨てられた基本的なエネルギーカードを選択し、それをLanturnに取り付けます。ターンごとに1つ以上のエネルギー接地ポケを使用することはできません。",
            fr: "Une fois au tour de votre adversaire, lorsqu'une de vos poké-monrs est éliminée par les attaques de votre adversaire, vous pouvez utiliser ce pouvoir. Choisissez une carte d'énergie de base jetée dans le Poké KO et attachez-la à Lanturn. Vous ne pouvez pas utiliser plus de 1 énergie de mise à la terre Poké-puissance à chaque tour.",
            de: "Sobald Sie während Ihres Gegners an der Reihe sind, können Sie diese Kraft verwenden, wenn einer Ihrer Poké Mon Mon von den Angriffen Ihres Gegners ausgeschieden wird. Wählen Sie eine grundlegende Energiekarte, die aus dem gestrichenen Poké Mon abgeworfen wird, und befestigen Sie sie am Lanturn. Sie können nicht mehr als 1 Energy Grounding Poké-Kraft in jeder Runde verwenden.",
            es: "Una vez durante el turno de tu oponente, cuando cualquiera de tus ataques de tu oponente noqueado, puedes usar este poder. Elija una tarjeta de energía básica descartada del Poké Mon noqueado y adjuntarla a Lanturn. No puede usar más de 1 energía de conexión a tierra de energía en cada turno.",
            it: "Una volta durante il turno del tuo avversario, quando uno dei tuoi poké mon viene eliminato dagli attacchi del tuo avversario, puoi usare questo potere. Scegli una carta di energia di base scartata dal poké montato e attaccala a Lanturn. Non è possibile utilizzare più di 1 Poké-power di terra energetica ogni turno.",
            pt: "Uma vez durante a vez do seu oponente, quando qualquer um dos seus Poké é nocauteado pelos ataques do seu oponente, você pode usar esse poder. Escolha um cartão de energia básico descartado a partir do Poké Mon nocauteado e prenda -o a Lanturn. Você não pode usar mais de 1 energia de energia energética-Power-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Colorless"],
          name: {
            en: "Lightning Strike",
            ja: "落雷",
            fr: "Grève de la foudre",
            de: "Blitzschlag",
            es: "Rayo",
            it: "Fulmini",
            pt: "Lightning Strike",
          },
          effect: {
            en: "You may discard all Lightning Energy attached to Lanturn. If you do, this attack's base damage is 90 instead of 50.",
            ja: "Lanturnに取り付けられたすべての稲妻エネルギーを捨てることができます。そうすれば、この攻撃の基本ダメージは50ではなく90です。",
            fr: "Vous pouvez jeter toute l'énergie de la foudre attachée à Lanturn. Si vous le faites, les dégâts de base de cette attaque sont de 90 au lieu de 50.",
            de: "Sie können alle Blitzergie an Lanturn verwerfen. Wenn Sie dies tun, beträgt der Grundschaden dieses Angriffs 90 statt 50.",
            es: "Puede descartar toda la energía del rayo unida a Lanturn. Si lo haces, el daño base de este ataque es 90 en lugar de 50.",
            it: "Puoi scartare tutta l'energia di fulmini attaccata a Lanturn. Se lo fai, il danno base di questo attacco è 90 anziché 50.",
            pt: "Você pode descartar toda a energia de raios ligada a Lanturn. Se o fizer, o dano básico desse ataque é 90 em vez de 50.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
