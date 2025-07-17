import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Feraligatr",
         ja: "暗いferaligatr",
         fr: "Farmedigatr sombre",
         de: "Dark Feraligatr",
         es: "Feraligatr oscuro",
         it: "Dark Feraligatr",
         pt: "Dark Feraligatr",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [160],
      hp: 80,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Scare",
            ja: "怖い",
            fr: "Effrayer",
            de: "Schrecken",
            es: "Susto",
            it: "Spavento",
            pt: "Susto",
          },
          effect: {
            en: "As long as Dark Feraligatr is your Active Pokmon, all of your opponent's Baby Pokmon Powers stop working and your opponent's Baby Pokmon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.",
            ja: "暗いferaligatrがあなたのアクティブなポクモンである限り、相手の赤ちゃんのポクモンのパワーはすべて働くことを止め、相手の赤ちゃんのポクモンは攻撃できません。このパワーは、暗いフェラガトルが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Tant que Dark Feraligatr est votre Pokmon actif, tous les pouvoirs de pokmon de votre adversaire cessent de fonctionner et le bébé Pokmon de votre adversaire ne peut pas attaquer. Ce pouvoir cesse de fonctionner tandis que Dark Feraligatr est endormi, confus ou paralysé.",
            de: "Solange Dark Feraligatr Ihr aktives Pokmon ist, hören alle Baby -Pokmon -Kräfte Ihres Gegners auf zu arbeiten, und das Baby -Pokmon Ihres Gegners kann nicht angreifen. Diese Kraft hört auf, zu arbeiten, während Dark Feraligatr schläft, verwirrt oder gelähmt ist.",
            es: "Mientras Dark Feraligatr sea tu Pokmon activo, todos los poderes de Pokmon Baby de tu oponente dejan de funcionar y el bebé Pokmon de tu oponente no puede atacar. Este poder deja de funcionar mientras Dark Feraligatr está dormido, confundido o paralizado.",
            it: "Finché Dark Feraligatr è il tuo Pokmon attivo, tutti i poteri dei Pokmon del tuo avversario smettono di funzionare e il bambino del tuo avversario non può attaccare. Questo potere smette di funzionare mentre Dark Faraligatr è addormentato, confuso o paralizzato.",
            pt: "Enquanto o Dark Feraligatr for o seu Pokmon ativo, todos os poderes do bebê Pokmon do seu oponente param de funcionar e o bebê Pokmon do seu oponente não pode atacar. Esse poder para de funcionar enquanto o Dark Feraligatr está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Crushing Blow",
            ja: "押しつぶす打撃",
            fr: "Coup écrasant",
            de: "Schlaganfall",
            es: "Golpe aplastante",
            it: "Colpo schiacciante",
            pt: "Golpe esmagador",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.",
            ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのカードの1枚を選択して破棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes et jetez-la.",
            de: "Wenn das verteidigende Pokemon an Energiekarten angebracht ist, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 dieser Karten und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía unida, voltea una moneda. Si se dirige, elija 1 de esas cartas y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte di energia ad esso collegate, capovolgi una moneta. Se la testa, scegli 1 di quelle carte e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, vire uma moeda. Se as cabeças, escolha 1 dessas cartas e descarte -as.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
