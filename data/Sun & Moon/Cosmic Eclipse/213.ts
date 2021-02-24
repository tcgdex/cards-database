import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Volcarona-GX",
		fr: "Pyrax-GX",
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flaming Shot",
				fr: "Tir Enflammé",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, put 2 damage counters on 1 of your opponent's Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, placez 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Backfire",
				fr: "Retour de Feu",
			},
			effect: {
				en: "Put 2 Fire Energy attached to this Pokémon into your hand.",
				fr: "Placez 2 Énergies Fire attachées à ce Pokémon dans votre main.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Massive Heat Wave-GX",
				fr: "Vague de Chaleur Massive-GX",
			},
			effect: {
				en: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez une Énergie de chacun des Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
