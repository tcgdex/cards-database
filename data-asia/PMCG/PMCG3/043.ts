import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonite",
         ja: "ドラゴナイト",
         fr: "Dragonite",
         de: "Dragonit",
         es: "Dragón",
         it: "Dragonite",
         pt: "Dragonite",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [149],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Step In",
            ja: "ステップインします",
            fr: "Intervenir",
            de: "Eintreten",
            es: "Entrar",
            it: "Intervenire",
            pt: "Entrar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if Dragonite is on your Bench, you may switch it with your Active Pokmon.",
            ja: "ターン中に<em>（攻撃の前）</me>、ドラゴナイトがベンチにある場合、アクティブなポケモンに切り替えることができます。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </ym>, si Dragonite est sur votre banc, vous pouvez le changer avec votre Pokémon actif.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </me> Wenn sich Dragonit auf Ihrer Bank befindet, können Sie es mit Ihrem aktiven Pokémon wechseln.",
            es: "Una vez durante su turno <em> (antes de su ataque) </me>, si Dragonite está en su banco, puede cambiarlo con su Pokémon activo.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </es>, se Dragonite è in panchina, puoi cambiarlo con il tuo Pokemon attivo.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </mhe>, se o Dragonite estiver em seu banco, você poderá trocá -lo com seu Pokémon ativo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slam",
            ja: "スラム",
            fr: "Claquer",
            de: "Zuschlagen",
            es: "Golpe",
            it: "Sbattere",
            pt: "Slam",
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
          damage: None,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
