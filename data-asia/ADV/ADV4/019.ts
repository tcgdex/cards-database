import {Card} from "../../../interfaces"
import Set from "../ADV4"

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
          cost: ["Fire"],
          name: {
            en: "Sunshine",
            ja: "サンシャイン",
            fr: "Soleil",
            de: "Sonnenschein",
            es: "Luz solar",
            it: "Luce del sole",
            pt: "Luz do sol",
          },
          effect: {
            en: "Search your discard pile for a Stadium card, show it to your opponent, and put it into your hand.",
            ja: "スタジアムカードを廃棄することを検索し、対戦相手に見せて、手に入れてください。",
            fr: "Recherchez votre tas de défausse pour une carte de stade, montrez-la à votre adversaire et mettez-la dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Stadionkarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand.",
            es: "Busque en su pila de descarte en busca de una tarjeta de estadio, muéstrela a su oponente y póngala en su mano.",
            it: "Cerca il tuo mucchio di scarti per una carta stadio, mostrala al tuo avversario e mettilo in mano.",
            pt: "Pesquise sua pilha de descarte por um cartão de estádio, mostre -o ao seu oponente e coloque -o em sua mão.",
          },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Sunburn",
            ja: "日焼け",
            fr: "Coup de soleil",
            de: "Sonnenbrand",
            es: "Bronceado",
            it: "Scottatura",
            pt: "Queimaduras solares",
          },
          effect: {
            en: "If High Pressure System is in play, the Defending Pokemon is now Burned.",
            ja: "高圧システムが再生されている場合、防御ポケモンが燃やされます。",
            fr: "Si le système à haute pression est en jeu, le Pokémon en défense est maintenant brûlé.",
            de: "Wenn das Hochdrucksystem im Spiel ist, wird das verteidigende Pokémon jetzt verbrannt.",
            es: "Si el sistema de alta presión está en juego, el Pokémon defensor ahora se quema.",
            it: "Se è in gioco un sistema ad alta pressione, il Pokemon in carica viene ora bruciato.",
            pt: "Se o sistema de alta pressão estiver em jogo, o pokemon atual agora está queimado.",
          },
          damage: 40,
        },
      ],

      retreat: 2,

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
