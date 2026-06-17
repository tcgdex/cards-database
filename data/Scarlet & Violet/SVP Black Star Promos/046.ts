import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		es: "Bulbasaur",
		it: "Bulbasaur",
		pt: "Bulbasaur",
		de: "Bisasam"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
			es: "Látigo Cepa",
			it: "Frustata",
			pt: "Chicote de Vinha",
			de: "Rankenhieb"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "OKACHEKE",
	description: {
		en: "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 720944,
				tcgplayer: 517271
			},
		}
	],
}

export default card
