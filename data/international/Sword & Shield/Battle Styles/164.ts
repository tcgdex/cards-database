import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [841],
	set: Set,

	name: {
		'en-us': "Flapple VMAX",
		'fr-fr': "Pomdrapi VMAX",
		'es-es': "Flapple VMAX",
		'it-it': "Flapple VMAX",
		'pt-br': "Flapple VMAX",
		'de-de': "Drapfel VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "G-Max Rolling",
			'fr-fr': "Roulade G-Max",
			'es-es': "Gigarrodar",
			'it-it': "Gigarotola",
			'pt-br': "Rolamento G-Max",
			'de-de': "Giga-Rollen"
		},

		damage: "250-",

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,


	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		'en-us': "Flapple V",
		'fr-fr': "Pomdrapi-V",
		'es-es': "Flapple V",
		'it-it': "Flapple-V",
		'pt-br': "Flapple V",
		'de-de': "Drapfel-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 546611,
				tcgplayer: 234079
			}
		},
	],
}

export default card
