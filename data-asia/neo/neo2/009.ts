import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Butterfree",
         ja: "蝶",
         fr: "Papillon",
         de: "Butterfree",
         es: "Libre de mantequilla",
         it: "Butterfree",
         pt: "Sem borboleta",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [12],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Magic Dust",
            ja: "魔法のほこり",
            fr: "Poussière magique",
            de: "Zauberstaub",
            es: "Polvo mágico",
            it: "Polvere magica",
            pt: "Poeira mágica",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱したり、麻痺したり、毒殺されたりします（あなたの選択）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant endormi, confus, paralysé ou empoisonné (votre choix).",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokémon jetzt entweder, verwirrt, gelähmt oder vergiftet (Ihre Wahl).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido, confundido, paralizado o envenenado (su elección).",
            it: "Capovolgi una moneta. Se le teste, il Pokemon in difesa ora è addormentato, confuso, paralizzato o avvelenato (la tua scelta).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está dormindo, confuso, paralisado ou envenenado (sua escolha).",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Hyper Reverse",
            ja: "ハイパーリバース",
            fr: "Hyper inversé",
            de: "Hyper umgekehrt",
            es: "Hiper reverso",
            it: "Iper inverso",
            pt: "Hiper reverso",
          },
          effect: {
            en: "Does 10 damage times the number of Energy attached to the Defending Pokemon. After doing damage, remove a number of damage counters from Butterfree equal to the amount of damage done to the Defending Pokemon (after applying Weakness and Resistance).",
            ja: "ディフェンディングポケモンに取り付けられたエネルギー数を10回ダメージします。損傷を行った後、防御ポケモンに与えられたダメージの量に等しいバタフリーから多数のダメージカウンターを除去します（脱力感と抵抗を適用した後）。",
            fr: "Fait 10 dégâts fois le nombre d'énergie attachée au Pokémon en défense. Après avoir causé des dommages, retirez un certain nombre de compteurs de dommages du papillon égal à la quantité de dommages causés au Pokémon en défense (après avoir appliqué une faiblesse et une résistance).",
            de: "Hat 10 Schadenszeiten die Anzahl der an das verteidigenden Pokémon angeschlossenen Energie. Entfernen Sie nach Schäden eine Reihe von Schadenszähnen von Schmetterlingen, gleich der Menge an Schäden, die dem verteidigenden Pokémon angerichtet wurden (nachdem sie Schwäche und Widerstand aufgetragen haben).",
            es: "Hace 10 tiempos de daño el número de energía unida al Pokémon defensor. Después de hacer daño, retire una serie de contadores de daño de ButterFree igual a la cantidad de daño causado al Pokémon defensor (después de aplicar debilidad y resistencia).",
            it: "Fa 10 danni volte il numero di energia collegata al Pokemon in difesa. Dopo aver fatto danni, rimuovere una serie di contatori di danno da Butterfree pari alla quantità di danni arrecati al Pokemon in difesa (dopo aver applicato la debolezza e la resistenza).",
            pt: "10 danos vezes o número de energia ligada ao pokemon defensor. Depois de causar danos, remova vários contadores de danos da isca de borboleta igual à quantidade de danos causados ao Pokémon defensor (após aplicar fraqueza e resistência).",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
