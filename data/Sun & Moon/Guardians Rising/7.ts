import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Trevenant",
		fr: "Desséliande",
	},
	illustrator: "Hiroyuki Yamamoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		709,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Phantump",
		fr: "Brocélôme",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
			},
			effect: {
				en: "Your opponent reveals their hand. This attack does 30 damage for each Trainer card you find there.",
				fr: "Votre adversaire dévoile sa main. Cette attaque inflige 30 dégâts pour chaque carte Dresseur que vous y trouvez.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Horn Leech",
				fr: "Encornebois",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
