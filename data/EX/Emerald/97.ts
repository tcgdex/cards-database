import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Raichu ex",
		fr: "Raichu ex",
		de: "Raichu ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rai-shield",
				fr: "Rai-bouclier",
				de: "Rai-shield"
			},
			effect: {
				en: "Damage done to any of your Raichu ex in play by attacks from your opponent's Pokémon-ex is reduced by 30 (after applying Weakness and Resistance). You can't use more than 1 Rai-shield Poké-Body each turn.",
				fr: "Les dégâts infligés à 1 des Raichu ex que vous avez en jeu par des attaques de Pokémon-ex de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d'1 Poké-Body Rai-bouclier par tour.",
				de: "Damage done to any of your Raichu ex in play by attacks from your opponent's Pokémon-ex is reduced by 30 (after applying Weakness and Resistance). You can't use more than 1 Rai-shield Poké-Body each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Power Short",
				fr: "Court-circuit",
				de: "Power Short"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If that Pokémon has Poké-Powers, this attack does 30 damage plus 20 more damage.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si ce Pokémon possède des Poké-Powers, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistence for Benched Pokémon.) If that Pokémon has any Powers, this attack does 30 damage plus 20 more damage."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pika Bolt",
				fr: "Pik'éclair",
				de: "Pika Bolt"
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

	
	retreat: 0,

	thirdParty: {
		tcgplayer: 88526,
		cardmarket: 276608
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
