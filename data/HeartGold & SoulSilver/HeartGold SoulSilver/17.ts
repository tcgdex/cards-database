import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Cleffa",
		fr: "Mélo",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
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
				fr: "Joli visage endormi",
			},
			effect: {
				en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				fr: "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Eeeeeeek",
				fr: "Arheuuuuu",
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				fr: "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi.",
			},

		},
	],






}

export default card
