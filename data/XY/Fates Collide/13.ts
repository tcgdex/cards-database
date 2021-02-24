import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Delphox",
		fr: "Goupelin",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		655,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Braixen",
		fr: "Roussil",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes Vacillantes",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psystorm",
				fr: "Tempête Psy",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to all Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous les Pokémon en jeu.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
