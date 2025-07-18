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
            en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your PokÃ©mon.  Put 2 damage counters on that PokÃ©mon.  Shuffle your deck afterward.  This power can't be used if Gardevoir is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、デッキをサイキックエネルギーカードに検索し、1つのPokã©Monに添付することができます。  そのポカンに2つのダメージカウンターを置きます。  その後、デッキをシャッフルします。  Gardevoirが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre jeu une carte d'énergie psychique et la fixer à 1 de votre pokã © Mon.  Mettez 2 compteurs de dégâts sur ce pokã © lun.  Mélanger votre deck par la suite.  Ce pouvoir ne peut pas être utilisé si GardeVoir est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer psychischen Energiekarte suchen und es an 1 Ihrer Pokémon anbringen.  Legen Sie 2 Schadenszähler auf diesen Poké © Mon.  Mischen Sie anschließend Ihr Deck.  Diese Kraft kann nicht eingesetzt werden, wenn Gardevoir von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo una carta de energía psíquica y adjuntarla a 1 de su Poké Mon.  Pon 2 contadores de daño en ese Poké Mon.  Baraja tu mazo después.  Este poder no se puede usar si Gardevoir se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo una carta di energia psichica e attaccarla a 1 del tuo poké mon.  Metti 2 contatori di danno su quel poké mon.  Shuffle il tuo mazzo in seguito.  Questo potere non può essere usato se Gardevoir è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho um cartão de energia psíquica e anexá -lo a 1 do seu Poké Mon.  Coloque 2 contadores de danos naquele Poké MON.  Afaste seu baralho depois.  Esse poder não pode ser usado se Gardevoir for afetado por uma condição especial.",
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
