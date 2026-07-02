import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Bergmite",
		fr: "Grelaçon",
		es: "Bergmite",
		it: "Bergmite",
		pt: "Bergmite",
		de: "Arktip"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	illustrator: "kirisAki",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Tackle",
			de: "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Spinning Attack",
			de: "Rundumangriff"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "This Pokémon lives in areas of frigid cold. It secures itself to the back of an Avalugg by freezing its feet in place."
	},

	dexId: [712],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574068,
				tcgplayer: 246868
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574068,
				tcgplayer: 246868
			}
		},
	],
}

export default card
