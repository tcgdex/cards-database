import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Golem",
		fr: "Grolem"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [76],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch"
	},

	description: {
		en: "When Golem grow old, they stop shedding their\nshells. Those that have lived a long, long time\nhave shells green with moss.",
		fr: "Lorsqu'il arrive à un âge avancé, il arrête de muer.\\nUn Grolem ayant vécu très longtemps est recouvert\\nde mousse verte."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 30 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-blaziken"]
}

export default card