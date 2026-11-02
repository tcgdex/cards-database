import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cleffa",
		de: "Pii"
	},

	illustrator: "Tika Matsuno",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [173],
	hp: 30,
	types: ["Psychic"],

	description: {
		en: "According to local rumors, Cleffa are often seen\nin places where shooting stars have fallen.",
		de: "Man erzählt sich, dass überall dort besonders häufig Pii anzutreffen seien, wo einst eine Sternschnuppe eingeschlagen ist."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Twinkly Call",
			de: "Funkelruf"
		},

		effect: {
			en: "Put a random Pokémon from your deck into your hand.",
			de: "Nimm 1 zufälliges Pokémon aus deinem Deck auf deine Hand."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card