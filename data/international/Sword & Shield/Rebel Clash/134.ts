import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [680],

	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
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

			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Double Slash",
				'fr-fr': "Double Lame",
				'es-es': "Cuchillada Doble",
				'it-it': "Doppia Lacerazione",
				'pt-br': "Talho Duplo",
				'de-de': "Doppelschlitzer"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
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
	hp: 90,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Honedge evolves into twins. The two blades rub together to emit a metallic sound that unnerves opponents."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458068,
				tcgplayer: 213230
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458068,
				tcgplayer: 213230
			}
		},
	],
}

export default card
