import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Melo"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi"
			},
			effect: {
				en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				fr: "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Eeeeeeek",
				fr: "Arheuuuuu"
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				fr: "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi."
			},

		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
