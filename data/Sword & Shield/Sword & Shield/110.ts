import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Sandaconda",
		fr: "Dunaconda",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Silicobra",
		fr: "Dunaja",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sand Sac",
				fr: "Poche de Sable",
			},
			effect: {
				en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Power Press",
				fr: "Étau Puissant",
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Fighting Energy attached (in addition to this attack's cost), this attack does 70 more damage.",
				fr: "Si au moins une Énergie Fighting supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
