import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Greninja-GX",
		fr: "Amphinobi-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 230,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shuriken Flurry",
				fr: "Rafale de Shuriken",
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 3 damage counters on 1 of your opponent's Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Haze Slash",
				fr: "Brouillard Lacérant",
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 110,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadowy Hunter-GX",
				fr: "Chasseur Tapi-GX",
			},
			effect: {
				en: "This attack does 130 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 130 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
