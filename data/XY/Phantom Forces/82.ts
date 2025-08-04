import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Girafarig",
		fr: "Girafarig",
		es: "Girafarig",
		it: "Girafarig",
		pt: "Girafarig",
		de: "Girafarig"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		203,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
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
				en: "Psybite",
				fr: "Morsure Psy",
				es: "Psicomordisco",
				it: "Psicomorso",
				pt: "Mordida Psíquica",
				de: "Psibiss"
			},
			effect: {
				en: "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Psychic unida a él, este ataque hace 30 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Psychic assegnate, questo attacco infligge 30 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Psychic ligada a ele, esse ataque causará 30 de danos adicionais.",
				de: "Wenn an dieses Pokémon bereits Psychic-Energie angelegt ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281888,
		tcgplayer: 94650
	}
}

export default card
