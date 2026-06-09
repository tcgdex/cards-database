import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [458],
	set: Set,

	name: {
		en: "Mantyke",
		fr: "Babimanta",
		es: "Mantyke",
		it: "Mantyke",
		pt: "Mantyke",
		de: "Mantirps"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Buoyant Healing",
			fr: "Soin Flottant",
			es: "Curación Boyante",
			it: "Galleggiacura",
			pt: "Cura Flutuante",
			de: "Treibende Heilung"
		},

		effect: {
			en: "Heal 120 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 120 dégâts de l'un de vos Pokémon de Banc.",
			es: "Cura 120 puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da 120 danni.",
			pt: "Cure 120 pontos de dano de 1 dos seus Pokémon no Banco.",
			de: "Heile 120 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		en: "It swims along with a school of Remoraid, and they'll all fight together to repel attackers.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740732,
				tcgplayer: 523870,
				cardtrader: 265584
			}
		},
	],

	illustrator: "rika",

	
}

export default card
