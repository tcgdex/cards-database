import {Card} from "../../../interfaces"
import Set from "../PCG6"

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

      rarity: "Rare",
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
            en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前）に（攻撃の前に）、晴れたキャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームを検索して、castFormで切り替えることができます。 （CastForm、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。）シャッフルキャストフォームに戻ります。 1ターンを1ターン以上使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck pour Sunny Castform, Rain Castform ou Snow-Cloud Castform et le commuter avec Castform. (Toutes les cartes attachées à Castform, les compteurs de dégâts, les conditions spéciales et les effets sont désormais sur le nouveau Pokã © lun.) Repousser Castform dans votre deck. Vous ne pouvez pas utiliser plus de 1 temps capricieux Poké-puissance à chaque tour.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Ihr Deck nach Sunny Castform, Rain Castform oder Snow Cloud Castform suchen und es mit Castform wechseln. (Alle Karten, die an Castform, Schadenszähler, besondere Bedingungen und Auswirkungen auf die neuen Poké Mons angeschlossen sind.) Shuffle Castform zurück in Ihr Deck. Sie können nicht mehr als 1 temperamentvolles Wetter in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo la soleada castorm Castform, Rain CastForm o la nube de nubes y cambiarlo y cambiarlo con Castform. (Cualquier carta adjunta a Castform, contadores de daño, condiciones especiales y efectos en ello ahora están en el nuevo Poké Mon.) Archale CastForm de regreso a su mazo. No puede usar más de 1 temperatura temperamental del clima Poké en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo Sunny Castform, Rain Castform o Snow-Cloud Caster e cambiarla con Castform. (Eventuali carte collegate a Cashform, contatori di danni, condizioni speciali ed effetti su di esso sono ora sul nuovo Poké mon.) Shuffle Cast -Cast nel tuo mazzo. Non è possibile utilizzare più di 1 meteo temperamentale poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode procurar seu baralho por uma forma de fundição ensolarada, formas de fundição de chuva ou formas de fundição em nuvem de neve e trocá-la com formas de fundição. (Quaisquer cartões anexados à forma de fundição, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Shuffle Castform de volta ao seu baralho. Você não pode usar mais de 1 clima temperamental Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Holon Draw",
            ja: "ホロンドロー",
            fr: "Holon Draw",
            de: "Holon Draw",
            es: "Holon Draw",
            it: "Drano holon",
            pt: "Draw Holon",
          },
          effect: {
            en: "Draw a card. If Castform has any Holon Energy cards attached to it, draw 2 more cards.",
            ja: "カードを描きます。 CastFormにHolon Energy Cardsが接続されている場合は、さらに2枚のカードを描画します。",
            fr: "Dessinez une carte. Si Castform a des cartes d'énergie Holon attachées, dessinez 2 cartes supplémentaires.",
            de: "Zeichnen Sie eine Karte. Wenn Castform irgendwelche Holon Energy -Karten befindet, zeichnen Sie 2 weitere Karten.",
            es: "Dibuja una carta. Si Castform tiene alguna tarjetas de energía Holon unidas, dibuje 2 cartas más.",
            it: "Disegna una carta. Se CastForm ha delle carte Holon Energy collegate ad esso, disegna altre 2 carte.",
            pt: "Desenhe uma carta. Se o Castform tiver algum cartão de energia Holon anexado a ele, desenhe mais 2 cartas.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
