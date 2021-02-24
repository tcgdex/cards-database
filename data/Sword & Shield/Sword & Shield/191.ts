import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Wobbuffet V",
		fr: "Qulbutoké V",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Psychic",
	],


	suffix: "V",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gritty Comeback",
				fr: "Retour Abrasif",
			},
			effect: {
				en: "Switch all damage counters on this Pokémon with those on your opponent’s Active Pokémon.",
				fr: "Échangez tous les marqueurs de dégâts de ce Pokémon contre ceux du Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shadow Bind",
				fr: "Étreinte d’Ombre",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
