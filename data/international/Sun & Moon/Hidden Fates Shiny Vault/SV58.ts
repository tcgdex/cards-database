import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Xurkitree-GX",
		'fr-fr': "Câblifère-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flashing Head",
				'fr-fr': "Tête Clignotante",
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
				'fr-fr': "Évitez tous les dégâts d’attaque infligés à ce Pokémon par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Rumbling Wires",
				'fr-fr': "Câbles Grondants",
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 100,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lighting-GX",
				'fr-fr': "Éclair-GX",
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Votre adversaire dévoile sa main. Ajoutez une des cartes que vous y trouvez à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
