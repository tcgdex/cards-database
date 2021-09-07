import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},
	illustrator: "Hideaki Hakozaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		429,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magical Trans",
				fr: "Transfert magique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Pokémon to another of your Pokémon. This power can’t be used if Mismagius is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie Psychic attachée à l'un de vos Pokémon et l'attacher à un autre Pokémon. Ce pouvoir ne peut pas être utilisé si Magirêve est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Pulse",
				fr: "Vibration psy",
			},
			effect: {
				en: "Does 10 damage to each of your opponent’s Benched Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon se trouvant sur le Banc de votre adversaire et ayant des marqueurs de dégât. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 30,

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
