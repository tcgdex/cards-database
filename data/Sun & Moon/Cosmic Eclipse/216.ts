import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Solgaleo & Lunala-GX",
		fr: "Solgaleo et Lunala-GX",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		791,
	],
	hp: 270,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Cosmic Burn",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This Pokémon can't use Cosmic Burn during your next turn.",
			},
			damage: 230,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Light of the Protector-GX",
				fr: "Brûlure Cosmique",
			},
			effect: {
				en: "If you played Lillie's Full Force from your hand during this turn, prevent all effects of attacks, including damage, done to each of your Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Ce Pokémon ne peut pas utiliser Brûlure Cosmique pendant votre prochain tour.",
			},
			damage: 200,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				fr: "Lumière de la Protectrice-GX",
			},
			effect: {
				fr: "Si vous avez joué Pleine Puissance de Lilie de votre main pendant ce tour, évitez tous les effets d’attaques, y compris les dégâts, infligés à chacun de vos Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
