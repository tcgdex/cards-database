import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Castform",
         ja: "castform",
         fr: "Casting",
         de: "Castform",
         es: "Castform",
         it: "Castform",
         pt: "Formulário de elenco",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [351],
      hp: 60,
      types: ["Colorless"],
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
            en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Shuffle Castform back into your deck.  You can't use more than 1 Temperamental Weather PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前）に（攻撃の前に）、晴れたキャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームを検索して、castFormで切り替えることができます。 （CastForm、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）シャッフルキャストフォームに戻ります。  1ターンを1ターン以上使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck pour Sunny Castform, Rain Castform ou Snow-Cloud Castform et le commuter avec Castform. (Toutes les cartes attachées à Castform, les compteurs de dégâts, les conditions spéciales et les effets sont désormais sur le nouveau Pokã © lun.) Repousser Castform dans votre deck.  Vous ne pouvez pas utiliser plus de 1 temps capricieux Poké-puissance à chaque tour.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Ihr Deck nach Sunny Castform, Rain Castform oder Snow Cloud Castform suchen und es mit Castform wechseln. (Alle Karten, die an Castform, Schadenszähler, besondere Bedingungen und Auswirkungen auf die neuen Poké Mons angeschlossen sind.) Shuffle Castform zurück in Ihr Deck.  Sie können nicht mehr als 1 temperamentvolles Wetter in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo la soleada castorm Castform, Rain CastForm o la nube de nubes y cambiarlo y cambiarlo con Castform. (Cualquier carta adjunta a Castform, contadores de daño, condiciones especiales y efectos en ello ahora están en el nuevo Poké Mon.) Archale CastForm de regreso a su mazo.  No puede usar más de 1 temperatura temperamental del clima Poké en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo Sunny Castform, Rain Castform o Snow-Cloud Caster e cambiarla con Castform. (Eventuali carte collegate a Cashform, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo Poké mon.) Shuffle Cast -Cast nel tuo mazzo.  Non è possibile utilizzare più di 1 meteo temperamentale poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar seu baralho por uma forma de fundição ensolarada, formas de fundição de chuva ou formas de fundição em nuvem de neve e trocá-la com formas de fundição. (Quaisquer cartões anexados à forma de fundição, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Shuffle Castform de volta ao seu baralho.  Você não pode usar mais de 1 clima temperamental Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Forecast",
            ja: "予報",
            fr: "Prévision",
            de: "Vorhersage",
            es: "Pronóstico",
            it: "Previsione",
            pt: "Previsão",
          },
          effect: {
            en: "Search your deck for a Stadium card and play it. Shuffle your deck afterward.",
            ja: "スタジアムカードを求めてデッキを検索してプレイしてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck pour une carte de stade et jouez-la. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Stadionkarte und spielen Sie sie. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una carta del estadio y juegue. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta dello stadio e gioca. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de estádio e jogue -a. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Extra Ball",
            ja: "余分なボール",
            fr: "Balle supplémentaire",
            de: "Zusätzlicher Ball",
            es: "Bola extra",
            it: "Palla extra",
            pt: "Bola extra",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 20 damage plus 20 more damage.",
            ja: "防御ポケモンがポケモンエクスの場合、この攻撃は20ダメージに20ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 20 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 20 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 20 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
