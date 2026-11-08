import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		'fr-fr': "Draïeul",
		'en-us': "Drampa",
		'es-es': "Drampa",
		'it-it': "Drampa",
		'pt-br': "Drampa",
		'de-de': "Sen-Long"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Colère",
			'en-us': "Outrage",
			'es-es': "Enfado",
			'it-it': "Oltraggio",
			'pt-br': "Ultraje",
			'de-de': "Wutanfall"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Drampa is a kind and friendly Pokémon—up until it's angered. When that happens, it stirs up a gale and flattens everything around.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725241,
				tcgplayer: 509664,
				cardtrader: 255846
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725241,
				tcgplayer: 509664,
				cardtrader: 255846
			}
		},
	],

	illustrator: "hatachu",

	
}

export default card
