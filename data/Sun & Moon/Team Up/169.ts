import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Latias & Latios-GX",
		fr: "Latias et Latios-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 250,
	types: [
		"Dragon",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Buster Purge",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
			},
			damage: 240,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Aero Unit-GX",
				fr: "Écrase-Éclat",
			},
			effect: {
				en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), prevent all effects of attacks, including damage, done to it during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 240,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Unité Aérienne-GX",
			},
			effect: {
				fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), évitez tous les effets d’attaques, y compris les dégâts, qui lui sont infligés pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
