import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],
	
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kabuto",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Primal Scythe",
				de: "Urzeitsense"
			},
			effect: {
				en: "You may discard Helix Fossil, Dome Fossil, or Old Amber from your hand. If you do, this attack does 20 damage plus 50 more damage.",
				de: "Du kannst 1 Helixfossil-, Domfossil- oder Altbernstein-Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Slide",
				de: "Steinhagel"
			},
			effect: {
				en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278876,
		tcgplayer: 86400
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
