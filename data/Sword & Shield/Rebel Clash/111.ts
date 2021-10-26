import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Kick",
				fr: "Ultimawashi",
				es: "Megapatada",
				it: "Megacalcio",
				pt: "Megachute",
				de: "Megakick"
			},

			damage: 80,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Press",
				fr: "Étau Puissant",
				es: "Constricción Poderosa",
				it: "Vigorstretta",
				pt: "Compressão Poderosa",
				de: "Powerdruck"
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached (in addition to this attack's cost), this attack does 60 more damage.",
				fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha almeno un'Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Fighting"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It stands in grasslands, watching the sun's descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks."
	}
}

export default card
