import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
	},
	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Regi Heal",
				fr: "Regi-guérison",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 2 cards from your hand. Then, remove 3 damage counters from Registeel. This power can't be used if Registeel is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser 2 cartes de votre main. Ensuite, retirez à Registeel 3 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Registeel est affecté par un État Spécial.",
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
				en: "Rotating Claws",
				fr: "Griffes tournantes",
			},
			effect: {
				en: "You may discard an Energy card attached to Registeel. If you do, search your discard pile for an Energy card (excluding the one you discarded) and attach it to Registeel.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Registeel. Choisissez alors dans votre pile de défausse une carte Énergie (celle que vous venez de défausser exclue) et attachez-la à Registeel.",
			},
			damage: 50,

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
	retreat: 4,



}

export default card
