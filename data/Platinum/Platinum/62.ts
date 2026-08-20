import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shieldon",
		fr: "Dinoclier",
		de: "Schilterus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [410],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		en: "Armor Fossil",
		fr: "Fossile Armure",
		de: "Panzerfossil"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Endure",
				fr: "Ténacité",
				de: "Ausdauer"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Shieldon would be Knocked Out by damage from an attack, Shieldon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Lancez une pièce. Si c'est face, lors du prochain tour de votre adversaire, si Dinoclier est mis K.O par les dégâts d'une attaque, il n'est pas mis K.O mais il ne lui reste que 10 PV.",
				de: "Wirf 1 Münze. Bei „Kopf“ wird Schilterus, wenn es im nächsten Zug deines Gegners durch Schaden eines Angriffs kampfunfähig würde, nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				fr: "Éboulement",
				de: "Steinhagel"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It is outstandingly armored. As a result, it can eat grass and berries without having to fight.",
		de: "Es ist sehr gut gepanzert und muss daher während des Essens von Gras und Beeren keinen Kampf fürchten."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89151,
				cardmarket: 278483
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278483,
				tcgplayer: 89151
			}
		}
	],

}

export default card
