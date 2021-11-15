import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Change",
				fr: "Changement de type"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon. Mew is the same type as that Pokémon (all if that Pokémon is more than 1 type) until the end of your turn. This power can't be used if Mew is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon Défenseurs. Mew est du même type que ce Pokémon (il est de tous les types de ce Pokémon si celui-ci est de plusieurs types) jusqu'à la fin de votre tour. Ce pouvoir ne peut pas être utilisé si Mew est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Link Blast",
				fr: "Explosion en série"
			},
			effect: {
				en: "If Mew and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 20 instead of 50.",
				fr: "Si Mew et le Pokémon Défenseur possèdent un total d'Énergie différent, les dégâts de base de cette attaque sont de 20 au lieu de 50."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
