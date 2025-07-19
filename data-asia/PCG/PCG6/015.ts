import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sunny Castform",
         ja: "日当たりの良いキャストフォーム",
         fr: "Castform ensoleillé",
         de: "Sunny Castform",
         es: "Castform soleado",
         it: "Sunny Castform",
         pt: "Sunny Castform",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [351],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Temperamental Weather",
            ja: "気質の天気",
            fr: "Temps capricieux",
            de: "Temperamentvolles Wetter",
            es: "Clima temperamental",
            it: "Tempo temperamentale",
            pt: "Clima temperamental",
          },
          effect: {
            en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Snow-cloud Castform and switch it with Sunny Castform. (Any cards attached to Sunny Castform, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Shuffle Sunny Castform back into your deck. You can't use more than 1 Temperamental Weather PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前に）ターン中に、キャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームをデッキで検索し、日当たりの良いキャストフォームで切り替えることができます。 （サニーキャスト、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。にあります。）サニーキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck pour Castform, Rain Castform ou Snow-Cloud Castform et le commuter avec Sunny Castform. (Toutes les cartes attachées à Sunny Castform, les compteurs de dégâts, les conditions spéciales et les effets sont désormais sur le nouveau Pokã © Mon.) Retourner la forme de cast ensoleillée dans votre deck. Vous ne pouvez pas utiliser plus de 1 temps capricieux Poké-puissance à chaque tour.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Ihr Deck nach Castform, Rain Castform oder Snow Cloud Castform suchen und es mit sonniger Castform schalten. (Alle Karten, die an Sunny Castform, Schadenszähler, besonderen Bedingungen und Auswirkungen auf die neuen Poké Mons angeschlossen sind.) Shuffle Sunny Castform zurück in Ihr Deck. Sie können nicht mehr als 1 temperamentvolles Wetter in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo en su mazo, Castform, Rain Castform o Snow-Cloud Castform y cambiarlo con Castform soleado. (Cualquier tarjetas adjuntas a la soleada Castform, Counters de daño, condiciones especiales y efectos en ello ahora están en el nuevo Poké Mon.) Archalean a Sunny Castform de regreso a su mazo. No puede usar más de 1 temperatura temperamental del clima Poké en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo per CastForm, Rain Castform o Snow-Cloud Caster e cambiarlo con Sunny Castform. (Eventuali carte attaccate alla Sunny Castform, contatori di danni, condizioni speciali ed effetti su di essa sono ora sul nuovo poké mon.) Shuffle Sunny Castform di nuovo nel tuo mazzo. Non è possibile utilizzare più di 1 meteo temperamentale poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho em busca de formas de fundição, formas de fundição de chuva ou nuvem de neve e trocá-la com uma forma de fundição ensolarada. (Quaisquer cartas anexadas à forma de fundição ensolarada, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Shuffle Sunny Castform de volta ao seu baralho. Você não pode usar mais de 1 clima temperamental Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Holon Search",
            ja: "ホロン検索",
            fr: "Recherche de holon",
            de: "Holon -Suche",
            es: "Búsqueda de holon",
            it: "Search Holon",
            pt: "Pesquisa de Holon",
          },
          effect: {
            en: "Search your deck for a Holon Energy card and attach it to 1 of your Pokemon. Shuffle your deck afterward.",
            ja: "デッキを検索して、ホロンエネルギーカードを添付し、ポケモン1枚に添付してください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte Holon Energy et attachez-la à 1 de votre Pokémon. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Holon -Energiekarte und fügen Sie sie an 1 Ihres Pokémons an. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía Holon y colóquela a 1 de su Pokémon. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta di energia holon e attaccalo a 1 del tuo Pokemon. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia Holon e anexe -o a 1 do seu Pokémon. Afaste seu baralho depois.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
