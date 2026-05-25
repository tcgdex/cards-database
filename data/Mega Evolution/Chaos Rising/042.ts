import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886434,
				tcgplayer: 693563
			}
		},
	],

	name: {
		en: "Xerneas"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [716],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Geo Storm"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: 30,

		effect: {
			en: "This attack does 30 damage for each Psychic Energy attached to all of your Pokémon in play."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card