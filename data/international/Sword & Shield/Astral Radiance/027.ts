import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [485],
	set: Set,

	name: {
		'en-us': "Radiant Heatran",
		'fr-fr': "Heatran Radieux",
		'es-es': "Heatran Radiante",
		'it-it': "Heatran Lucente",
		'pt-br': "Heatran Radiante",
		'de-de': "Strahlendes Heatran"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Raging Blast",
			'fr-fr': "Explosion Furieuse",
			'es-es': "Explosión Rabiosa",
			'it-it': "Furiascoppio",
			'pt-br': "Explosão Devastadora",
			'de-de': "Wutexplosion"
		},

		effect: {
			'en-us': "This attack does 70 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 70 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 70 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658531,
				tcgplayer: 272227
			}
		},
	],
}

export default card
