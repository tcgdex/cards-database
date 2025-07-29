import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyena",
		de: "Magnayen"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyena",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cold Feet",
				fr: "Pieds froids",
				de: "Cold Feet"
			},
			effect: {
				en: "If Mightyena is affected by a Special Condition, ignore all Energy necessary to use Mightyena's attacks.",
				fr: "Si Grahyena est affecté par un État Spécial, ignorez toutes les Énergies nécessaires pour utiliser les attaques de Grahyena.",
				de: "If Mightyena is affected by a Special Condition, ignore all Energy nessesary to use Mightyena's attacks."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Collude",
				fr: "Association louche",
				de: "Collude"
			},
			effect: {
				en: "If you played any Supporter card from your hand during this turn, this attack does 20 damage plus 20 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main ce tour-ci, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				de: "If you played any Supporter card from your hand during this turn, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Desperate Attack",
				fr: "Attaque désespérée",
				de: "Desperate Attack"
			},
			effect: {
				en: "If Mightyena has less Energy attached to it than the Defending Pokémon, this attack does 50 damage plus 30 more damage.",
				fr: "Si Grahyena possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				de: "If Mightyena has less Energy attached to it than the Defending Pokémon, this attack does 30 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278475
	}
}

export default card
