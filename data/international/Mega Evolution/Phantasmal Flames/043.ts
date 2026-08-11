import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'es-mx': "Milcery",
		'de-de': "Hokumil",
		'it-it': "Milcery",
		'pt-br': "Milcery"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [868],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Draining Kiss",
			'fr-fr': "Vampibaiser",
			'es-es': "Beso Drenaje",
			'es-mx': "Beso Drenador",
			'de-de': "Diebeskuss",
			'it-it': "Assorbibacio",
			'pt-br': "Beijo Drenante"
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "The more sweet aromas it absorbs, the more its body swells. Milcery will deflate when its energy level drops.",
	},

	illustrator: "Taiga Kayama",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857618,
				tcgplayer: 662196,
				cardtrader: 356826
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857618,
				tcgplayer: 662196,
				cardtrader: 356826
			}
		},
	],	
}

export default card
