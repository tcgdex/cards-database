import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [870],
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuu Nishida",

	description: {
		en: "The six of them work together as one Pokémon. Teamwork is also their battle strategy, and they constantly change their formation as they fight."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Invade",
			fr: "Envahissement",
			de: "Einmarschieren",
			es: "Invadir",
			pt: "Invadir",
			it: "Scorreria"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582783,
				tcgplayer: 253369
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582783,
				tcgplayer: 253369
			}
		},
	],
}

export default card
