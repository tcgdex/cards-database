import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lunala-GX",
		fr: "Lunala-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		792,
	],
	hp: 250,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Transfer",
				fr: "Transfert Psy",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Psychic Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic de l’un de vos Pokémon vers un autre de vos Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Moongeist Beam",
				fr: "Rayon Spectral",
			},
			effect: {
				en: "The Defending Pokémon can't be healed during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas être soigné pendant le prochain tour de votre adversaire.",
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Lunar Fall-GX",
				fr: "Chute Lunaire-GX",
			},
			effect: {
				en: "Knock Out 1 of your opponent's Basic Pokémon that isn't a Pokémon-GX. (You can't use more than 1 GX attack in a game.)",
				fr: "Mettez K.O. l’un des Pokémon de base de votre adversaire qui n’est pas un Pokémon-GX. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
