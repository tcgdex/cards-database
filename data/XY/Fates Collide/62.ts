import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Bronzong BREAK",
		fr: "Archéodong TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Rain",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard as many Metal Energy attached to this Pokémon as you like. For each Energy card discarded in this way, choose 1 of your opponent’s Pokémon and do 30 damage to it. Don’t apply Weakness and Resistance. (You may choose the same Pokémon more than once.)",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				fr: "Pluie Dorée",
			},
			effect: {
				fr: "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Pour chaque carte Énergie défaussée de cette façon, choisissez l'un des Pokémon de votre adversaire et infligez-lui 30 dégâts. N'appliquez ni la Faiblesse ni la Résistance. (Vous pouvez choisir plusieurs fois le même Pokémon.)",
			},

		},
	],

	retreat: 0
}

export default card
