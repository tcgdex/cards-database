import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [217],
	set: Set,

	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Continuous Slap",
			'fr-fr': "Gifles Sans Fin",
			'es-es': "Bofetón Incesante",
			'it-it': "Sberla Infinita",
			'pt-br': "Tapa Contínuo",
			'de-de': "Dauerhieb"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "When the cold season arrives in Hisui, this Pokémon will wander fields and mountains alike in search of its favorite berries. Ursaring's hunger during this time makes it a ferocious danger.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658784,
				tcgplayer: 272360
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658784,
				tcgplayer: 272360
			}
		},
	],
}

export default card
