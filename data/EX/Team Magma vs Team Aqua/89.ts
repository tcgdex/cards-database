import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Blaziken ex",
		fr: "Brasegali ex",
		de: "Lohgock ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 150,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Blaze Kick",
				fr: "Pied Brûleur",
				de: "Blaze Kick"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Brûlé.",
				de: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Burned."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volcanic Ash",
				fr: "Cendres volcaniques",
				de: "Volcanic Ash"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Blaziken ex and then choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies  attachées à Brasegali ex puis choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 100 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Discard 2  Energy attached to Blaziken ex and then choose 1 of your opponent's Pokémon. This attack does 100 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276066,
		tcgplayer: 83912
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["chris-fulop"]
		}
	]
}

export default card
