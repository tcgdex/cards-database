import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [846],
	set: Set,

	name: {
		fr: "Embrochet",
		en: "Arrokuda",
		es: "Arrokuda",
		it: "Arrokuda",
		pt: "Arrokuda",
		de: "Pikuda"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
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
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	thirdParty: {
		cardmarket: 539543
	}
}

export default card
