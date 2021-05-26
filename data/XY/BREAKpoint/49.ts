import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		523,
	],
	hp: 100,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Zap Zone",
				fr: "Zone Électrique",
			},
			effect: {
				en: "Damage from the attacks of your Lightning Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts des attaques de vos Pokémon Lightning ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crashing Bolt",
				fr: "Éclair Fracassant",
			},
			effect: {
				en: "If your opponent's Active Pokémon has Fighting Resistance, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
