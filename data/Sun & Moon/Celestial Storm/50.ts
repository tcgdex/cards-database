import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Grounding",
				fr: "Source d’Énergie",
			},
			effect: {
				en: "When 1 of your Pokémon is Knocked Out by damage from an opponent's attack, you may move a basic Energy card from that Pokémon to this Pokémon.",
				fr: "Lorsque l’un de vos Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer une carte Énergie de base du Pokémon mis K.O. vers celui-ci.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
				fr: "Frap’Éclair",
			},
			effect: {
				en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 70 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

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
	retreat: 2,



}

export default card
