import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [686],
	set: Set,
	cameoDexIds: [241],

	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		it: "Inkay",
		pt: "Inkay",
		de: "Iscalar"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			it: "Attacco Rotante",
			pt: "Ataque Giratório",
			de: "Rundumangriff"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		en: "By exposing foes to the blinking of its luminescent spots, Inkay demoralizes them, and then it seizes the chance to flee.",
		de: "Es lässt die Punkte auf seinem Körper blinken, um Gegnern den Kampfeswillen zu rauben. Diesen Moment nutzt es dann, um zu fliehen."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567177,
				tcgplayer: 241730
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567177,
				tcgplayer: 241730
			}
		},
	],
}

export default card
