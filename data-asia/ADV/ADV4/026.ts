import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Rain Castform",
         ja: "雨のキャストフォーム",
         fr: "Rain Castform",
         de: "Regenguss",
         es: "Forma de fundición de lluvia",
         it: "Forma di pioggia",
         pt: "Formulário de fundição de chuva",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [351],
      hp: 60,
      types: ["Water"],
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
            en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、サニーキャストフォーム、またはスノークラウドのキャストフォームを検索し、雨のキャストフォームで切り替えることができます。 （Rainキャストフォーム、ダメージカウンター、特別な条件、およびその影響に取り付けられたカードは、新しいPokã©Mon。）シャッフルレインキャストフォームにデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck pour Castform, Sunny Castform ou Snow-Cloud Castform et le commuter avec Rain Castform. (Toutes les cartes attachées à Rain Castform, les compteurs de dégâts, les conditions spéciales et les effets à ce sujet sont maintenant sur le nouveau Pokén. Vous ne pouvez pas utiliser plus de 1 temps capricieux Poké-puissance à chaque tour.",
            de: "Sobald Sie während Ihres Zuges (vor Ihrem Angriff) sind, können Sie Ihr Deck nach Castform, Sunny Castform oder Snow Cloud Castform suchen und es mit Regen Castform wechseln. (Alle Karten, die an Regengegossen, Schadenszähler, besonderen Bedingungen und Auswirkungen auf die neuen Poké Mons sind.) Shuffle Rain Castform zurück in Ihr Deck. Sie können nicht mehr als 1 temperamentvolles Wetter in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo en su mazo, Castform, Sunny Castform o Snow-Cloud Castform y cambiarlo con Rain Castform. (Cualquier carta adjunta a la forma de fundición de lluvia, contadores de daño, condiciones especiales y efectos sobre ella ahora están en el nuevo Poké Mon.) Shuffle Rain Castform de nuevo en su mazo. No puede usar más de 1 temperatura temperamental del clima Poké en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo per Castform, Sunny Castform o Snow-Cloud Caster e cambiarlo con Rain Castform. (Eventuali carte collegate alla forma della cast di pioggia, contatori di danni, condizioni speciali ed effetti su di essa sono ora sul nuovo poké mon.) Shuffle Rain Cast di nuovo nel tuo mazzo. Non è possibile utilizzare più di 1 meteo temperamentale poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho em busca de moldes, formas de fundição ensolarada ou forma de fundição em nuvem de neve e trocá-la com formas de fundição de chuva. (Quaisquer cartões anexados à forma de fundição de chuva, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Shuffle Rain Form de volta ao seu deck. Você não pode usar mais de 1 clima temperamental Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Scattered Shower",
            ja: "散らばったシャワー",
            fr: "Douche dispersée",
            de: "Verstreute Dusche",
            es: "Ducha dispersa",
            it: "Doccia sparsa",
            pt: "Chuveiro espalhado",
          },
          effect: {
            en: "Shuffle your hand into your deck. Draw up to 5 cards.",
            ja: "あなたの手をあなたのデッキにシャッフルします。最大5枚のカードを作成します。",
            fr: "Vous mélanger votre main dans votre deck. Dessinez jusqu'à 5 cartes.",
            de: "Mischen Sie Ihre Hand in Ihr Deck. Zeichnen Sie bis zu 5 Karten.",
            es: "Arrastra tu mano en tu mazo. Dibuje hasta 5 cartas.",
            it: "Shuffle la tua mano nel mazzo. Disegna fino a 5 carte.",
            pt: "Arraste sua mão em seu baralho. Desenhe até 5 cartas.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rainy Day Blues",
            ja: "雨の日の青",
            fr: "Blues du jour de la pluie",
            de: "Regnerischer Tag Blues",
            es: "Blues de día lluvioso",
            it: "Rainy Day Blues",
            pt: "Blues do dia chuvoso",
          },
          effect: {
            en: "If Low Pressure System is in play, the Defending Pokemon is now Confused.",
            ja: "低圧システムが機能している場合、防御ポケモンは混乱しています。",
            fr: "Si le système de basse pression est en jeu, le Pokémon en défense est désormais confus.",
            de: "Wenn das Niederdrucksystem im Spiel ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si el sistema de baja presión está en juego, el Pokémon defensor ahora está confundido.",
            it: "Se è in gioco un sistema a bassa pressione, il Pokemon in difesa è ora confuso.",
            pt: "Se o sistema de baixa pressão estiver em jogo, o Pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
