import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Gardevoir",
         ja: "gardevoir",
         fr: "Gardien",
         de: "Gardevoir",
         es: "Gardevoir",
         it: "Gardevoir",
         pt: "Gardevoir",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [282],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Psy Shadow",
            ja: "Psy Shadow",
            fr: "Ombre psy",
            de: "Psy -Schatten",
            es: "Psy Shadow",
            it: "Psy Shadow",
            pt: "Psy Shadow",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon.  Put 2 damage counters on that Pokémon.  Shuffle your deck afterward.  This power can't be used if Gardevoir is affected by a Special Condition.",
            ja: "ターン中に（攻撃の前）</em> </em>、サイキックエネルギーカードを検索して、ポケモン1枚に添付することができます。  そのポケモンに2つのダメージカウンターを置きます。  その後、デッキをシャッフルします。  Gardevoirが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez rechercher votre jeu une carte d'énergie psychique et la fixer à 1 de votre Pokémon.  Mettez 2 compteurs de dégâts sur ce Pokémon.  Mélanger votre deck par la suite.  Ce pouvoir ne peut pas être utilisé si GardeVoir est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie Ihr Deck nach einer psychischen Energiekarte durchsuchen und an 1 Ihres Pokémons anbringen.  Setzen Sie 2 Schadenszähler auf dieses Pokémon.  Mischen Sie anschließend Ihr Deck.  Diese Kraft kann nicht eingesetzt werden, wenn Gardevoir von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede buscar en su mazo una carta de energía psíquica y adjuntarla a 1 de sus Pokémon.  Pon 2 contadores de daño en ese Pokémon.  Baraja tu mazo después.  Este poder no se puede usar si Gardevoir se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi cercare nel tuo mazzo una carta di energia psichica e attaccarla a 1 dei tuoi Pokémon.  Metti 2 contatori di danno su quel Pokémon.  Shuffle il tuo mazzo in seguito.  Questo potere non può essere usato se Gardevoir è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode pesquisar no seu baralho um cartão de energia psíquica e conectá -lo a 1 do seu Pokémon.  Coloque 2 contadores de danos nesse Pokémon.  Afaste seu baralho depois.  Esse poder não pode ser usado se Gardevoir for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Energy Burst",
            ja: "エネルギーバースト",
            fr: "Éclatement d'énergie",
            de: "Energieausbruch",
            es: "Estallido de energía",
            it: "Scoppio di energia",
            pt: "Explosão de energia",
          },
          effect: {
            en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokemon.",
            ja: "Gardevoirと防御ポケモンに付随するエネルギーの総量を10回ダメージします。",
            fr: "Fait 10 temps de dégâts la quantité totale d'énergie attachée à Gardevoir et au Pokémon en défense.",
            de: "Hat 10 Schadenszeiten der Gesamtmenge an Energie, die an Gardevoir und dem verteidigenden Pokémon verbunden ist.",
            es: "Hace 10 tiempos de daño la cantidad total de energía unida a Gardevoir y el Pokémon defensor.",
            it: "Fa 10 danni volte la quantità totale di energia attaccata a Gardevoir e il Pokemon in carica.",
            pt: "10 danos vezes a quantidade total de energia ligada ao Gardevoir e ao Pokémon atual.",
          },
        },
      ],

      retreat: 2,

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
