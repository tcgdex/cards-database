import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton",
         ja: "マグネトン",
         fr: "Magnéton",
         de: "Magneton",
         es: "Magnetón",
         it: "Magneton",
         pt: "Magneton",
      },


      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Magnetic Field",
            ja: "磁場",
            fr: "Champ magnétique",
            de: "Magnetfeld",
            es: "Campo magnético",
            it: "Campo magnetico",
            pt: "Campo magnético",
          },
          effect: {
            en: "Once during your turn (before your attack), if you have basic Energy cards in your discard pile, you may discard any 1 card from your hand. Then search for up to 2 basic Energy cards from your discard pile, show them to your opponent, and put them into your hand. You can't return the card you first discarded to your hand in this way.  This power can't be used if Magneton is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、廃棄パイルに基本的なエネルギーカードがある場合は、手から1枚のカードを捨てることができます。次に、廃棄パイルから最大2つの基本エネルギーカードを検索し、相手に見せて、手に入れます。この方法で最初に手に捨てたカードを返すことはできません。  マグネトンが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si vous avez des cartes d'énergie de base dans votre tas de défausse, vous pouvez éliminer n'importe quelle carte de votre main. Recherchez ensuite jusqu'à 2 cartes d'énergie de base de votre tas de défausse, montrez-les à votre adversaire et mettez-les dans votre main. Vous ne pouvez pas retourner la carte que vous avez d'abord jetée à votre main de cette manière.  Cette puissance ne peut pas être utilisée si Magneton est affecté par une condition spéciale.",
            de: "Einmal während Ihres Zuges (vor Ihrem Angriff), wenn Sie grundlegende Energiekarten in Ihrem Ablagerungsstapel haben, können Sie eine 1 -Karte von Ihrer Hand wegwerfen. Suchen Sie dann nach bis zu 2 grundlegenden Energiekarten von Ihrem Ablagerungsstapel, zeigen Sie ihn Ihrem Gegner an und legen Sie sie in Ihre Hand. Sie können die Karte, die Sie zuerst auf diese Weise verworfen haben, nicht zurückgeben.  Diese Leistung kann nicht verwendet werden, wenn Magneton von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si tiene cartas de energía básicas en su pila de descarte, puede descartar cualquier 1 carta de su mano. Luego busque hasta 2 tarjetas de energía básicas de su pila de descarte, muéstrales a tu oponente y póngalas en tu mano. No puede devolver la tarjeta que primero descartó a su mano de esta manera.  Esta potencia no se puede usar si Magneton se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se hai carte di energia di base nella tua pila di scarto, puoi scartare qualsiasi carta 1 dalla tua mano. Quindi cerca fino a 2 carte di base di base dalla tua pila di scarti, mostrale al tuo avversario e mettile in mano. Non puoi restituire la carta che hai scartato per la prima volta in questo modo.  Questa potenza non può essere utilizzata se Magneton è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se você tiver cartões básicos de energia em sua pilha de descarte, poderá descartar qualquer cartão de 1 da sua mão. Em seguida, procure até 2 cartões básicos de energia da sua pilha de descarte, mostre -os ao seu oponente e coloque -os em sua mão. Você não pode devolver o cartão que primeiro descartou para sua mão dessa maneira.  Esse poder não pode ser usado se Magneton for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Magnetic Force",
            ja: "磁力",
            fr: "Force magnétique",
            de: "Magnetkraft",
            es: "Fuerza magnética",
            it: "Forza magnetica",
            pt: "Força magnética",
          },
          effect: {
            en: "Does 10 damage times the amount of Energy attached to all of your Pokemon (including Magneton).",
            ja: "すべてのポケモン（マグネトンを含む）に取り付けられたエネルギーの量を10回損傷します。",
            fr: "Fait 10 dégâts de temps la quantité d'énergie attachée à tous vos Pokémon (y compris Magneton).",
            de: "Schädigt 10 Schadenszeiten der Energiemenge, die an all Ihren Pokémon (einschließlich Magneton) angebracht ist.",
            es: "Hace 10 tiempos de daño la cantidad de energía unida a todos sus Pokémon (incluido Magneton).",
            it: "Fa 10 danni volte la quantità di energia collegata a tutto il tuo Pokemon (incluso Magneton).",
            pt: "10 danos vezes a quantidade de energia ligada a todos os seus Pokemon (incluindo Magneton).",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
