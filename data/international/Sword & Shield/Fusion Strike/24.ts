import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [829],
	set: Set,

	name: {
		'en-us': "Gossifleur",
		'fr-fr': "Tournicoton",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Leafage",
			'fr-fr': "Feuillage",
			'de-de': "Blattwerk",
			'es-es': "Follaje",
			'pt-br': "Folhagem",
			'it-it': "Fogliame"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582089,
				tcgplayer: 253115
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582089,
				tcgplayer: 253115
			}
		},
	],
}

export default card
