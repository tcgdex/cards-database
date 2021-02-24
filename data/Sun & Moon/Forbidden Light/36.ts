import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Circuit",
				fr: "Circuit Magnétique",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may attach a Lightning Energy card from your hand to 1 of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Lightning de votre main à l’un de vos Pokémon.",
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
				en: "Zap Cannon",
				fr: "Élecanon",
			},
			effect: {
				en: "This Pokémon can't use Zap Cannon during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Élecanon pendant votre prochain tour.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
