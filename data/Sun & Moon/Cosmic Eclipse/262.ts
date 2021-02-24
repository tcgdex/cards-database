import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Silvally-GX",
		fr: "Silvallié-GX",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Disk Reload",
				fr: "Rechargement du Disque",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 5 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Buddies",
				fr: "Copains Courageux",
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Silver Knight GX",
				fr: "Chevalier d’Argent-GX",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Ultra Beast, it is Knocked Out. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
