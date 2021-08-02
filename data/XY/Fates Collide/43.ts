import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Regirock EX",
		fr: "Regirock-EX",
	},
	illustrator: "PLANETA",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 180,
	types: [
		"Fighting",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Regi Power",
				fr: "Regi-Pouvoir",
			},
			effect: {
				en: "The attacks of your Fighting Pokémon (excluding Regirock-EX) do 10 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Fighting (excepté Regirock-EX) infligent 10 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bedrock Press",
				fr: "Charge Substrat",
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
