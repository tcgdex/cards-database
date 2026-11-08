import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'fr-fr': "Darumarond",
		'en-us': "Darumaka",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Attaque Surprise",
			'en-us': "Surprise Attack",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This popular symbol of good fortune will never fall over in its sleep, no matter how it's pushed or pulled.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725114,
				tcgplayer: 509733,
				cardtrader: 255594
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725114,
				tcgplayer: 509733,
				cardtrader: 255594
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
