import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		pt: "Probopass",
		de: "Voluminas"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		476,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Lines",
				fr: "Lignes Magnétiques",
			},
			effect: {
				en: "You may move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
				fr: "Vous pouvez déplacer une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Nose",
				fr: "Pif Paf",
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 280521
	}
}

export default card
