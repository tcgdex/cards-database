import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Elekable",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Elektek",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Intense Voltage",
				fr: "Voltage intense",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), if Elekid is anywhere under Electivire, you may move a Lightning Energy attached to 1 of your Pokémon to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
				fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), si Elekid se trouve sous Elekable, vous pouvez déplacer une Énergie Lightning attachée à votre Pokémon et la placer sur Elekable. Ce pouvoir ne peut pas être utilisé si Elekable est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
			},
			effect: {
				en: "You may discard all  Lightning Energy attached to Electivire. If you do, this attack's base damage is 120 instead of 60.",
				fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à Elekable. Les dégâts de base de cette attaque sont alors de 120 au lieu de 60.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
