import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [396],
	set: Set,

	name: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	illustrator: "Ligton",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Claw",
			'fr-fr': "Ergots",
			'es-es': "Garra",
			'it-it': "Artiglio",
			'pt-br': "Garra",
			'de-de': "Klaue"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
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
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691829,
				tcgplayer: 478137
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691829,
				tcgplayer: 478137
			}
		},
	],
}

export default card
