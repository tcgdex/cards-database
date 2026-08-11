import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'fr-fr': "Noadkoko",
		'en-us': "Exeggutor",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Noeunoeuf",
		'en-us': "Exeggcute",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Psyko",
			'en-us': "Psychic",
			'es-es': "Psíquico",
			'it-it': "Psichico",
			'pt-br': "Psíquico",
			'de-de': "Psychokinese"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "When they work together, Exeggutor's three heads can put out powerful psychic energy. Cloudy days make this Pokémon sluggish.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733698,
				tcgplayer: 516672,
				cardtrader: 261176
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733698,
				tcgplayer: 516672,
				cardtrader: 261176
			}
		},
	],

	illustrator: "Shigenori Negishi",

	
}

export default card
