import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Paldean Tauros",
		'fr-fr': "Tauros de Paldea",
		'es-es': "Tauros de Paldea",
		'it-it': "Tauros di Paldea",
		'pt-br': "Tauros de Paldea",
		'de-de': "Paldea-Tauros"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Raging Horns",
			'fr-fr': "Cornes Furieuses",
			'es-es': "Cuernos Embravecidos",
			'it-it': "Corna Furiose",
			'pt-br': "Chifres Indomáveis",
			'de-de': "Rasende Hörner"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blaze Dash",
			'fr-fr': "Ruée Flamboyante",
			'es-es': "Embestida Ardiente",
			'it-it': "Corsa Infuocata",
			'pt-br': "Arremetida de Labareda",
			'de-de': "Flammenspurt"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751650,
				tcgplayer: 534485,
				cardtrader: 274295
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "People call this kind of Tauros the Blaze Breed due to the hot air it snorts from its nostrils. Its three tails are intertwined.",
	},

}

export default card
