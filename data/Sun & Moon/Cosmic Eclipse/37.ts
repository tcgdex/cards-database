import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Pyroar",
		fr: "Némélios",
		es: "Pyroar",
		it: "Pyroar",
		pt: "Pyroar",
		de: "Pyroleo"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 130,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Swirling Inferno",
				fr: "Torsade Infernale",
				es: "Remolino Infernal",
				it: "Turbine Infernale",
				pt: "Turbilhão Infernal",
				de: "Wirbelndes Inferno"
			},
			effect: {
				en: "Discard all Pokémon Tool cards and Special Energy from each of your opponent’s Pokémon.",
				fr: "Défaussez toutes les cartes Outil Pokémon et l’Énergie spéciale de chacun des Pokémon de votre adversaire.",
				es: "Descarta todas las cartas de Herramienta Pokémon y Energías Especiales de cada uno de los Pokémon de tu rival.",
				it: "Scarta tutte le carte Oggetto Pokémon e le Energie speciali assegnate a ciascuno dei Pokémon del tuo avversario.",
				pt: "Descarte todas as cartas de Ferramenta Pokémon e Energias Especiais de cada um dos Pokémon do seu oponente.",
				de: "Lege alle Pokémon-Ausrüstungen und Spezial-Energien von jedem Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407834,
		tcgplayer: 201214
	}
}

export default card
