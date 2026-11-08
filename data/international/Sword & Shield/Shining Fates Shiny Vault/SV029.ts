import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [834],
	set: Set,

	name: {
		'fr-fr': "Torgamord",
		'en-us': "Drednaw",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'pt-br': "Drednaw",
		'de-de': "Kamalm"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Khélocrok",
		'en-us': "Chewtle"
	},

	attacks: [{
		name: {
			'fr-fr': "Étau Mordant",
			'en-us': "Vise Bite",
			'es-es': "Mordisco Atornillador",
			'it-it': "Serramorso",
			'pt-br': "Mordida Compressora",
			'de-de': "Klammerbiss"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Croque Fort",
			'en-us': "Jaw Lock",
			'es-es': "Presa Maxilar",
			'it-it': "Morsostretto",
			'pt-br': "Trava de Mandíbula",
			'de-de': "Fesselbiss"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539533,
				tcgplayer: 232382
			}
		},
	],
}

export default card
