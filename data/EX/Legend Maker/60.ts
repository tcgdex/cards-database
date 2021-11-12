import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita"
	},
	illustrator: "Kenkichi Toyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		138,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Ancient Tentacles",
				fr: "Tentacules anciennes"
			},
			effect: {
				en: "Damage done to your opponent's Pokémon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
				fr: "Les dégâts infligés aux Pokémon de votre adversaire par votre Amonita, Amonistar, Kabuto, Kabutops ou Kabutops ex ne sont pas affectés par la Résistance."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rising Lunge",
				fr: "Botte secrète"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
