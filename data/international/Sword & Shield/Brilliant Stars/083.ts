import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [623],
	set: Set,

	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Big Hand",
			'fr-fr': "Grande Main",
			'es-es': "Manaza",
			'it-it': "Gran Mano",
			'pt-br': "Mãozona",
			'de-de': "Große Hand"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each card in your hand.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans votre main.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada carta en tu mano.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni carta nella tua mano.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada carta na sua mão.",
			'de-de': "Diese Attacke fügt für jede Karte auf deiner Hand 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'pt-br': "Megassoco",
			'de-de': "Megahieb"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608533,
				tcgplayer: 263799
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608533,
				tcgplayer: 263799
			}
		},
	],
}

export default card
