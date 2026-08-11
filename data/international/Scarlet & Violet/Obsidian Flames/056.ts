import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [656],
	set: Set,

	name: {
		'fr-fr': "Grenousse",
		'en-us': "Froakie",
		'es-es': "Froakie",
		'it-it': "Froakie",
		'pt-br': "Froakie",
		'de-de': "Froxy"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Bond d'Essai",
			'en-us': "Try Bouncing",
			'es-es': "Prueba Rebote",
			'it-it': "Balzoprova",
			'pt-br': "Tentativa Saltitante",
			'de-de': "Hüpfversuch"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 781857,
				tcgplayer: 509803,
				cardtrader: 255616
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 725136
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725136,
				tcgplayer: 509803,
				cardtrader: 255616
			}
		},
	],

	illustrator: "Atsuya Uki",

	
}

export default card
