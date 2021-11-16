import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Raichu δ",
		fr: "Raichu δ ESPÈCES DELTA"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Zzzap",
				fr: "Zzzap"
			},
			effect: {
				en: "Does 20 damage to each Pokémon that has any Poké-Powers or Poké-Bodies (both yours and your opponent's). Don't apply Weakness or Resistance.",
				fr: "Inflige 20 dégâts à chaque Pokémon possédant des Poké-Powers ou des Poké-Bodies (les vôtres et ceux de votre adversaire). Vous ne pouvez pas appliquer la Faiblesse ou la Résistance."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metallic Thunder",
				fr: "Tonnerre métallique"
			},
			effect: {
				en: "You may discard 2 Metal Energy attached to Raichu. If you do, this attack's base damage is 90 instead of 50.",
				fr: "Vous pouvez défausser 2 Énergies  attachées à Raichu. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50."
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





}

export default card
