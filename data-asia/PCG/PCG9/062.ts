import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Ledian (Delta Species)",
         ja: "Ledian（デルタ種）",
         fr: "Ledian (espèces delta)",
         de: "LEDIAN (Delta -Arten)",
         es: "Ledian (especie delta)",
         it: "Ledian (Delta Species)",
         pt: "LEDIAN (espécies Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [166],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Prowl",
            ja: "うろつき",
            fr: "Rôder",
            de: "Durchplagen",
            es: "Merodear",
            it: "Prowl",
            pt: "Prowl",
          },
          effect: {
            en: "Once during your turn, when you play Ledian from your hand to evolve 1 of your PokÃ©mon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
            ja: "ターン中に、Pokã©Monの1つを進化させるためにLedianを手から演奏すると、デッキを1枚のカードを検索して手に入れることができます。その後、デッキをシャッフルします。",
            fr: "Une fois pendant votre tour, lorsque vous jouez à Ledian de votre main pour évoluer 1 de votre pokã © Mon, vous pouvez rechercher votre jeu pour une carte 1 et la mettre dans votre main. Mélanger votre deck par la suite.",
            de: "Sobald Sie während Ihres Zuges LEDIAN von Ihrer Hand spielen, um 1 Ihres Poké Mons zu entwickeln, können Sie Ihr Deck nach einer 1 -Karte durchsuchen und sie in Ihre Hand legen. Mischen Sie anschließend Ihr Deck.",
            es: "Una vez durante su turno, cuando juegas ledian desde tu mano para evolucionar 1 de tu Poké Mon, puedes buscar en tu mazo cualquier carta y ponerla en tu mano. Baraja tu mazo después.",
            it: "Una volta durante il tuo turno, quando giochi a ledian dalla tua mano per evolvere 1 del tuo poké mon, puoi cercare nel tuo mazzo qualsiasi carta 1 e metterlo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Uma vez durante o seu turno, quando você toca LEDIAN da sua mão para evoluir 1 do seu Poké Mon, você pode procurar seu baralho por 1 carta e colocá -la em sua mão. Afaste seu baralho depois.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Metal Star",
            ja: "メタルスター",
            fr: "Étoile du métal",
            de: "Metallstern",
            es: "Estrella de metal",
            it: "Stella metallica",
            pt: "Estrela de metal",
          },
          effect: {
            en: "If Ledian has a Pokemon Tool card attached to it, draw 3 cards.",
            ja: "Ledianにポケモンツールカードが取り付けられている場合は、3枚のカードを描画します。",
            fr: "Si Ledian a une carte à outils Pokemon attachée, dessinez 3 cartes.",
            de: "Wenn LEDIAN eine Pokemon -Toolkarte mit sich angeschlossen hat, zeichnen Sie 3 Karten.",
            es: "Si Ledian tiene una tarjeta de herramienta Pokemon adjunta, dibuje 3 cartas.",
            it: "Se LeDian ha una scheda utensile Pokemon collegata ad essa, disegna 3 carte.",
            pt: "Se o LEDIAN tiver uma placa de ferramenta Pokemon anexada a ele, desenhe 3 cartas.",
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
