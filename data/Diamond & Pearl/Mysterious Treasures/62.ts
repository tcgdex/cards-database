import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
		de: "Seejong"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Spheal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ice Rider",
				fr: "Chevalier de glace",
				de: "Eisgleiter"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	description: {
		fr: "Il fait souvent tourner des objets sur son museau pour connaitre leur odeur et leur texture."
	},

	thirdParty: {
		cardmarket: 277691
	}
}

export default card
