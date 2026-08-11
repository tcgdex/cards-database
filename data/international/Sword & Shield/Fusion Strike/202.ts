import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		'en-us': "Because the eggs on their bellies have been overharvested by people in the past, the Chansey population remains very small."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Drain Slap",
			'fr-fr': "Baffe Sangsue",
			'de-de': "Watschensauger",
			'es-es': "Absorbebofetón",
			'pt-br': "Bofetada Drenagem",
			'it-it': "Sberlassorbimento"
		},

		damage: 30,

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'es-es': "Bofetada Gentil",
			'pt-br': "Tapinha",
			'it-it': "Schiaffetto"
		},

		damage: 70
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582877,
				tcgplayer: 253296
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582877,
				tcgplayer: 253296
			}
		},
	],
}

export default card
