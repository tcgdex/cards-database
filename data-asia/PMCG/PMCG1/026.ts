import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Starmie",
         ja: "スターミー",
         fr: "Starmie",
         de: "Starmie",
         es: "Páramo",
         it: "Starmie",
         pt: "Starmie",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [121],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Recover",
            ja: "回復する",
            fr: "Récupérer",
            de: "Genesen",
            es: "Recuperar",
            it: "Recuperare",
            pt: "Recuperar",
          },
          effect: {
            en: "Discard 1 Water Energy card attached to Starmie in order to use this attack. Remove all damage counters from Starmie.",
            ja: "この攻撃を使用するために、スターミーに取り付けられた1つの水エネルギーカードを捨てます。 Starmieからすべてのダメージカウンターを削除します。",
            fr: "Jetez 1 carte d'énergie d'eau attachée à Starmie afin d'utiliser cette attaque. Retirez tous les compteurs de dégâts de Starmie.",
            de: "Legen Sie die an Starmie befestigte Wasserergiekarte ab, um diesen Angriff zu verwenden. Entfernen Sie alle Schadenszähler von Starmie.",
            es: "Deseche 1 tarjeta de energía de agua unida a Starmie para usar este ataque. Retire todos los contadores de daño de Starmie.",
            it: "Scartare 1 carta di energia idrica attaccata a Starmie per usare questo attacco. Rimuovere tutti i contatori di danno da Starmie.",
            pt: "Descarte 1 cartão de energia da água anexada a Starmie para usar esse ataque. Remova todos os contadores de danos da Starmie.",
          },
          damage: None,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Star Freeze",
            ja: "星の凍結",
            fr: "Gel des étoiles",
            de: "Sternfrieren",
            es: "Freeze de estrellas",
            it: "Freeze a stella",
            pt: "Congelamento de estrelas",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
