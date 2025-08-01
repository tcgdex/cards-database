import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
		es: "Seismitoad",
		it: "Seismitoad",
		pt: "Seismitoad",
		de: "Branawarz"
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
		en: "Palpitoad",
		fr: "Batracné",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bulldoze",
				fr: "Piétisol",
				es: "Terratemblor",
				it: "Battiterra",
				pt: "Tremor",
				de: "Dampfwalze"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes buscar en tu baraja 1 carta, barajar las cartas de tu baraja y luego poner esa carta en la parte superior de tu baraja.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi cercare una carta nel tuo mazzo, rimischiare le carte del tuo mazzo e poi mettere quella carta in cima al mazzo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode procurar por 1 carta no seu baralho, embaralhar o seu baralho e colocar aquela carta como a primeira carta do seu baralho.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Deck nach 1 Karte durchsuchen, dein Deck mischen und anschließend jene Karte auf dein Deck legen."
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
				en: "Tremulous Fist",
				fr: "Poing Trémulant",
				es: "Puño Trémulo",
				it: "Pugno Tremolante",
				pt: "Punhos Trêmulos",
				de: "Schüttelfaust"
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca que tenga algún contador de daño sobre él.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella tua panchina che abbia dei segnalini danno.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada um dos seus Pokémon no Banco que tiver algum contador de dano nele.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Pokémon auf deiner Bank zu, auf denen mindestens 1 Schadensmarke liegt."
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

	thirdParty: {
		cardmarket: 408234
	}
}

export default card
