import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Vengeful Cut",
			'fr-fr': "Coupe Vengeresse",
			'es-es': "Corte Vengativo",
			'it-it': "Taglio Vendicativo",
			'pt-br': "Corte Vingativo",
			'de-de': "Racheschnitt"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each damage counter on all of your Benched Pawniard.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur tous vos Scalpion de Banc.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en todos tus Pawniard en Banca.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sui tuoi Pawniard in panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano em todos os seus Pawniard no Banco.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Gladiantri auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Slicing Blade",
			'fr-fr': "Lame Tranchante",
			'es-es': "Cuchilla Cortante",
			'it-it': "Affettalama",
			'pt-br': "Lâmina Fatiante",
			'de-de': "Schwertschneide"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It's accompanied by a large retinue of Pawniard. Bisharp keeps a keen eye on its minions, ensuring none of them even think of double-crossing it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658777,
				tcgplayer: 272345
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658777,
				tcgplayer: 272345
			}
		},
	],
}

export default card
