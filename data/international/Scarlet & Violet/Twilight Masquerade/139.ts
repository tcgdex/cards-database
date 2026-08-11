import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [580],
	set: Set,

	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Double Draw",
			'fr-fr': "Double Pioche",
			'es-es': "Roba Doble",
			'it-it': "Pescata Doppia",
			'pt-br': "Compra Dupla",
			'de-de': "Zweifachzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante",
			'de-de': "Rasierflügel"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It strengthens its body by diving into the depths of ponds, swimming around while looking for bog moss to eat.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769313,
				tcgplayer: 550183
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769313,
				tcgplayer: 550183
			}
		},
	],

	illustrator: "Shibuzoh.",

}

export default card