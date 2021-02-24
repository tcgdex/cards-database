import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Mime Jr.",
		fr: "Mime Jr.",
	},
	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		439,
	],
	hp: 30,
	types: [
		"Psychic",
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
				en: "As long as Mime Jr. is Asleep, prevent all damage done to Mime Jr. by attacks.",
				fr: "Tant que Mime Jr. est Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Sleepy Lost",
				fr: "Berceuse perdue",
			},
			effect: {
				en: "Put the top card of your opponent's deck in the Lost Zone. Mime Jr. is now Asleep.",
				fr: "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue. Mime Jr. est maintenant Endormi.",
			},

		},
	],






}

export default card
