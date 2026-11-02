import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Rétorsion",
				de: "Rache"
			},
			effect: {
				en: "Does 10 more damage for each Pokémon in your discard pile.",
				fr: "Inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
				de: "Dieser Angriff fügt für jedes Pokémon in deinem Ablagestapel 10 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Tackle",
				fr: "Charge Énergétique",
				de: "Hitze Tackle"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
				de: "Dieses Pokémon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Inhaled air is carried to its flame sac, heated, and exhaled as fire that reaches over 3,000 degrees F.",
		de: "Speichert Atemluft in einer Feuerlunge. Dort erhitzt es sie auf 1 700 Grad, um sie als Flammen auszuspucken."
	},

	thirdParty: {
		cardmarket: 280890,
		tcgplayer: 85502
	}
}

export default card
