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
            en: "Once during your turn (before your attack), you may attach a Water Energy card from your hand to your Active PokÃ©mon. This power can't be used if Swampert is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）、手からアクティブなPokã©Monに水エネルギーカードを取り付けることができます。 Swampertが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte d'énergie de l'eau de votre main à votre poké actif. Cette puissance ne peut pas être utilisée si Swampert est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Kurses (vor Ihrem Angriff) sind, können Sie eine Wasserergiekarte von Ihrer Hand an Ihren aktiven Poké Mon Mon anbringen. Diese Kraft kann nicht verwendet werden, wenn Swampert von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede adjuntar una tarjeta de energía de agua desde su mano a su Poké activo. Esta potencia no se puede usar si Swampert se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi attaccare una scheda di energia idrica dalla tua mano al tuo pokã © attivo. Questa potenza non può essere utilizzata se Swampert è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode anexar um cartão de energia da água da sua mão ao seu Poké de Mon ativo. Esse poder não pode ser usado se Swampert for afetado por uma condição especial.",
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
