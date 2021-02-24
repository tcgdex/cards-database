import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Dusk Mane Necrozma-GX",
		fr: "Necrozma Crinière du Couchant-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 190,
	types: [
		"Metal",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
			},

			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Meteor Tempest",
				fr: "Tempête Météorique",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 220,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Sun's Eclipse-GX",
				fr: "Éclipse Solaire-GX",
			},
			effect: {
				en: "You can use this attack only if you have more Prize cards remaining than your opponent. (You can't use more than 1 GX attack in a game.)",
				fr: "Vous pouvez utiliser cette attaque seulement s’il vous reste plus de cartes Récompense que votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 250,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
