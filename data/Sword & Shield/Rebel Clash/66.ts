import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [738],

	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt",
		de: "Donarion"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante",
				es: "Tormenta Recia",
				it: "Tempestona",
				pt: "Tempestade Poderosa",
				de: "Mächtiger Sturm"
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada a todos os seus Pokémon.",
				de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Energie 20 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt Beam",
				fr: "Secousse Tonnerre Lumineuse",
				es: "Rayo Sacudida Atronadora",
				it: "Raggio Scoppiotuono",
				pt: "Feixe de Choque do Trovão",
				de: "Donnerrüttlerstrahl"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 150,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It builds up electricity in its abdomen, focuses it through its jaws, and then fires the electricity off in concentrated beams."
	},

	thirdParty: {
		cardmarket: 457763,
		tcgplayer: 213149
	}
}

export default card
