import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Beautifly",
         ja: "美しい",
         fr: "Bien",
         de: "Schön",
         es: "Belleza",
         it: "Beauty",
         pt: "Beautifly",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [267],
      hp: 80,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Withering Dust",
            ja: "枯れのほこり",
            fr: "Poussière flétri",
            de: "Staub verdorrt",
            es: "Polvo fulminante",
            it: "Polvere appassita",
            pt: "Pó murmura",
          },
          effect: {
            en: "As long as Beautifly is in play, do not apply Resistance for all Active Pokémon.",
            ja: "Beautiflyが機能している限り、すべてのアクティブなポケモンに抵抗を適用しないでください。",
            fr: "Tant qu'il est en jeu, n'appliquez pas la résistance à tous les Pokémon actifs.",
            de: "Solange schön im Spiel ist, wenden Sie keinen Widerstand für alle aktiven Pokémon an.",
            es: "Mientras Beautifly esté en juego, no aplique resistencia para todos los Pokémon activos.",
            it: "Finché è in gioco benissimo, non applicare resistenza a tutti i Pokémon attivi.",
            pt: "Enquanto Beautifly estiver em jogo, não aplique resistência a todos os Pokémon ativos.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stun Spore",
            ja: "スタン胞子",
            fr: "Spored",
            de: "Stun Spore",
            es: "Espora",
            it: "Spora stordente",
            pt: "Esporo de atordoamento",
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
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Parallel Gain",
            ja: "並列ゲイン",
            fr: "Gain parallèle",
            de: "Parallelgewinn",
            es: "Ganancia paralela",
            it: "Guadagno parallelo",
            pt: "Ganho paralelo",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Pokemon, including Beautifly.",
            ja: "Beautiflyを含む各ポケモンから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon, y compris magnifique.",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer Pokémon, einschließlich schöner.",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon, incluido Beautifly.",
            it: "Rimuovi 1 contatore di danni da ciascuno dei tuoi Pokemon, incluso Beautifly.",
            pt: "Remova 1 contador de danos de cada um dos seus Pokémon, incluindo bela.",
          },
          damage: 50,
        },
      ],


};
