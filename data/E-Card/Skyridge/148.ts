import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Golem",
		de: "Geowaz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Graveler",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Grass, Fire, or Fighting basic Energy card from your hand to Golem, Golem's type (color) becomes the same as that type of energy until the end of the turn.",
				de: "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Geowaz anlegst, ändert sich Geowaz Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw",
				de: "Steinwurf"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Fire",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Earth Bomb",
				de: "Erdbombe"
			},
			effect: {
				en: "Golem does 20 damage to itself. This attack also does 10 damage to each Benched Pokémon (yours and your opponents). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Geowaz fügt sich selber 20 Schadenspunkte zu. Deiser Angriff fügt zudem jedem Pokémon auf der Bank 10 Schadnepunkte zu (deinen und den gegnerischen Pokémon). (Wende keine Schwäche oder resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275406,
		tcgplayer: 85825
	}
}

export default card
