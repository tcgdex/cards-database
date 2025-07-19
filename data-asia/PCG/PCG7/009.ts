import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Aerodactyl (Delta Species)",
         ja: "アエロダクチル（デルタ種）",
         fr: "Aérodactyle (espèces delta)",
         de: "Aerodactyl (Delta -Arten)",
         es: "Aerodactil (especie delta)",
         it: "Aerodattilo (specie delta)",
         pt: "Aerodactyl (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [142],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Primal Light",
            ja: "原始光",
            fr: "Lumière primitive",
            de: "Ursprüngliches Licht",
            es: "Luz primaria",
            it: "Luce primordiale",
            pt: "Luz primordial",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Aerodactyl is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、デッキを検索して基本的なエネルギーカードを検索し、対戦相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。アエロダクチルが特別な状態の影響を受けている場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre jeu pour une carte d'énergie de base, le montrer à votre adversaire et le mettre dans votre main. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si l'aérodactyle est affectée par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer grundlegenden Energiekarte suchen, es Ihrem Gegner zeigen und in Ihre Hand legen. Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht angewendet werden, wenn Aerodactyl durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una carta de energía básica, mostrarla a su oponente y ponerlo en su mano. Baraja tu mazo después. Esta potencia no se puede usar si el aerodactilo se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo una carta di energia di base, mostrarlo al tuo avversario e metterlo in mano. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se l'aerodattilo è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho um cartão de energia básico, mostrá -lo ao seu oponente e colocá -lo em sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se o aerodactyl for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Granite Head",
            ja: "花崗岩の頭",
            fr: "Tête de granit",
            de: "Granitkopf",
            es: "Cabeza de granito",
            it: "Testa di granito",
            pt: "Cabeça de granito",
          },
          effect: {
            en: "During your opponent's next turn, any damage done to Aerodactyl by attacks is reduced by 10 (after applying Weakness and Resistance).",
            ja: "対戦相手の次のターン中に、攻撃によってアエロダクチルに与えられた損傷は10倍に減少します（脱力感と抵抗を適用した後）。",
            fr: "Au cours du prochain virage de votre adversaire, tout dommage causé à l'aérodactyle par des attaques est réduit de 10 (après application de faiblesse et de résistance).",
            de: "Während der nächsten Kurve Ihres Gegners wird alle Schäden durch Angriffe durch Aerodactyl um 10 verringert (nach Auftragen von Schwäche und Widerstand).",
            es: "Durante el próximo turno de tu oponente, cualquier daño hecho a aerodactil por ataques se reduce en 10 (después de aplicar debilidad y resistencia).",
            it: "Durante il prossimo turno dell'avversario, qualsiasi danno arrecato ad aerodattilo dagli attacchi viene ridotto di 10 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Durante o próximo turno do seu oponente, qualquer dano causado ao aerodáctilo por ataques é reduzido em 10 (após aplicar fraqueza e resistência).",
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
