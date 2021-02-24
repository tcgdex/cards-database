import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Jirachi-EX",
		fr: "Jirachi ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 90,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stellar Guidance",
				fr: "Bonne Étoile",
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnostrike",
				fr: "Choc Sommeil",
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
			},
			damage: 60,

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
	retreat: 1,



}

export default card
