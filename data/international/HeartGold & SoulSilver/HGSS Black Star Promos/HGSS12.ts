import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Melo"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [173],
	hp: 30,
	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sweet Sleeping Face",
				'fr-fr': "Joli visage endormi"
			},
			effect: {
				'en-us': "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				'fr-fr': "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques."
			}
		},
	],
	attacks: [
		{

			name: {
				'en-us': "Eeeeeeek",
				'fr-fr': "Arheuuuuu"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				'fr-fr': "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi."
			},

		},
	],

	description: {
		'en-us': "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275614,
				tcgplayer: 84368
			}
		},
	],

	retreat: 0
}

export default card
