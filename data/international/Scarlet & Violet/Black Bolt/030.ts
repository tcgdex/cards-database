import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
		'de-de': "Zapplardin",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'es-es': "Tynamo",
		'es-mx': "Tynamo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Hold Still",
			'fr-fr': "Ne Bougez Pas",
			'de-de': "Stillhalten",
			'it-it': "Immobile",
			'pt-br': "Ficar Parado",
			'es-es': "Permanecer Inmóvil",
			'es-mx': "Sin Moverse"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835959,
				tcgplayer: 642482
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835959,
				tcgplayer: 642482
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836334,
				tcgplayer: 642727
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836333,
				tcgplayer: 642654
			}
		}
	]
}

export default card
