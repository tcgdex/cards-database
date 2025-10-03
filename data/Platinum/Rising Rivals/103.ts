import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Alakazam 4",
		fr: "Alakazam  Niv. X",
		de: "Simsala 4"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Damage Switch",
				fr: "Échange de dégâts",
				de: "Schadensaustausch"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon SP to another of your Pokémon SP. This power can't be used if Alakazam is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégât d'1 de vos Pokémon SP sur un autre de vos Pokémon SP. Ce pouvoir ne peut pas être utilisé si Alakazam  est affecté par un État Spécial.",
				de: "Beliebig oft während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von 1 deiner Pokémon SP entfernen und auf 1 anderes deiner Pokémon SP legen. Diese Poké-Power kann nicht benutzt werden, wenn Simsala 4 von einem Speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mind Shock",
				fr: "Choc cérébral",
				de: "Verstandesschock"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
