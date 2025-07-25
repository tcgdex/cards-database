import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Dragonair",
         ja: "ドラゴンエア",
         fr: "Dragonaire",
         de: "Dragonair",
         es: "Dragón",
         it: "Dragonair",
         pt: "Dragonair",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [148],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Dazzle Blast",
            ja: "眩しい爆発",
            fr: "Explosion d'éblouissement",
            de: "Blende Explosion",
            es: "Explosión deslumbrante",
            it: "Esplosione abbagliante",
            pt: "Dazzle Blast",
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
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Healing Wave",
            ja: "癒しの波",
            fr: "Vague de guérison",
            de: "Heilwelle",
            es: "Ola de curación",
            it: "Onda di guarigione",
            pt: "Onda de cura",
          },
          effect: {
            en: "Remove 1 damage counter from each of your Active Pokemon.",
            ja: "アクティブなポケモンのそれぞれから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de chacun de vos Pokémon actifs.",
            de: "Entfernen Sie 1 Schadenschalter von jedem Ihrer aktiven Pokémon.",
            es: "Retire 1 contador de daño de cada uno de sus Pokémon activos.",
            it: "Rimuovi 1 contatore di danni da ciascuno dei Pokemon attivi.",
            pt: "Remova 1 contador de danos de cada um dos seus Pokémon ativos.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
