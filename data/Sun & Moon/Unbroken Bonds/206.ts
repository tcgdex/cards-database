import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Whimsicott-GX",
		fr: "Farfaduvet-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		547,
	],
	hp: 190,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fluffy Cotton",
				fr: "Coton Douillet",
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Energy Blow",
				fr: "Coup d’Énergie",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées à ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Toy Box-GX",
				fr: "Coffre à Jouets-GX",
			},
			effect: {
				en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
