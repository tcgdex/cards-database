import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Mismagius",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		429,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Crash Chant",
				fr: "Chant fracassant",
			},
			effect: {
				en: "Choose up to 4 in any combination of Pokémon Tool cards and Technical Machine cards in play (both yours and your opponent's) and discard them. This attack does 20 damage times the number of cards discarded in this way.",
				fr: "Choisissez n'importe quelle combinaison de jusqu'à 4 cartes Outil Pokémon et cartes Machine Technique en jeu (les vôtres et celles de votre adversaire) et défaussez-les. Cette attaque inflige 20 dégâts multipliés par le nombre de cartes défaussées de cette façon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Horror Chant",
				fr: "Chant d'horreur",
			},
			effect: {
				en: "If your opponent has 4 or more Benched Pokémon, choose 1 of them and return that Pokémon and all cards attached to it to your opponent's hand.",
				fr: "Si votre adversaire possède au moins 4 Pokémon de Banc, choisissez-en 1 et replacez-le ainsi que toutes les cartes qui lui sont attachées dans la main de votre adversaire.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
