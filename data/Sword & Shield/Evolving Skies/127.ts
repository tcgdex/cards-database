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
		en: "Ursaring",
		fr: "Ursaring",
		es: "Ursaring",
		it: "Ursaring",
		pt: "Ursaring",
		de: "Ursaring"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "Hasegawa Saki",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Slash",
			de: "Schlitzer"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Whap Down",
			fr: "Assommer",
			es: "Zurrar",
			it: "Bastonata",
			pt: "Whap Down",
			de: "Verdreschen"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [217],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa",
		es: "Teddiursa",
		it: "Teddiursa",
		pt: "Teddiursa",
		de: "Teddiursa"
	},

	description: {
		en: "Although it has a large body, it is quite skilled at climbing trees. It eats and sleeps in the treetops."
	},

	regulationMark: "E"
}

export default card