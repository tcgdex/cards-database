import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Rayquaza-GX",
		fr: "Rayquaza-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stormy Winds",
				fr: "Vents Orageux",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser les 3 cartes du dessus de votre deck. Dans ce cas, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Break",
				fr: "Dragon Destructeur",
			},
			effect: {
				en: "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies Grass de base et d’Énergies Lightning de base attachées à vos Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tempest-GX",
				fr: "Déchaînement-GX",
			},
			effect: {
				en: "Discard your hand and draw 10 cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez votre main et piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
