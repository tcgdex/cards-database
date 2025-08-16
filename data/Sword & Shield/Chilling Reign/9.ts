import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [459],
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		es: "Snover",
		it: "Snover",
		pt: "Snover",
		de: "Shnebedeck"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Whap Down",
			fr: "Assommer",
			es: "Zurrar",
			it: "Bastonata",
			pt: "Golpe Ligeiro",
			de: "Verdreschen"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
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
	},

	stage: "Basic",

	description: {
		en: "The berries that grow around its belly are like ice pops. Galarian Darumaka absolutely love these berries."
	},

	thirdParty: {
		cardmarket: 567089,
		tcgplayer: 241658
	}
}

export default card