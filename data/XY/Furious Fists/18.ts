import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Politoed",
		fr: "Tarpaud",
		es: "Politoed",
		it: "Politoed",
		pt: "Politoed",
		de: "Quaxo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		186,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "King's Song",
				fr: "Chant du Roi",
				es: "Canto Real",
				it: "Canto Reale",
				pt: "Canção do Rei",
				de: "Königliche Klänge"
			},
			effect: {
				en: "Ignore all Colorless Energy in the attack cost of each of your Poliwag, Poliwhirl, and Poliwrath's attacks.",
				fr: "Ignorez toutes les Énergies Colorless dans les coûts d'attaque des attaques de vos Ptitard, Têtarte et Tartard.",
				es: "Ignora todas las Energías Colorless en el coste de los ataques de tus Poliwag, Poliwhirl y Poliwrath.",
				it: "Ignora tutte le Energie Colorless necessarie per usare gli attacchi dei tuoi Poliwag, Poliwhirl e Poliwrath.",
				pt: "Ignore toda a Energia Colorless no custo do ataque para cada um dos ataques de seus Poliwag, Poliwhirl e Poliwrath.",
				de: "Ignoriere alle Colorless-Energien in den Angriffskosten der Attacken deiner Quapsel, Quaputzi und Quappo."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Voice",
				fr: "Mégaphone",
				es: "Vozarrón",
				it: "Granvoce",
				pt: "Hipervoz",
				de: "Schallwelle"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281682
	}
}

export default card
