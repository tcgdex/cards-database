import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		668,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Mane",
				fr: "Crinière Intimidante",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon de base de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scorching Fang",
				fr: "Croc Ardent",
			},
			effect: {
				en: "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				fr: "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: "60+",

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
