import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [455],
	set: Set,

	name: {
		'en-us': "Carnivine",
		'fr-fr': "Vortente",
		'es-es': "Carnivine",
		'it-it': "Carnivine",
		'pt-br': "Carnivine",
		'de-de': "Venuflibis"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Nosh",
			'fr-fr': "Casse-Croûte",
			'es-es': "Piscolabis",
			'it-it': "Spuntino",
			'pt-br': "Mordiscar",
			'de-de': "Snack"
		},

		effect: {
			'en-us': "Heal 40 damage from this Pokémon.",
			'fr-fr': "Soignez 40 dégâts de ce Pokémon.",
			'es-es': "Cura 40 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 40 danni.",
			'pt-br': "Cure 40 pontos de dano deste Pokémon.",
			'de-de': "Heile 40 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Loom Over",
			'fr-fr': "Menacer",
			'es-es': "Cernirse",
			'it-it': "Presenza Minacciosa",
			'pt-br': "Pairar Sobre",
			'de-de': "Schattenseite"
		},

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "130-"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785860,
				tcgplayer: 567233
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785860,
				tcgplayer: 567233
			}
		},
	],

	illustrator: "Mousho",

}

export default card
