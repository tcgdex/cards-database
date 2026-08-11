import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [863],

	name: {
		'en-us': "Galarian Perrserker",
		'fr-fr': "Berserkatt de Galar",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Claw Dagger",
				'fr-fr': "Griffe Dague",
				'es-es': "Puñal Garras",
				'it-it': "Dagartiglio",
				'pt-br': "Garra de Adaga",
				'de-de': "Klauendolch"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458033,
				tcgplayer: 213223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458033,
				tcgplayer: 213223
			}
		},
	],
}

export default card
