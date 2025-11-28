import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Frogadier",
		fr: "Croâporal"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",

	dexId: [657],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie"
	},

	description: {
		en: "It can throw bubble-covered pebbles with precise\ncontrol, hitting empty cans up to a hundred feet away.",
		fr: "Il est capable de lancer des pierres recouvertes de mousse avec une précision suffisante pour toucher une canette vide à 30 m."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Water Drip",
			fr: "Goutte à Goutte"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card