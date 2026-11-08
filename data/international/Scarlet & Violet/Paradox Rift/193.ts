import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [311],
	set: Set,

	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'es-es': "Plusle",
		'it-it': "Plusle",
		'pt-br': "Plusle",
		'de-de': "Plusle"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Plus Damage",
			'fr-fr': "Dégâts Plus",
			'es-es': "Más Daño",
			'it-it': "Più Danni",
			'pt-br': "Dano Demasiado",
			'de-de': "Plus-Schaden"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740736,
				tcgplayer: 523874,
				cardtrader: 265388
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
