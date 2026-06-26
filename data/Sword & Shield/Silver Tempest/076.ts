import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		en: "Solosis",
		fr: "Nucléos",
		es: "Solosis",
		it: "Solosis",
		pt: "Solosis",
		de: "Monozyto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "It communicates with others telepathically. Its body is encapsulated in liquid, but if it takes a heavy blow, the liquid will leak out.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682123,
				tcgplayer: 451730
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682123,
				tcgplayer: 451730
			}
		},
	],
}

export default card
