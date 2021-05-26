import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Protective Glow",
				fr: "Lueur Protectrice"
			},
			effect: {
				en: "All of your Pokémon that have Energy attached have no Weakness.",
				fr: "Vos Pokémon auxquels de l’Énergie est attachée n’ont pas de Faiblesse."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mirage Flare",
				fr: "Mirage Flamboyant"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 140,
	types: ["Fire"]
}

export default card
