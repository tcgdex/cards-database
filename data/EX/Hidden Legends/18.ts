import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		de: "Saganabyss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-dard",
				de: "Stun Needle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mystic Water",
				fr: "Eau mystique",
				de: "Mystic Water"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Psychic Energy in play.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  en jeu.",
				de: "Does 20 damage plus 10 more damage for each  Energy in play."
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

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276092,
		tcgplayer: 85842
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
