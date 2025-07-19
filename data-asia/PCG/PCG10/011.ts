import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Flareon Star",
         ja: "フレアオンスター",
         fr: "Étoile Flareon",
         de: "Flareon Star",
         es: "Estrella de flareón",
         it: "Flareon Star",
         pt: "Flareon Star",
      },


      category: "Pokemon",
      dexId: [136],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Crimson Ray",
            ja: "クリムゾンレイ",
            fr: "Ray à cramoisi",
            de: "Purpurer Strahl",
            es: "Rayo carmesí",
            it: "Ray Crimson",
            pt: "Crimson Ray",
          },
          effect: {
            en: "Once during your turn, when you put Flareon {{Star|this PokÃ©mon}} from your hand onto your Bench, you may use this power. Each Active PokÃ©mon (both yours and your opponent's) is now Burned.",
            ja: "ターン中に、手からflareon {{star | thispokã©mon}}をベンチに置くと、このパワーを使用できます。それぞれのアクティブなPokã©Mon（あなたと相手の両方）が燃やされています。",
            fr: "Une fois pendant votre tour, lorsque vous mettez Flareon {{Star | Ce pokã © Mon}} de votre main sur votre banc, vous pouvez utiliser cette puissance. Chaque pokã © Mon actif (le vôtre et celui de votre adversaire) est maintenant brûlé.",
            de: "Einmal in Ihrem Zug, wenn Sie Flareon {{stern | this poké © mon}} von Ihrer Hand auf Ihre Bank legen, können Sie diese Kraft verwenden. Jeder aktive Poké Mon (sowohl Ihr als auch Ihr Gegner) ist jetzt verbrannt.",
            es: "Una vez durante su turno, cuando coloca Flareon {{Star | Este Poké Mon}} de su mano en su banco, puede usar esta potencia. Cada Poké activo (tanto el tuyo como el de tu oponente) ahora se quema.",
            it: "Una volta durante il tuo turno, quando metti Flareon {{Star | questo poké mon}} dalla tua mano sulla panchina, puoi usare questa potenza. Ogni poké attivo mon (sia il tuo che il tuo avversario) è ora bruciato.",
            pt: "Uma vez durante o seu turno, quando você coloca Flareon {{Star | Este Poké Mon}} da sua mão em seu banco, você pode usar esse poder. Cada Poké Mon ativo (tanto o seu quanto o do seu oponente) está queimado agora.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Flamethrower",
            ja: "火炎放射器",
            fr: "Lance-flammes",
            de: "Flammenwerfer",
            es: "Echador de llama",
            it: "Lanciafiamme",
            pt: "Lança -chamas",
          },
          effect: {
            en: "Discard a Fire Energy attached to Flareon {{Star|this Pokemon}}.",
            ja: "Flareon {{Star | This Pokemon}}に取り付けられた火エネルギーを捨てます。",
            fr: "Jeter une énergie de feu attachée à Flareon {{Star | ce pokemon}}.",
            de: "Verwerfen Sie eine Feuerenergie, die an Flareon gebunden ist {{Stern | dieses Pokemon}}.",
            es: "Deseche una energía de fuego unida a Flareon {{Star | This Pokemon}}.",
            it: "Scartare un'energia di fuoco collegata a Flareon {{Star | this Pokemon}}.",
            pt: "Descarte uma energia de incêndio anexada a flareon {{star | this Pokemon}}.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
