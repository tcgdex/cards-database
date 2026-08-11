import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana",
		'it-it': "Jynx",
		'es-es': "Jynx",
		'pt-br': "Jynx",
		'es-mx': "Jynx"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [124],

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			'en-us': "Psychic",
			'fr-fr': "Psyko",
			'de-de': "Psychokinese",
			'it-it': "Psichico",
			'es-es': "Psíquico",
			'pt-br': "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851128,
				tcgplayer: 654396
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851128,
				tcgplayer: 654396
			}
		},
	],
}

export default card
