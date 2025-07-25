import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Miltank",
         ja: "ミルタンク",
         fr: "Miltan",
         de: "Miltank",
         es: "Miltaquero",
         it: "Miltank",
         pt: "Miltank",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [241],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Thick Fat",
            ja: "厚い脂肪",
            fr: "Graisse épaisse",
            de: "Dickes Fett",
            es: "Grasa gruesa",
            it: "Grasso spesso",
            pt: "Gordura espessa",
          },
          effect: {
            en: "Any damage done to Miltank by attacks from Fire PokÃ©mon and Water PokÃ©mon is reduced by 30 (after applying Weakness and Resistance).",
            ja: "FirePokã©MonとWaterPokã©Monからの攻撃によるMiltankに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à Miltank par des attaques de Fire Pokã © Mon et de l'eau Poké est réduite de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden, die Miltank durch Angriffe von FIRE POKé Mon Mon und Water Poké Mon mon angerichtet haben, wird um 30 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño hecho a Miltank por ataques del fuego Poké Mon y Water Poké Mon se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Miltank dagli attacchi dal fuoco di POKSE e l'acqua poké -mon è ridotto di 30 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Miltank por ataques de incêndio Poké e Poké Mon é reduzido em 30 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Healing Milk",
            ja: "ヒーリングミルク",
            fr: "Lait de guérison",
            de: "Milch heilen",
            es: "Leche curativa",
            it: "Latte curativo",
            pt: "Leite curativo",
          },
          effect: {
            en: "Flip 2 coins. For each heads, remove 2 damage counters from 1 of your Pokemon.",
            ja: "2つのコインをフリップします。各ヘッドについて、ポケモンの1つから2つのダメージカウンターを削除します。",
            fr: "Flip 2 pièces. Pour chaque tête, retirez 2 compteurs de dégâts de 1 de votre Pokémon.",
            de: "2 Münzen umdrehen. Entfernen Sie für jede Köpfe 2 Schadenszähler von 1 Ihres Pokémon.",
            es: "Flip 2 monedas. Para cada cabezal, retire 2 contadores de daño de 1 de su Pokémon.",
            it: "Flip 2 monete. Per ogni testa, rimuovere 2 contatori di danno da 1 del tuo Pokemon.",
            pt: "Flip 2 moedas. Para cada cabeça, remova 2 contadores de danos de 1 do seu Pokémon.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
