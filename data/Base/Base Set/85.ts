import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Center",
		fr: "Centre Pokémon",
		de: "Pokémon Center",
		it: "Centro Pokémon"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.",
		fr: "Retirez tous les marqueurs de dégâts de tous vos propres Pokémon ayant des marqueurs de dégâts sur eux, puis défaussez toutes les cartes Énergie attachées à ces Pokémon.",
		de: "Entferne alle auf Deinem Pokémon abgelegten Schadensmarken. Entferne dann alle auf diesem Pokémon abgelegten Energiekarten.",
		it: "Togli tutti i segnalini danno da tutti i tuoi Pokémon e poi scarta tutte le carte Energia assegnate a quei Pokémon."
	},

	thirdParty: {
		cardmarket: 273780,
		tcgplayer: 108646
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
