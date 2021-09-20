import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	illustrator: "Shizurow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fighting Tag",
				fr: "Relève guerrière",
			},
			effect: {
				en: "Once during your turn (before your attack), if Machamp is on your Bench, you may move all Fighting Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon.",
				fr: "Une fois pendant votre tour (avant votre attaque), si Mackogneur est sur votre Banc, vous pouvez lui attribuer toutes les cartes Énergie Fighting attachées à votre Pokémon Actif. Dans ce cas, échangez Mackogneur avec votre Pokémon Actif.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Punch",
				fr: "Poing dévastateur",
			},
			effect: {
				en: "Discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Champ Buster",
				fr: "Explos’tout",
			},
			effect: {
				en: "Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Inflige 100 dégâts plus 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant des marqueurs de dégât.",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	suffix: "Prime"
}

export default card
