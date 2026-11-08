import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		'en-us': "Bronzong",
		'fr-fr': "Archéodong",
		'es-es': "Bronzong",
		'it-it': "Bronzong",
		'pt-br': "Bronzong",
		'de-de': "Bronzong"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Gravitational Drop",
			'fr-fr': "Chute Gravitationnelle",
			'es-es': "Caída Gravitacional",
			'it-it': "Caduta Gravitazionale",
			'pt-br': "Queda Gravitacional",
			'de-de': "Gravitationsfall"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674139,
				tcgplayer: 284042
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674139,
				tcgplayer: 284042
			}
		},
	],
}

export default card
