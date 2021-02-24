import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		663,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Devastating Wind",
				fr: "Vent Dévastateur",
			},
			effect: {
				en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
				fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Blitz",
				fr: "Boutefeu",
			},
			effect: {
				en: "Discard all Fire Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
