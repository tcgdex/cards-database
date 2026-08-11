import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [769],
	set: Set,

	name: {
		'en-us': "Sandygast",
		'fr-fr': "Bacabouh",
		'es-es': "Sandygast",
		'it-it': "Sandygast",
		'pt-br': "Sandygast",
		'de-de': "Sankabuh"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "If you build sand mounds when you're playing, destroy them before you go home, or they may get possessed and become Sandygast."
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Vibration",
			'fr-fr': "Vibration",
			'de-de': "Schwingung",
			'es-es': "Vibración",
			'pt-br': "Vibração",
			'it-it': "Vibrazione"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'de-de': "Spukschuss",
			'es-es': "Disparo Embrujado",
			'pt-br': "Tiro Assustador",
			'it-it': "Colpomistero"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582655,
				tcgplayer: 253311
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582655,
				tcgplayer: 253311
			}
		},
	],
}

export default card
