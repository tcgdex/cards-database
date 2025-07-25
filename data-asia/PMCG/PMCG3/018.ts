import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Cloyster",
         ja: "クロイスター",
         fr: "Cloyster",
         de: "Cloyster",
         es: "Holgazán",
         it: "Cloyster",
         pt: "Cloyster",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [91],
      hp: 50,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Water"],
          name: {
            en: "Clamp",
            ja: "クランプ",
            fr: "Serrer",
            de: "Klemme",
            es: "Abrazadera",
            it: "MORSETTO",
            pt: "Grampo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, this attack does nothing (not even damage).",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, cette attaque ne fait rien (pas même de dégâts).",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, este ataque no hace nada (ni siquiera daño).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se le code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se caudas, esse ataque não faz nada (nem sequer dano).",
          },
          damage: 30,
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Spike Cannon",
            ja: "スパイクキャノン",
            fr: "Canon à pointe",
            de: "Spike -Kanone",
            es: "Cañón de espiga",
            it: "Cannone a spike",
            pt: "Canhão de spike",
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

        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
