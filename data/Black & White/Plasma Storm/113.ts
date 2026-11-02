import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Watchog",
		fr: "Miradar",
		es: "Watchog",
		it: "Watchog",
		pt: "Watchog",
		de: "Kukmarda"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Patrat",
		fr: "Ratentif",
		de: "Nagelotz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Second Bite",
				fr: "Double Morsure",
				de: "Wunde Stelle"
			},
			effect: {
				en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				de: "Fußkick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
		de: "Es kann mit einer körpereigenen Substanz seine Augen und seinen Torso aufleuchten lassen, um Gegner zu erschrecken."
	},

	thirdParty: {
		cardmarket: 280852,
		tcgplayer: 90499
	}
}

export default card
