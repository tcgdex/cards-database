import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
		es: "Cosmoem",
		it: "Cosmoem",
		de: "Cosmovum",
		'pt-br': "Cosmoem",
		ko: "코스모움"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Cosmog"
	},

	description: {
		en: "The king who ruled Alola in times of antiquity called it the \"cocoon of the stars\" and built an altar to worship it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stiffen"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −50 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card