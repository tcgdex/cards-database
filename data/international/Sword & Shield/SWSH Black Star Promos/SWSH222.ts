import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		'fr-fr': "Moustillon",
		'de-de': "Ottaro",
		'es-es': "Oshawott",
		'pt-br': "Oshawott",
		'it-it': "Oshawott",
		'en-us': "Oshawott"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'it-it': "Battuta",
			'en-us': "Beat"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name \"scalchop.\""
	},

	thirdParty: {
		cardmarket: 609468
	}
}

export default card
