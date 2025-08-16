import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [686],
	set: Set,

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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "By exposing foes to the blinking of its luminescent spots, Inkay demoralizes them, and then it seizes the chance to flee."
	},

	thirdParty: {
		cardmarket: 567177,
		tcgplayer: 241730
	}
}

export default card