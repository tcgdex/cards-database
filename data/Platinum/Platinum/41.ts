import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Bronzong G",
		fr: "Archéodong ",
	},
	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Metal",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Galactic Switch",
				fr: "Échange galactique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon SP to another of your Pokémon. Then, put 2 damage counters on Bronzong . This power can't be used if Bronzong is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à 1 de vos Pokémon SP sur un autre de vos Pokémon. Ensuite, placez 2 marqueurs de dégât sur Archéodong . Ce pouvoir ne peut pas être utilisé si Archéodong  est affecté par un État Spécial.",
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
				en: "Psychic Pulse",
				fr: "Vibration psy",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
