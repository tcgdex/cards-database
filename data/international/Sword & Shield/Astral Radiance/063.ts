import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [425],
	set: Set,

	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'es-es': "Drifloon",
		'it-it': "Drifloon",
		'pt-br': "Drifloon",
		'de-de': "Driftlon"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Triple Spin",
			'fr-fr': "Triple Tour",
			'es-es': "Triple Giro",
			'it-it': "Triploturbo",
			'pt-br': "Giro Triplo",
			'de-de': "Dreifachdreher"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×"
	}],

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
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Said to lure away young children and carry them off to the afterlife. Some whisper that Drifloon are formed of reincarnated human souls, but these rumors are as yet unconfirmed.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658637,
				tcgplayer: 272264
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658637,
				tcgplayer: 272264
			}
		},
	],
}

export default card
