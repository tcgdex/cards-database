import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Swampert",
         ja: "スワンパート",
         fr: "Marécage",
         de: "Schwenkt",
         es: "Swampert",
         it: "Swampert",
         pt: "Swampert",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [260],
      hp: 110,
      types: ["Water"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Water Call",
            ja: "ウォーターコール",
            fr: "Appel de l'eau",
            de: "Wasseranruf",
            es: "Llamada de agua",
            it: "Chiamata d'acqua",
            pt: "Chamada de água",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may attach a Water Energy card from your hand to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前に）</em> </em>、手からアクティブなポケモンに水エネルギーカードを取り付けることができます。 Swampertが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez attacher une carte d'énergie de l'eau de votre main à votre Pokémon actif. Cette puissance ne peut pas être utilisée si Swampert est affecté par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Wasserergiekarte von Ihrer Hand an Ihr aktives Pokémon anbringen. Diese Kraft kann nicht verwendet werden, wenn Swampert von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede adjuntar una tarjeta de energía de agua desde su mano a su Pokémon activo. Esta potencia no se puede usar si Swampert se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi attaccare una carta di energia idrica dalla tua mano al tuo Pokémon attivo. Questa potenza non può essere utilizzata se Swampert è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode anexar um cartão de energia da água da sua mão ao seu Pokémon ativo. Esse poder não pode ser usado se Swampert for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Hypno Splash",
            ja: "催眠術",
            fr: "Hypno Splash",
            de: "Hypno Splash",
            es: "Hypno Splash",
            it: "Ipno Splash",
            pt: "Hypno splash",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 50,
        },
      ],

      retreat: 3,

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
