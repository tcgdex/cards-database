import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Chimecho (Delta Species)",
         ja: "キメコ（デルタ種）",
         fr: "Chimecho (espèces delta)",
         de: "Chimecho (Delta -Arten)",
         es: "Chimecho (especie delta)",
         it: "Chimecho (Delta Species)",
         pt: "Chimecho (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [358],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Delta Support",
            ja: "デルタサポート",
            fr: "Support delta",
            de: "Delta -Unterstützung",
            es: "Soporte delta",
            it: "Supporto delta",
            pt: "Suporte delta",
          },
          effect: {
            en: "Once during your turn (before your attack), if you have a Supporter card with Holon in its name in play, you may search your discard pile for a basic Energy card or a Delta Rainbow Energy card, show it to your opponent, and put it into your hand. This power can't be used if Chimecho is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、ホロンがその名前に載っているサポーターカードを持っている場合は、基本的なエネルギーカードまたはデルタレインボーエネルギーカードを廃棄パイルを検索し、対戦相手に見せて、手に渡すことができます。キメコーが特別な状態の影響を受ける場合、この力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si vous avez une carte supporteuse avec Holon en son nom en jeu, vous pouvez rechercher votre tas de défausse pour une carte d'énergie de base ou une carte d'énergie Delta Rainbow, le montrer à votre adversaire et le mettre dans votre main. Cette puissance ne peut pas être utilisée si Chimecho est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Sie eine Unterstützerkarte mit Holon in seinem Namen im Spiel haben, können Sie Ihren Entwurfshaufen nach einer grundlegenden Energiekarte oder einer Delta Rainbow Energy -Karte durchsuchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Diese Kraft kann nicht verwendet werden, wenn der Chimecho von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si tiene una carta de seguidores con Holon en su nombre en juego, puede buscar en su pila de descarte para una tarjeta de energía básica o una tarjeta de energía del arco iris delta, mostrarla a su oponente y ponerla en su mano. Esta potencia no se puede usar si el chimecho se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), se hai una carta di sostenitore con Holon nel suo nome in gioco, puoi cercare nella tua pila di scarto per una scheda energetica di base o una carta di energia arcobaleno delta, mostrarla al tuo avversario e metterlo in mano. Questa potenza non può essere utilizzata se il chimecho è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se você tiver uma carta de apoiadores com Holon em seu nome em jogo, poderá pesquisar sua pilha de descarte por um cartão de energia básico ou um cartão de energia do Rainbow Delta, mostrá -lo ao seu oponente e colocá -lo em sua mão. Esse poder não pode ser usado se o chimecho for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Hook",
            ja: "フック",
            fr: "Crochet",
            de: "Haken",
            es: "Gancho",
            it: "Gancio",
            pt: "Gancho",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
