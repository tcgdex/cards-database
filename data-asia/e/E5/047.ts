import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Xatu - 047/088",
         ja: "Xatu -047/088",
         fr: "Xatu - 047/088",
         de: "Xatu - 047/088",
         es: "Xatu - 047/088",
         it: "Xatu - 047/088",
         pt: "Xatu - 047/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [178],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Synchronicity",
            ja: "同期性",
            fr: "Synchronicité",
            de: "Synchronität",
            es: "Sincronicidad",
            it: "Sincronicità",
            pt: "Sincronicidade",
          },
          effect: {
            en: "You may attach any Technical Machine to Xatu.",
            ja: "任意の技術マシンをXatuに接続できます。",
            fr: "Vous pouvez attacher n'importe quelle machine technique à xatu.",
            de: "Sie können eine technische Maschine an xatu anbringen.",
            es: "Puede adjuntar cualquier máquina técnica a Xatu.",
            it: "È possibile collegare qualsiasi macchina tecnica a Xatu.",
            pt: "Você pode anexar qualquer máquina técnica a Xatu.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Warp Hole",
            ja: "ワープホール",
            fr: "Trou de guerre",
            de: "Warp -Loch",
            es: "Agujero de urdimbre",
            it: "Warp Hole",
            pt: "Buraco de urdidura",
          },
          effect: {
            en: "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.",
            ja: "コインをひっくり返します。頭の場合は、廃棄パイルからカードを選択し、デッキの上に置きます。",
            fr: "Retourner une pièce. Si les têtes, choisissez une carte dans votre tas de défausse et mettez-la sur votre jeu.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, wählen Sie eine Karte von Ihrem Ablagerungsstapel aus und legen Sie sie auf Ihr Deck.",
            es: "Voltea una moneda. Si se dirige, elija una carta de su pila de descarte y póngala encima de su mazo.",
            it: "Capovolgi una moneta. Se la testa, scegli una carta dal tuo mucchio di scarti e mettila sopra il mazzo.",
            pt: "Vire uma moeda. Se as cabeças, escolha uma carta da sua pilha de descarte e coloque -a em cima do seu baralho.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
