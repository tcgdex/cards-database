import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Magcargo-GX",
		fr: "Volcaropod-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		219,
	],
	hp: 210,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Crushing Charge",
				fr: "Charge Écrasante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard the top card of your deck. If it's a basic Energy card, attach it to 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser la carte du dessus de votre deck. Si c’est une carte Énergie de base, attachez-la à l’un de vos Pokémon.",
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
				en: "Lava Flow",
				fr: "Torrent de Lave",
			},
			effect: {
				en: "Discard any amount of basic Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
				fr: "Défaussez n’importe quel nombre d’Énergies de base de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burning Magma-GX",
				fr: "Magma Brûlant-GX",
			},
			effect: {
				en: "Discard the top 5 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez les 5 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
