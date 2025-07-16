import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Beedrill",
         ja: "beedrill",
         fr: "Beedrill",
         de: "Beedrill",
         es: "Beedrill",
         it: "Beedrill",
         pt: "Beedrill",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [15],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Twineedle",
            ja: "Twineedle",
            fr: "Fidèle",
            de: "Schnurren",
            es: "Twineedle",
            it: "Spago",
            pt: "BURADO",
          },
          effect: {
            en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
            fr: "Flip 2 pièces. Cette attaque fait 30 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 30 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 30 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 30 danni volte al numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 30 danos vezes o número de cabeças.",
          },
          damage: None,
        },
        {
          cost: ["Grass", "Grass", "Grass"],
          name: {
            en: "Poison Sting",
            ja: "毒物",
            fr: "Piqûre de poison",
            de: "Giftstich",
            es: "Picadura de veneno",
            it: "Sting veleno",
            pt: "Picada de veneno",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 40,
        },
      ],


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
