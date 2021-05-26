import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Top Drop",
				fr: "Tomber de haut",
			},
			effect: {
				en: "Discard the top card from your opponent's deck. If you discarded a Pokémon, this attack does damage equal to the HP of that Pokémon.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous défaussez un Pokémon, cette attaque inflige autant de dégâts que ce Pokémon possède de PV.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Brick Break",
				fr: "Casse-brique",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
