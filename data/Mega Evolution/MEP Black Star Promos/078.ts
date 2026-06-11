import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	illustrator: "Mina Nakai",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [848],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Call for Family"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Playful Kick"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 694692
			}
		}
	]
}

export default card
