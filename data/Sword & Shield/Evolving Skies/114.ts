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
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Akira Komayama",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Bite",
			de: "Biss"
		},

		damage: 40,
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud'Boule",
			es: "Cabezazo Dragón",
			it: "Dragozuccata",
			pt: "Dragon Headbutt",
			de: "Drachen-Kopfnuss"
		},

		damage: 100,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 2,
	dexId: [634],

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
		es: "Deino",
		it: "Deino",
		pt: "Deino",
		de: "Kapuno"
	},

	description: {
		en: "Their two heads will fight each other over a single piece of food. Zweilous are covered in scars even without battling others."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574162,
		tcgplayer: 246912
	}
}

export default card
