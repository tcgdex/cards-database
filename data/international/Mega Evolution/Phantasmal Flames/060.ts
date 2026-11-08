import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'es-es': "Carvanha",
		'es-mx': "Carvanha",
		'de-de': "Kanivanha",
		'it-it': "Carvanha",
		'pt-br': "Carvanha"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [318],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Reckless Charge",
			'fr-fr': "Attaque Imprudente",
			'es-es': "Carga Descuidada",
			'es-mx': "Carga Temeraria",
			'de-de': "Waghalsiger Sturmangriff",
			'it-it': "Carica Avventata",
			'pt-br': "Carga Indomável"
		},

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
			'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
	},

	illustrator: "Shin Nagasawa",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857635,
				tcgplayer: 662140,
				cardtrader: 356844
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857635,
				tcgplayer: 662140,
				cardtrader: 356844
			}
		},
	],	
}

export default card
