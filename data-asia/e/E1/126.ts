import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite - 126/128",
         ja: "ドラゴナイト-126/128",
         fr: "Dragonite - 126/128",
         de: "Dragonit - 126/128",
         es: "Dragonite - 126/128",
         it: "Dragonite - 126/128",
         pt: "Dragonite - 126/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Tailwind",
            ja: "追い風",
            fr: "Vent arrière",
            de: "Rückenwind",
            es: "Viento de cola",
            it: "Vento di coda",
            pt: "Tailwind",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Dragonite is on your Bench, you may reduce your Active Pokmon's Retreat Cost to 0.",
            ja: "ターン中に<em>（攻撃の前）</me> </me>、ドラゴナイトがベンチにある場合、アクティブなポケモンリトリートコストを0に削減できます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </ym>, si Dragonite est sur votre banc, vous pouvez réduire votre coût actif de retraite Pokémon à 0.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </me>, wenn sich Dragonit auf Ihrer Bank befindet, können Sie Ihre aktiven Pokemon -Rückzugskosten auf 0 senken.",
            es: "Una vez durante su turno <em> (antes de su ataque) </me>, si Dragonite está en su banco, puede reducir su costo activo de retiro de Pokémon a 0.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </es>, se Dragonite è in panchina, puoi ridurre il costo di ritiro di Pokemon attivo a 0.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </me>, se a Dragonite estiver em seu banco, você poderá reduzir o custo ativo do retiro de Pokemon para 0.",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Water", "Fighting"],
          name: {
            en: "Dragon Tail",
            ja: "ドラゴンテール",
            fr: "Queue de dragon",
            de: "Drachenschwanz",
            es: "Cola de dragón",
            it: "Dragon Tail",
            pt: "Cauda de dragão",
          },
          effect: {
            en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Flip 2 pièces. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 40 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 40 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

};
