import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 60,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Gold Rush",
				fr: "Ruée Vers l’Or",
			},
			effect: {
				en: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez autant de cartes Énergie Metal que vous voulez de votre main. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 30,

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
	retreat: 1,



}

export default card
