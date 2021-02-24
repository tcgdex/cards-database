import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Gardevoir-GX",
		fr: "Gardevoir-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 230,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Secret Spring",
				fr: "Rebond Secret",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Infinite Force",
				fr: "Force Infinie",
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Twilight-GX",
				fr: "Tombée de la Nuit-GX",
			},
			effect: {
				en: "Shuffle 10 cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
	retreat: 2,



}

export default card
