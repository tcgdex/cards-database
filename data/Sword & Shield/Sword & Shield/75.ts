import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Boltund",
		fr: "Fulgudog",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Yamper",
		fr: "Voltoutou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Bite",
				fr: "Grosse Morsure",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fighting Fangs",
				fr: "Crocs Combatifs",
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon V or Pokémon-GX, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-V ou un Pokémon-GX, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
