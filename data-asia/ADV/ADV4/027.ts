import {Card} from "../../../interfaces"
import Set from "../ADV4"

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
          cost: ["Water"],
          name: {
            en: "Flurries",
            ja: "飛び回る",
            fr: "Rafale",
            de: "Flurries",
            es: "Ráfos",
            it: "Fluries",
            pt: "FLURES",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、防御ポケモンは今眠っています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, il Pokemon in difesa ora dorme.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se as caudas, o pokemon defensor agora está dormindo.",
          },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "White Snow",
            ja: "白い雪",
            fr: "Neige blanche",
            de: "Weißer Schnee",
            es: "Nieve blanca",
            it: "Neve bianca",
            pt: "Neve branca",
          },
          effect: {
            en: "If Magnetic Storm is in play, this attack does 50 damage plus 20 more damage.",
            ja: "磁気嵐が発生している場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
            fr: "Si la tempête magnétique est en jeu, cette attaque fait 50 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn Magnetsturm im Spiel ist, verursacht dieser Angriff 50 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si la tormenta magnética está en juego, este ataque hace 50 daños más 20 más de daño.",
            it: "Se la tempesta magnetica è in gioco, questo attacco infligge 50 danni più 20 danni in più.",
            pt: "Se a tempestade magnética estiver em jogo, esse ataque causa 50 danos mais 20 mais danos.",
          },
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
