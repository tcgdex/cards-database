import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Tropical Wind",
		fr: "Vent tropical",
		de: "Tropenwinde"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, retirez 2 marqueurs de dégât à chaque Pokémon Actif (ou un si un Pokémon n'en possède qu'un). Si c'est pile, chaque Pokémon Actif est maintenant Endormi.",
		de: "Wirf 1 Münze. Entferne bei 'Kopf' 2 Schadensmarken von allen Aktiven Pokémon (1, falls nur 1 vorhanden). Bei 'Zahl' schlafen alle Aktiven Pokémon jetzt."
	},

	variants: [
		{
			type: "normal",
			stamp: ["worlds-2008"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","finalist"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","quarter-finalist"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","semi-finalist"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","staff"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","top-sixteen"],
		},
		{
			type: "normal",
			stamp: ["worlds-2008","top-thirty-two"],
		},
	],
}

export default card
