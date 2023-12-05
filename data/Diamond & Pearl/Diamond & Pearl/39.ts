import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		de: "Honweisel"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Honey",
				fr: "Feuille miel",
				de: "Honigblatt"
			},
			effect: {
				en: "Discard a Grass Energy attached to Vespiquen and remove all damage counters from 1 of your Benched Grass Pokémon.",
				fr: "Défaussez une Énergie Grass attachée à Apireine et retirez à 1 de vos Pokémon de Banc Grass tous ses marqueurs de dégât.",
				de: "Lege eine -Energie, die an Honweisel angelegt ist, auf deinen Ablagestapel und entferne danach alle Schadensmarken von 1 -Pokémon auf deiner Bank."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack Order",
				fr: "Appel Attak",
				de: "Schlagbefehl"
			},
			effect: {
				en: "Does 10 damage times the number of Grass Pokémon in play (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon Grass en jeu (les vôtres et ceux de votre adversaire).",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jedes -Pokémon im Spiel zu (deine und die deines Gegners)."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		fr: "Son abdomen est un rayon où vivent ses larves, élevées avec le nectar récolté par Apitrini."
	}
}

export default card
