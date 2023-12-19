import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
		de: "Guardevoir"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Connect",
				fr: "Connection psy",
				de: "Psychic Connect"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				de: "As often as you like during your turn (before your attack), you may move a  Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Guardevoir is affected by a Special Condition."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Burst",
				fr: "Explosion d'énergie",
				de: "Energy Burst"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Gardevoir et au Pokémon Défenseur.",
				de: "Does 20 damage plus 10 more damage for each Energy attached to Guardevoir and the Defending Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Protection",
				fr: "Protection psy",
				de: "Psychic Protection"
			},
			effect: {
				en: "Gardevoir has no Weakness during your opponent's next turn.",
				fr: "Gardevoir ne possède pas de Faiblesse lors du prochain tour de votre adversaire.",
				de: "Guardevoir has no Weakness during your opponent's next turn."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
