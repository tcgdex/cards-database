import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Sableye",
         ja: "sableye",
         fr: "Sableye",
         de: "Sableye",
         es: "Sableye",
         it: "Sableye",
         pt: "Sableye",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [302],
      hp: 60,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Night Vision",
            ja: "ナイトビジョン",
            fr: "Vision nocturne",
            de: "Nachtsicht",
            es: "Visión nocturna",
            it: "Visione notturna",
            pt: "Visão noturna",
          },
          effect: {
            en: "Once during your turn (before your attack), if Sableye is your Active PokÃ©mon, you may look at your opponent's hand. This power can't be used if Sableye is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、SableyeがあなたのアクティブなPokã©Monである場合、あなたはあなたの対戦相手の手を見ることができます。 Sableyeが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Sableye est votre poké actif, vous pouvez regarder la main de votre adversaire. Ce pouvoir ne peut pas être utilisé si Sableye est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Sableye Ihr aktiver Poké Mon Mon ist, können Sie sich die Hand Ihres Gegners ansehen. Diese Leistung kann nicht angewendet werden, wenn Sableye von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), si Sableye es su Poké Mon activo, puede mirar la mano de su oponente. Esta potencia no se puede usar si Sableye se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Sableye è il tuo poké attivo, puoi guardare la mano del tuo avversario. Questa potenza non può essere utilizzata se Sableye è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se Sableye for o seu Poké ativo, você pode olhar para a mão do seu oponente. Esse poder não pode ser usado se Sableye for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 10,
        },
        {
          cost: ["Darkness"],
          name: {
            en: "Limitation",
            ja: "制限",
            fr: "Limitation",
            de: "Einschränkung",
            es: "Limitación",
            it: "Limitazione",
            pt: "Limitação",
          },
          effect: {
            en: "Your opponent can't play any Supporter cards from his or her hand during your opponent's next turn.",
            ja: "対戦相手は、相手の次のターン中に自分の手からサポーターカードをプレイできません。",
            fr: "Votre adversaire ne peut jouer aucune carte supporte de sa main pendant le prochain tour de votre adversaire.",
            de: "Ihr Gegner kann während der nächsten Runde Ihres Gegners keine Unterstützerkarten von seiner Hand spielen.",
            es: "Tu oponente no puede jugar ninguna carta de partidarios de su mano durante el próximo turno de tu oponente.",
            it: "Il tuo avversario non può giocare a nessuna carta di sostenitore dalla sua mano durante il prossimo turno del tuo avversario.",
            pt: "Seu oponente não pode tocar cartas de apoiador da mão dele durante o próximo turno do seu oponente.",
          },
        },
      ],

      retreat: 1,

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
