import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Decidueye",
		fr: "Archéduc"
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche"
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Deep Forest Camo",
				fr: "Camouflage Sylvestre"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Splitting Arrow",
				fr: "Flèche Fendante"
			},
			effect: {
				en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
