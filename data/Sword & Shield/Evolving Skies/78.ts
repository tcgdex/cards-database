import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Cutiefly",
		fr: "Bombydou",
		es: "Cutiefly",
		it: "Cutiefly",
		pt: "Cutiefly",
		de: "Wommel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			it: "Alabattito",
			pt: "Flap",
			de: "Flattern"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,

	description: {
		en: "An opponent’s aura can tell Cutiefly what that opponent’s next move will be. Then Cutiefly can glide around the attack and strike back."
	},

	dexId: [742]
}

export default card