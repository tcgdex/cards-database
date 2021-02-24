import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		188,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floral Path to the Sky",
				fr: "Voie Céleste Fleurie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Jumpluff, put this Pokémon and all cards attached to it in the Lost Zone, and put that Jumpluff in its place. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher Cotovol dans votre deck, placer ce Pokémon-ci et toutes les cartes qui lui sont attachées dans la Zone Perdue, puis le remplacer par ce Cotovol. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 30,

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
