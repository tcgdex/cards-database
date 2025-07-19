import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Snow-cloud Castform",
         ja: "スノークラウドキャストフォーム",
         fr: "Castform à neige",
         de: "Schneewolkenkaste",
         es: "Forma de nube de nubes",
         it: "Forma di cast di cloud di neve",
         pt: "Formulário de elenco da nuvem de neve",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [351],
      hp: 70,
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
            en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new PokÃ©mon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather PokÃ©-Power each turn.",
            ja: "ターン中（攻撃の前に）一度（攻撃の前）、キャストフォーム、雨のキャストフォーム、またはサニーキャストフォームを検索し、Snow-Cloud Castformで切り替えることができます。 （Snow-Cloud Castform、ダメージカウンター、特別な条件、およびそれに対する影響に取り付けられたカードは、現在、新しいPokã©Mon。にあります。）シャッフルスノークラウドキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
            fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez rechercher votre deck pour Castform, Rain Castform ou Sunny CastForm et le commuter avec Castform Snow-Cloud. (Toutes les cartes attachées à la forme de cast-cloud enneigée, les comptoirs de dégâts, les conditions spéciales et les effets sont maintenant sur le nouveau pokã © lun). Vous ne pouvez pas utiliser plus de 1 temps capricieux Poké-puissance à chaque tour.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff) können Sie Ihr Deck nach Castform, Rain Castform oder Sunny Castform suchen und es mit Schneewolken-Gussform schalten. (Alle Karten, die mit Schneewolken-Gussform, Schadenserzähnen, besonderen Bedingungen und Auswirkungen auf die neuen Poké Mon Mons verbunden sind.) Shuffle Snow Cloud Castform zurück in Ihr Deck. Sie können nicht mehr als 1 temperamentvolles Wetter in jeder Runde verwenden.",
            es: "Una vez durante su turno (antes de su ataque), puede buscar en su mazo en su mazo, Castform, Rain Castform o Sunny Castform y cambiarlo con Castform Castform. (Cualquier carta adjunta a la nube de nubes, contadores de daño, condiciones especiales y efectos sobre ella ahora están en el nuevo Poké Mon.) Archule la nube de nieve Castform de regreso a su mazo. No puede usar más de 1 temperatura temperamental del clima Poké en cada turno.",
            it: "Una volta durante il tuo turno (prima del tuo attacco), puoi cercare nel tuo mazzo per Castform, Rain Castform o Sunny Castform e cambiarla con Cashform Cast-Cloud. (Eventuali carte attaccate alla forma di cast di cloud di neve, contatori di danni, condizioni speciali ed effetti su di essa sono ora sul nuovo poké mon.) Shuffle Snow-Cloud Cast di nuovo nel tuo mazzo. Non è possibile utilizzare più di 1 meteo temperamentale poké-power ogni turno.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), você pode pesquisar no seu baralho em busca de moldes, formas de fundição de chuva ou formas de fundição ensolaradas e trocá-la com a forma de fundição da nuvem de neve. (Quaisquer cartões anexados à forma de fundição da nuvem de neve, contadores de danos, condições especiais e efeitos nela estão agora no novo Poké Mon.) Shuffle Snow Cloud FormFform de volta ao seu baralho. Você não pode usar mais de 1 clima temperamental Poké-Power a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Holon Blizzard",
            ja: "ホロンブリザード",
            fr: "Holon Blizzard",
            de: "Holon Blizzard",
            es: "Holon Blizzard",
            it: "Blizzard Holon",
            pt: "Holon Blizzard",
          },
          effect: {
            en: "If Snow-cloud Castform has any Holon Energy cards attached to it, this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Snow-Cloud CastformにHolon Energy Cardsが取り付けられている場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si Snow-Cloud Castform a des cartes d'énergie Holon qui y sont attachées, cette attaque fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Schnee-Cloud-Castform in Holon Energy-Karten befestigt ist, schadet dieser Angriff 10 Schäden an den Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si CastForm de nubes de nieve tiene alguna carta de energía Holon unidas, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se la Cashform di Snow-Cloud ha delle carte di energia Holon attaccate, questo attacco fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se a forma de elenco da nuvem de neve tiver algum cartão de energia de Holon anexado a ele, esse ataque causará 10 danos a cada um dos pokemon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
