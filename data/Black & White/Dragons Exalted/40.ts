import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Electromagnetic Wall",
				fr: "Mur Électromagnétique",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever your opponent attaches an Energy from his or her hand to 1 of his or her Pokémon, put 3 damage counters on that Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire attache une Énergie de sa main à 1 de ses Pokémon, placez 3 marqueurs de dégâts sur le Pokémon auquel l'Énergie a été attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electrobullet",
				fr: "Électrojectile",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
