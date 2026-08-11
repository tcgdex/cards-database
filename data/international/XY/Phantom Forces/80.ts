import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'Sieste",
				'es-es': "Siesta",
				'it-it': "Pausa",
				'pt-br': "Soneca",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lucky Punch",
				'fr-fr': "Poing Chance",
				'es-es': "Puño Suerte",
				'it-it': "Fortunpugno",
				'pt-br': "Soco da Sorte",
				'de-de': "Lucky Punch"
			},
			effect: {
				'en-us': "If you don't have exactly 7 cards in your hand, this attack does nothing.",
				'fr-fr': "Si vous n'avez pas exactement 7 cartes dans votre main, cette attaque ne fait rien.",
				'es-es': "Si no tienes exactamente 7 cartas en tu mano, este ataque no hace nada.",
				'it-it': "Se non hai esattamente sette carte in mano, questo attacco non ha effetto.",
				'pt-br': "Se você não tiver exatamente 7 cards na mão, esse ataque não fará nada.",
				'de-de': "Dieser Angriff hat keine Auswirkungen, wenn du nicht genau 7 Karten auf der Hand hast."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said to deliver happiness. Being compassionate, it shares its egg with injured people.",
	},

	thirdParty: {
		cardmarket: 281886,
		tcgplayer: 94648
	}
}

export default card
