import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Pichu"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		en: "It is unskilled at storing electric power.\nAny kind of shock causes it to discharge\nenergy spontaneously."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Crackly Toss"
		},

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card