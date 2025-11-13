import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cleffa",
		fr: "Mélo"
	},

	illustrator: "Orca",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen.",
		fr: "On dit qu'il apparaît souvent là où se sont écrasées des météorites."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Twinkly Call",
			fr: "Appel qui Brille"
		},

		effect: {
			en: "Put a random Pokémon from your deck into your hand.",
			fr: "Ajoutez au hasard un Pokémon de votre deck à votre main."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card