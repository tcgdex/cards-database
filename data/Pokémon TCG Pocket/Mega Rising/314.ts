import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Doduo",
		fr: "Doduo"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [84],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "A two-headed Pokémon that was discovered as a\nsudden mutation. It runs at a pace of over 60 miles\nper hour.",
		fr: "Ce Pokémon à deux têtes est le résultat d'une\\nsoudaine mutation. Il peut courir jusqu'à 100 km/h."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card