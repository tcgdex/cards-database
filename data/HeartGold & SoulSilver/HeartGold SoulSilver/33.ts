import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		236,
	],

	hp: 30,

	types: [
		"Fighting",
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
				en: "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
				fr: "Tant que Debugant reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Mischievous Punch",
				fr: "Coquipoing",
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance. Tyrogue is now Asleep.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Debugant est maintenant Endormi.",
			},
			damage: 30,

		},
	],

	retreat: 0
}

export default card
