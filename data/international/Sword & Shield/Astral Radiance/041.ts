import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		'en-us': "Oshawott",
		'fr-fr': "Moustillon",
		'es-es': "Oshawott",
		'it-it': "Oshawott",
		'pt-br': "Oshawott",
		'de-de': "Ottaro"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
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
		'en-us': "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name \"scalchop.\".",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658578,
				tcgplayer: 272241
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658578,
				tcgplayer: 272241
			}
		},
	],
}

export default card
