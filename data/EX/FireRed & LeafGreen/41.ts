import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		de: "Nidorino"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nindoran ♂",
		fr: "Nidoran"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Double Stab"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer",
				de: "Rend"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque lui inflige 30 dégâts plus 30 dégâts supplémentaires.",
				de: "If the Defending Pokémon already has any damage counters on it, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276217,
		tcgplayer: 87744
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
