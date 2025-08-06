import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [598],

	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
		es: "Ferroseed",
		it: "Ferroseed",
		pt: "Ferroseed",
		de: "Kastadur"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Swift Swing",
				fr: "Vacillement Véloce",
				es: "Cambio Súbito",
				it: "Giracolpo",
				pt: "Balanço Veloz",
				de: "Temposchwung"
			},
			effect: {
				en: "This attack does 30 damage for each Metal Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie Metal attachée à ce Pokémon. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Metal unida a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Questo attacco infligge 30 danni per ogni Energia Metal assegnata a questo Pokémon. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Este ataque causa 30 pontos de dano para cada Energia Metal ligada a este Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Metal-Energie 30 Schadenspunkte zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
	},

	thirdParty: {
		cardmarket: 512330,
		tcgplayer: 226578
	}
}

export default card
