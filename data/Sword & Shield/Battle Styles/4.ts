import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cacnea",
		fr: "Cacnea",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		de: "Tuska"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Zzzt",
			fr: "Bzzz",
			es: "Bzzz",
			it: "Bzzz",
			pt: "Bzzz",
			de: "Piiieks"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card