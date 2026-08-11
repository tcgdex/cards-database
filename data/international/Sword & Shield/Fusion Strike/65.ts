import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [366],
	set: Set,

	name: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
		'es-es': "Clamperl",
		'it-it': "Clamperl",
		'pt-br': "Clamperl",
		'de-de': "Perlu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "Clamperl's pearls are exceedingly precious. They can be more than 10 times as costly as Shellder's pearls."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Bursting Bubble",
			'fr-fr': "Bulle Éclatante",
			'de-de': "Platzende Blase",
			'es-es': "Burbuja Explosiva",
			'pt-br': "Estouro de Bolha",
			'it-it': "Scoppiobolla"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582199,
				tcgplayer: 253208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582199,
				tcgplayer: 253208
			}
		},
	],
}

export default card
