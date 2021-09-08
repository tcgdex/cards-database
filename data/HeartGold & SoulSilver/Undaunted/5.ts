import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Fire Counterattack",
				fr: "Contre-attaque de feu",
			},
			effect: {
				en: "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
				fr: "Si votre adversaire dispose de n’importe quel Pokémon Fighting en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Roar",
				fr: "Cri des Ténèbres",
			},
			effect: {
				en: "Your opponent discards a card from his or her hand.",
				fr: "Votre adversaire défausse une carte de sa main.",
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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
