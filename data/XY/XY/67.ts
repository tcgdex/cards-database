import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		534,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Wake-Up Slap",
				fr: "Réveil Forcé",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage. Then, remove all Special Conditions from that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce dernier.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamopoing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage and your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
