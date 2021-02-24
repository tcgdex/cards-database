import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},
	illustrator: "Noriko Hotta",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insecateur",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Red Armor",
				fr: "Armure rouge",
			},
			effect: {
				en: "Prevent all damage done to Scizor by attacks from your opponent's Pokémon that have any Special Energy cards attached to them.",
				fr: "Évitez tous les dégâts d'attaque infligés à Cizayox par les Pokémon de votre adversaire auxquels sont attachées des cartes Énergie spéciale.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Scissors",
				fr: "Ciseaux d'acier",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Metal Energy attached to Scizor.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Metal attachée à Cizayox.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
