import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Haunter",
         ja: "ハンター",
         fr: "Hancher",
         de: "Haunter",
         es: "Perseguidor",
         it: "Haunter",
         pt: "Assombro",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [93],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Head Trip",
            ja: "ヘッドトリップ",
            fr: "Voyage en tête",
            de: "Kopfreise",
            es: "Viaje",
            it: "Viaggio di testa",
            pt: "Viagem da cabeça",
          },
          effect: {
            en: "Once during your turn (before your attack), if Haunter is on your Bench, you may use this power. One of your Active PokÃ©mon is now Confused.",
            ja: "ターン中（攻撃の前に）一度、Haunterがベンチにいる場合は、このパワーを使用できます。あなたのアクティブなポカンの1つが混乱しています。",
            fr: "Une fois pendant votre tour (avant votre attaque), si Haunter est sur votre banc, vous pouvez utiliser cette puissance. L'un de vos poké actifs est maintenant confus.",
            de: "Einmal in Ihrem Zug (vor Ihrem Angriff), wenn Hauntter auf Ihrer Bank ist, können Sie diese Kraft verwenden. Einer Ihrer aktiven Pokémon ist jetzt verwirrt.",
            es: "Una vez durante su turno (antes de su ataque), si Haunter está en su banco, puede usar este poder. Uno de sus Poké Mon activo ahora está confundido.",
            it: "Una volta durante il tuo turno (prima dell'attacco), se Haunter è in panchina, puoi usare questo potere. Uno dei tuoi poké attivo è ora confuso.",
            pt: "Uma vez durante o seu turno (antes do seu ataque), se o assombro estiver em seu banco, você poderá usar esse poder. Um dos seus pontos ativos agora está confuso.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Confuse Ray",
            ja: "レイを混乱させます",
            fr: "Confondre Ray",
            de: "Verwirrung Ray",
            es: "Confundir a ray",
            it: "Confondere il raggio",
            pt: "Confunda Ray",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
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
