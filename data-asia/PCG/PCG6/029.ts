import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie (Delta Species)",
         ja: "スターミー（デルタ種）",
         fr: "Starmie (espèces delta)",
         de: "Starmie (Delta -Arten)",
         es: "Starmie (especie delta)",
         it: "Starmie (Delta Species)",
         pt: "Starmie (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [121],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Metal Navigation",
            ja: "金属ナビゲーション",
            fr: "Navigation métallique",
            de: "Metallnavigation",
            es: "Navegación de metal",
            it: "Navigazione in metallo",
            pt: "Navegação de metal",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a Metal Energy card and attach it to Starmie. Shuffle your deck afterward. This power can't be used if Starmie is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）になったら、デッキを金属エネルギーカードで検索し、スターミーに取り付けることができます。その後、デッキをシャッフルします。 Starmieが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher une carte d'énergie en métal et la fixer à Starmie. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si Starmie est affectée par une condition spéciale.",
            de: "Sobald Sie in Ihrem Zug (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer Metall -Energiekarte suchen und an Starmie anbringen. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht verwendet werden, wenn Starmie von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una carta de energía de metal y adjuntarla a Starmie. Baraja tu mazo después. Esta potencia no se puede usar si Starmie se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo una carta di energia metallica e attaccarla a Starmie. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se Starmie è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho um cartão de energia de metal e conectá -lo a Starmie. Afaste seu baralho depois. Esse poder não pode ser usado se Starmie for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Collect",
            ja: "集める",
            fr: "Collecter",
            de: "Sammeln",
            es: "Recolectar",
            it: "Raccogliere",
            pt: "Coletar",
          },
          effect: {
            en: "Draw 3 cards.",
            ja: "3枚のカードを描きます。",
            fr: "Dessinez 3 cartes.",
            de: "Zeichnen Sie 3 Karten.",
            es: "Dibuja 3 cartas.",
            it: "Disegna 3 carte.",
            pt: "Desenhe 3 cartas.",
          },
        },
        {
          cost: ["Metal"],
          name: {
            en: "Energy Loop",
            ja: "エネルギーループ",
            fr: "Boucle d'énergie",
            de: "Energieschleife",
            es: "Bucle de energía",
            it: "Ciclo di energia",
            pt: "Loop de energia",
          },
          effect: {
            en: "Return an Energy card attached to Starmie to your hand.",
            ja: "スターミーに取り付けられたエネルギーカードをあなたの手に返します。",
            fr: "Renvoyez une carte d'énergie attachée à Starmie à votre main.",
            de: "Geben Sie eine Energiekarte zurück, die an Starmie an Ihre Hand angebracht ist.",
            es: "Devuelve una tarjeta de energía unida a Starmie a tu mano.",
            it: "Restituisce una carta di energia collegata a Starmie alla tua mano.",
            pt: "Retorne um cartão de energia preso a Starmie à sua mão.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
