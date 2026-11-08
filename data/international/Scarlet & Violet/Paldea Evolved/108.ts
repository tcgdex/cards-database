import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'fr-fr': "Tauros de Paldea",
		'en-us': "Paldean Tauros",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Cornes Furieuses",
			'en-us': "Raging Horns",
			'es-es': "Cuernos Embravecidos",
			'it-it': "Corna Furiose",
			'pt-br': "Chifres Indomáveis",
			'de-de': "Rasende Hörner"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Offensive Combative",
			'en-us': "Combat Tackle",
			'es-es': "Placaje Combate",
			'it-it': "Azione Scontro",
			'pt-br': "Investida de Combate",
			'de-de': "Gefechts-Tackle"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715583,
				tcgplayer: 497523,
				cardtrader: 248754
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715583,
				tcgplayer: 497523,
				cardtrader: 248754
			}
		},
	],

	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "This kind of Tauros, known as the Combat Breed, is distinguished by its thick, powerful muscles and its fierce disposition.",
	},
}

export default card
