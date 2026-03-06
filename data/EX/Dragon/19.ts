import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		de: "Brutalanda"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Fang",
				fr: "Croc intimidant",
				de: "Intimidating Fang"
			},
			effect: {
				en: "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Tant que Drattak est votre Pokémon Actif, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "As long as Salamence is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Flame",
				fr: "Flamme de dragon",
				de: "Dragon Flame"
			},
			effect: {
				en: "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Drattak. Cette attaque inflige alors 60 dégâts.",
				de: "You may discard an Energy card attached to Salamence. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 88896,
		cardmarket: 275887
	}
}

export default card
