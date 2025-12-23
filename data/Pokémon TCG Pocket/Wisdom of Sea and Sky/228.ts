import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Nidoking",
		fr: "Nidoking"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [34],
	hp: 150,
	types: ["Darkness"],

	evolveFrom: {
		en: "Nidorino"
	},

	description: {
		en: "When it goes on a rampage, it's impossible to\ncontrol. But in the presence of a Nidoqueen it's\nlived with for a long time, Nidoking calms down.",
		fr: "Lorsqu'il s'énerve, il devient incontrôlable, mais il retrouve son calme face à Nidoqueen, sa compagne de longue date."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Poison Horn",
			fr: "Corne Empoisonnée"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card