import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Misdreavus",
		fr: "Feuforêve",
		es: "Misdreavus",
		'es-mx': "Misdreavus",
		de: "Traunfugil",
		it: "Misdreavus",
		pt: "Misdreavus"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [200],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Petty Grudge",
			fr: "Rancune Mesquine",
			es: "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			de: "Mini-Groll",
			it: "Rancormeschino",
			pt: "Rancinho"
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
	regulationMark: "I",

	description: {
		en: "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
	},

	illustrator: "Mousho",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857610,
				tcgplayer: 662198,
				cardtrader: 356818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857610,
				tcgplayer: 662198,
				cardtrader: 356818
			}
		},
	],
}

export default card
