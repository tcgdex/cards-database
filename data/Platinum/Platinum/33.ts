import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		de: "Schlurplek"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		463,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harrumph",
				fr: "Se racler la gorge",
				de: "Harrumph"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Before doing damage, discard all Trainer cards attached to that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées à ce Pokémon.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Before doing damage, discard all Trainer cards attached to that Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Press",
				fr: "Presse corporelle",
				de: "Body Press"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278454
	}
}

export default card
