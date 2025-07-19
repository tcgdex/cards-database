import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Milotic (Delta Species)",
         ja: "ミロティック（デルタ種）",
         fr: "Milotic (espèce delta)",
         de: "Milotisch (Delta -Arten)",
         es: "Milótico (especie delta)",
         it: "Milotic (Delta Species)",
         pt: "Milotic (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [350],
      hp: 90,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Sharing",
            ja: "共有",
            fr: "Partage",
            de: "Teilen",
            es: "Intercambio",
            it: "Condivisione",
            pt: "Compartilhamento",
          },
          effect: {
            en: "Once during your turn (before your attack), you may look at your opponent's hand. You may use the effect of a Supporter card you find there as the effect of this power. (The Supporter card remains in your opponent's hand.) You can't use more than 1 Sharing PokÃ©-Power each turn. This power can't be used if Milotic is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、相手の手を見ることができます。そこにあるサポーターカードの効果を、このパワーの効果として使用できます。 （サポーターカードは相手の手に残ります。）ターンごとに1つ以上の共有Pokã©Powerを使用することはできません。 Miloticが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder la main de votre adversaire. Vous pouvez utiliser l'effet d'une carte supporte que vous y trouverez comme l'effet de cette puissance. (La carte supporte qui reste dans la main de votre adversaire.) Vous ne pouvez pas utiliser plus d'un partage de poké-puissance à chaque tour. Ce pouvoir ne peut pas être utilisé si le milotique est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie sich die Hand Ihres Gegners ansehen. Sie können den Effekt einer Unterstützerkarte verwenden, die Sie dort als den Effekt dieser Leistung finden. (Die Unterstützerkarte bleibt in der Hand Ihres Gegners.) Sie können in jeder Runde nicht mehr als 1 Poké-Akten verwenden. Diese Kraft kann nicht verwendet werden, wenn Milotic von einem besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede mirar la mano de su oponente. Puede usar el efecto de una tarjeta de partidario que encuentre allí como el efecto de este poder. (La tarjeta de seguidores permanece en la mano de tu oponente). No puedes usar más de 1 compartir la potencia de Poké en cada turno. Esta potencia no se puede usar si Milotic se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi guardare la mano del tuo avversario. È possibile utilizzare l'effetto di una scheda di sostenitori che trovi lì come effetto di questo potere. (La scheda di sostenitore rimane nella mano del tuo avversario.) Non è possibile utilizzare più di 1 condividere la potenza di poké ogni turno. Questo potere non può essere utilizzato se Milotic è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode olhar para a mão do seu oponente. Você pode usar o efeito de um cartão de apoiador que encontra lá como o efeito desse poder. (O cartão de torcedor permanece na mão do seu oponente.) Você não pode usar mais de 1 compartilhamento de Poké-Power a cada turno. Esse poder não pode ser usado se o milótico for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
