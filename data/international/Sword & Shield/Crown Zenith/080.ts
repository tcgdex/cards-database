import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [675],
	set: Set,

	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Wild Tackle",
			'fr-fr': "Tacle Brutal",
			'es-es': "Placaje Salvaje",
			'it-it': "Azionferoce",
			'pt-br': "Investida Feroz",
			'de-de': "Wilder Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon is quick to anger, and it has no problem using its prodigious strength to get its way. It lives for duels against Obstagoon.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691798,
				tcgplayer: 478219
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691798,
				tcgplayer: 478219
			}
		},
	],
}

export default card
