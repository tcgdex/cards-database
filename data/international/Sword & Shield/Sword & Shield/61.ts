import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Drednaw",
		'fr-fr': "Torgamord",
		'es-es': "Drednaw",
		'it-it': "Drednaw",
		'pt-br': "Drednaw",
		'de-de': "Kamalm"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Chewtle",
		'fr-fr': "Khélocrok",
		'es-es': "Chewtle",
		'it-it': "Chewtle",
		'pt-br': "Chewtle",
		'de-de': "Kamehaps"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vise Bite",
				'fr-fr': "Étau Mordant",
				'es-es': "Mordisco Atornillador",
				'it-it': "Serramorso",
				'pt-br': "Mordida Compressora",
				'de-de': "Klammerbiss"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jaw Lock",
				'fr-fr': "Croque Fort",
				'es-es': "Presa Maxilar",
				'it-it': "Morsostretto",
				'pt-br': "Trava de Mandíbula",
				'de-de': "Fesselbiss"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
				'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
				'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This Pokémon rapidly extends its retractable neck to sink its sharp fangs into distant enemies and take them down."
	},

	dexId: [834],

	thirdParty: {
		cardmarket: 436439,
		tcgplayer: 208358
	}
}

export default card
