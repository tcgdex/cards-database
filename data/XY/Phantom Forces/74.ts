import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		635,
	],
	hp: 140,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Impulse",
				fr: "Impulsion Obscure",
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Darkness Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crazy Headbutt",
				fr: "Coup d'Boule Fou",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
