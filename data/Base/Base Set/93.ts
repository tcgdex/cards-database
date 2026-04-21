import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gust of Wind",
		fr: "Rafale de vent",
		de: "Windhauch",
		it: "Ventata"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 Pokémon du Banc votre adversaire et échangez-le avec son Pokémon actif.",
		de: "Wähle ein Pokémon auf der Bank Deines Gegners und tausche es mit seinem aktiven Pokémon aus.",
		it: "Scegli un Pokémon nella Panchina del tuo avversario e scambialo con il suo Pokémon Attivo."
	},

	thirdParty: {
		cardmarket: 273788,
		tcgplayer: 42437
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

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/072.ts"
		}
	]
}

export default card
