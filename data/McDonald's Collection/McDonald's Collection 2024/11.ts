import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Roaring Moon",
		fr: "Rugit-Lune",
		es: "Bramaluna",
		it: "Lunaruggente",
		pt: "Lua Estrondo",
		de: "Donnersichel"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1005],

	hp: 140,

	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				en: "Assaulting Fangs",
				fr: "Crocs Assaillants",
				es: "Colmillos Agresores",
				it: "Zanne d'Assalto",
				pt: "Presas de Assalto",
				de: "Angriffsfänge"
			},
			damage: 30,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				en: "Frenzied Gouging",
				fr: "Éventration Frénétique",
				es: "Desgarro Frenético",
				it: "Sventramento Frenetico",
				pt: "Perfuração Frenética",
				de: "Rasende Aushöhlung"
			},
			damage: 190,
			effect: {
				en: "This Pokémon also does 60 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
				es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 60 danni a se stesso.",
				pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

