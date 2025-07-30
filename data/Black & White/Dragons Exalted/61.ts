import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Marowak",
		fr: "Ossatueur",
		es: "Marowak",
		it: "Marowak",
		pt: "Marowak",
		de: "Knogga"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Bone Lock",
				fr: "Piège Osseux",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vortex Chop",
				fr: "Coupe-Tourbillon",
			},
			effect: {
				en: "If the Defending Pokémon has any Resistance, this attack does 30 more damage.",
				fr: "Si le Pokémon Défenseur a une Résistance, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280500,
		tcgplayer: 87229
	}
}

export default card
