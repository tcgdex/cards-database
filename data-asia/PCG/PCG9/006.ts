import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Quagsire (Delta Species)",
         ja: "quagsire（デルタ種）",
         fr: "Quagsire (espèces delta)",
         de: "Quagsire (Delta -Arten)",
         es: "Quagsire (especie delta)",
         it: "Quagsire (Delta Species)",
         pt: "Quagsire (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [195],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dig Up",
            ja: "掘り下げます",
            fr: "Déterrer",
            de: "Ausgraben",
            es: "Desenterrar",
            it: "Scavare",
            pt: "Desenterrar",
          },
          effect: {
            en: "Once during your turn, when you play Quagsire from your hand to evolve 1 of your PokÃ©mon, you may search your discard pile for up to 2 PokÃ©mon Tool cards, show them to your opponent, and put them into your hand.",
            ja: "ターン中に、手からquagsireをプレイしてポカンの1つを進化させると、最大2つのポカンツールカードを廃棄パイルを検索し、相手に見せて、手に渡すことができます。",
            fr: "Une fois pendant votre tour, lorsque vous jouez au Quagsire de votre main pour évoluer 1 de votre poké, vous pouvez rechercher votre tas de défausse jusqu'à 2 cartes à outils Pokã © Mon, les montrer à votre adversaire et les mettre dans votre main.",
            de: "Sobald Sie in Ihrem Zug, wenn Sie Quagsire von Ihrer Hand spielen, um 1 Ihrer Poké Mon Mon zu entwickeln, können Sie Ihren Ablagerungsstapel nach bis zu 2 Poké -Mo -Werkzeugkarten durchsuchen, sie Ihrem Gegner zeigen und sie in Ihre Hand legen.",
            es: "Una vez durante su turno, cuando juegas en Quagsire de tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu pila de descarte para hasta 2 tarjetas de herramientas Poké Mon, mostrarlas a tu oponente y ponerlas en tu mano.",
            it: "Una volta durante il tuo turno, quando giochi da quagsire dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare il tuo mucchio di scarti per un massimo di 2 schede utensili Poké Mon, mostrarle al tuo avversario e metterle in mano.",
            pt: "Uma vez durante o seu turno, quando você toca Quagsire da sua mão para evoluir 1 do seu Poké Mon, você pode pesquisar sua pilha de descarte por até 2 cartões de ferramentas de Mon, mostrá -los ao seu oponente e colocá -los em sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Pump Out",
            ja: "ポンプアウト",
            fr: "Pomper",
            de: "Pumpen Sie aus",
            es: "Achicar",
            it: "Pompa fuori",
            pt: "Bombear",
          },
          effect: {
            en: "If Quagsire has a Pokemon Tool card attached to it, this attack does 50 damage plus 20 more damage.",
            ja: "Quagsireにポケモンツールカードが接続されている場合、この攻撃は50のダメージと20ダメージを与えます。",
            fr: "Si Quagsire a une carte à outils Pokemon attachée, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn in Quagsire eine Pokemon -Werkzeugkarte angebracht ist, enthält dieser Angriff 50 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si Quagsire tiene una tarjeta de herramienta Pokemon adjunta, este ataque hace 50 daños más 20 más de daño.",
            it: "Se Quagsire ha una scheda utensile Pokemon collegata ad essa, questo attacco infligge 50 danni più 20 danni.",
            pt: "Se o Quagsire tiver um cartão de ferramenta Pokemon anexado a ele, esse ataque causará 50 danos mais 20 danos.",
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
