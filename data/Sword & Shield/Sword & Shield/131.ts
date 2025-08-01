import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
		es: "Ferrothorn",
		it: "Ferrothorn",
		pt: "Ferrothorn",
		de: "Tentantel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

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

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple Éclate",
				es: "Golpe Triple",
				it: "Tripla Schiacciata",
				pt: "Pancada Tripla",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Energy Slap",
				fr: "Volée Énergique",
				es: "Bofetón Energético",
				it: "Schiaffo Energetico",
				pt: "Tapa Energético",
				de: "Energiehieb"
			},
			effect: {
				en: "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Vous pouvez déplacer toute l'Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				es: "Puedes mover todas las Energías de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Puoi spostare tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Você pode mover todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Du kannst alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank verschieben."
			},
			damage: 100,

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

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
	},

	dexId: [598],

	thirdParty: {
		cardmarket: 436764
	}
}

export default card
