import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		de: "Lucario"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Aura Sphere",
				fr: "Aurasphère",
				de: "Aurasphäre"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la vague",
				de: "Wellenreiten"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each of your Benched Pokémon.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon de votre Banc.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Pokémon auf deiner Bank zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	description: {
		en: "A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away.",
		de: "Ist es trainiert, spürt es Auren, um Gefühle entfernter Kreaturen zu erkennen und aufzunehmen."
	},

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86878,
				cardmarket: 278474
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278474,
				tcgplayer: 86878
			}
		},
		{
			type:"normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 187215
			}
		},
		{
			type:"normal",
			stamp: ["pre-release","staff"],
			thirdParty: {
				tcgplayer: 187216
			}
		}
	],

	retreat: 0
}

export default card
