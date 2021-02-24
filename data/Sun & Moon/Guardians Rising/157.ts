import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Metagross-GX",
		fr: "Métalosse-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 250,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Geotech System",
				fr: "Système Géotechnique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Psychic or Metal Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic ou Metal de votre pile de défausse à votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Hammer",
				fr: "Giga Marteau",
			},
			effect: {
				en: "This Pokémon can't use Giga Hammer during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Giga Marteau pendant votre prochain tour.",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Algorithm-GX",
				fr: "Algorithme-GX",
			},
			effect: {
				en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
