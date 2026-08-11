import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		'es-mx': "Snubbull",
		de: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [209],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		en: "In truth, it is a cowardly Pokémon. It growls eagerly in order to hide its fear from its opponent.",
	},

	illustrator: "Gapao",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857612,
				tcgplayer: 662228,
				cardtrader: 356820
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857612,
				tcgplayer: 662228,
				cardtrader: 356820
			}
		},
	],	
}

export default card
