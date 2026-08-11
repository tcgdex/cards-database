import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [111],
	set: Set,

	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'pt-br': "Rhyhorn",
		'de-de': "Rihorn"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Take Down",
			'fr-fr': "Bélier",
			'es-es': "Derribo",
			'it-it': "Riduttore",
			'pt-br': "Desmantelar",
			'de-de': "Bodycheck"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674102,
				tcgplayer: 283976
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674102,
				tcgplayer: 283976
			}
		},
	],
}

export default card
