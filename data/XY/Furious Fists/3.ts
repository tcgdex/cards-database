import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wafting Scent",
				fr: "Senteur Flottante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Grass Energy attached to this Pokémon. If you do, your opponent's Active Pokémon is now Confused and Poisoned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Grass attachée à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale Épuisante",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
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

	retreat: 2,



}

export default card
