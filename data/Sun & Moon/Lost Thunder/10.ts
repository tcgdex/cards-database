import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trapping Thread",
				fr: "Fil à Piège",
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand during their next turn, prevent all effects of that card done to the Defending Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main pendant son prochain tour, évitez tous les effets de cette carte sur le Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Jab",
				fr: "Direct Toxik",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
