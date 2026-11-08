import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [428],
	set: Set,

	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin",
		'es-es': "Lopunny",
		'it-it': "Lopunny",
		'pt-br': "Lopunny",
		'de-de': "Schlapor"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'es-es': "Buneary",
		'it-it': "Buneary",
		'pt-br': "Buneary",
		'de-de': "Haspiror"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Double Kick",
			'fr-fr': "Double Pied",
			'es-es': "Doble Patada",
			'it-it': "Doppiocalcio",
			'pt-br': "Chute Duplo",
			'de-de': "Doppelkick"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Lopunny is constantly monitoring its surroundings. If danger approaches, this Pokémon responds with superdestructive kicks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682192,
				tcgplayer: 451795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682192,
				tcgplayer: 451795
			}
		},
	],
}

export default card
