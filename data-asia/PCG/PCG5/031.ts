import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Huntail",
         ja: "ハンテイル",
         fr: "Huntail",
         de: "Huntail",
         es: "Cazar",
         it: "Huntail",
         pt: "Huntail",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [367],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Reactive Generator",
            ja: "リアクティブジェネレーター",
            fr: "Générateur réactif",
            de: "Reaktiver Generator",
            es: "Generador reactivo",
            it: "Generatore reattivo",
            pt: "Gerador reativo",
          },
          effect: {
            en: "Once during your turn (before your attack), if Huntail has no React Energy cards attached to it, you may search your deck for a React Energy card and attach it to Huntail. Shuffle your deck afterward. This power can't be used if Huntail is affected by a Special Condition.",
            ja: "ターン中（攻撃の前に）一度、HuntailにReact Energy Cardが接続されていない場合は、Deckを検索してReact Energyカードを検索してハンテールに添付できます。その後、デッキをシャッフルします。 Huntailが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Huntail n'a pas de cartes d'énergie de réact qui y sont attachées, vous pouvez rechercher votre jeu une carte d'énergie React et la fixer à Huntail. Mélanger votre deck par la suite. Ce pouvoir ne peut pas être utilisé si Huntail est affecté par une condition spéciale.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach einer React -Energiekarte durchsuchen, wenn Huntail keine React -Energy -Karten befestigt und an Huntail anbringen. Mischen Sie anschließend Ihr Deck. Diese Kraft kann nicht angewendet werden, wenn Huntail von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno (antes de su ataque), si Hunail no tiene cartas de energía reaccionadas adjuntas, puede buscar en su mazo una carta de energía React y adjuntarla a Hunail. Baraja tu mazo después. Este poder no se puede usar si Hatail se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Huntail non ha carte di energia reagito ad esso, puoi cercare nel tuo mazzo una carta di energia reattiva e attaccarla a Huntail. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se la zappa è influenzata da una condizione speciale.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o Huntail não tiver cartas de energia do React anexadas a ele, você poderá pesquisar no seu baralho um cartão de energia do React e conectá -lo à Huntail. Afaste seu baralho depois. Esse poder não pode ser usado se o Huntail for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Bite Off",
            ja: "噛む",
            fr: "Mordre",
            de: "Abbeißen",
            es: "Arrancar con los dientes",
            it: "Mordere",
            pt: "Morda",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 40 damage plus 30 more damage.",
            ja: "防御ポケモンがポケモン-Exの場合、この攻撃は40ダメージに加えて30ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 40 dégâts plus 30 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 40 Schaden zuzüglich 30 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 40 daños más 30 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 40 danni più 30 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 40 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 1,

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
