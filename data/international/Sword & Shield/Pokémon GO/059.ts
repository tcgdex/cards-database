import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [399],
	set: Set,

	name: {
		'en-us': "Bidoof",
		'fr-fr': "Keunotor",
		'es-es': "Bidoof",
		'it-it': "Bidoof",
		'pt-br': "Bidoof",
		'de-de': "Bidiza"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'de-de': "Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
	},



	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665282,
				tcgplayer: 276982
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665282,
				tcgplayer: 276982
			}
		},
		{
			type: 'reverse',
			subtype: 'peelable-ditto',
			thirdParty: {
				tcgplayer: 277788
			}
		},
	],
}

export default card
