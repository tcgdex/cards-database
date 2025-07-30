import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		fr: "Mustébouée",
		en: "Buizel",
		es: "Buizel",
		it: "Buizel",
		pt: "Buizel",
		de: "Bamelin"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Pluie Éclaboussante",
			en: "Rain Splash",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
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
		en: "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on."
	},

	thirdParty: {
		cardmarket: 539133,
		tcgplayer: 232418
	}
}

export default card
