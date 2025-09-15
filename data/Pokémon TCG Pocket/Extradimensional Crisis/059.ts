import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Oranguru",
		fr: "Gouroutan"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "It normally spends its time meditating in the\ntreetops. It throws Poké Balls and gives other\nPokémon orders as it pleases.",
		fr: "Il médite généralement en haut des arbres. Il se permet de lancer des Poké Balls sur les autres Pokémon et leur donne des ordres."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card