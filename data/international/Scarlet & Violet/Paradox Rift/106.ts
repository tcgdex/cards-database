import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [973],
	set: Set,

	name: {
		'en-us': "Flamigo",
		'fr-fr': "Flamenroule",
		'es-es': "Flamigo",
		'it-it': "Flamigo",
		'pt-br': "Flamigo",
		'de-de': "Flaminkno"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Combat Beak",
			'fr-fr': "Bec Combatif",
			'es-es': "Pico Combate",
			'it-it': "Combattibecco",
			'pt-br': "Bico de Combate",
			'de-de': "Gefechtsschnabel"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740621,
				tcgplayer: 523778,
				cardtrader: 265217
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740621,
				tcgplayer: 523778,
				cardtrader: 265217
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
