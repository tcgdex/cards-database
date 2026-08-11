import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [546],
	set: Set,

	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fickle Attack",
			'fr-fr': "Attaque Inconstante",
			'es-es': "Ataque Impredecible",
			'it-it': "Attacco Bislacco",
			'pt-br': "Ataque Errático",
			'de-de': "Launischer Angriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751571,
				tcgplayer: 534180,
				cardtrader: 274218
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751571,
				tcgplayer: 534180,
				cardtrader: 274218
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "Weaving together the cotton of both Cottonee and Eldegoss produces exquisite cloth that's highly prized by many luxury brands.",
	},

}

export default card
