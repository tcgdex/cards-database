import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Seismitoad",
		'fr-fr': "Crapustule",
		'es-es': "Seismitoad",
		'it-it': "Seismitoad",
		'pt-br': "Seismitoad",
		'de-de': "Branawarz"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		537,
	],

	hp: 160,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Bulldoze",
				'fr-fr': "Piétisol",
				'es-es': "Terratemblor",
				'it-it': "Battiterra",
				'pt-br': "Tremor",
				'de-de': "Dampfwalze"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare una carta nel tuo mazzo, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta no seu baralho, embaralhar o seu baralho e colocar aquela carta como a primeira carta do seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Karte durchsuchen, dein Deck mischen und anschließend jene Karte auf dein Deck legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tremulous Fist",
				'fr-fr': "Poing Trémulant",
				'es-es': "Puño Trémulo",
				'it-it': "Pugno Tremolante",
				'pt-br': "Punhos Trêmulos",
				'de-de': "Schüttelfaust"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your Benched Pokémon that has any damage counters on it.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca que tenga algún contador de daño sobre él.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella tua panchina che abbia dei segnalini danno.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Pokémon auf deiner Bank zu, auf denen mindestens 1 Schadensmarke liegt."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It increases the power of its punches by vibrating the bumps on its fists. It can turn a boulder to rubble with one punch.",
	},

	thirdParty: {
		cardmarket: 408234,
		tcgplayer: 201149
	}
}

export default card
