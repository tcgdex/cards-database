import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Octillery",
		fr: "Octillery"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Remoraid",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crash Bomber",
				fr: "Bombardier écrasant"
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 30 more damage. Then, discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie Spéciale, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Ensuite, défaussez une carte Énergie Spéciale attachée au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Liner",
				fr: "Aqua-paquebot"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	description: {
		fr: "Il hante les fissures dans la roche et les trous au fond de la mer. Ses ventouses ne lâchent jamais prise."
	}
}

export default card
