import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Screech",
				'fr-fr': "Grincement",
				'es-es': "Chirrido",
				'it-it': "Stridio",
				'pt-br': "Agudo",
				'de-de': "Kreideschrei"
			},
			effect: {
				'en-us': "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques hacen 20 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, il Pokémon difensore subisce 20 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 20 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 20 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'es-es': "Furia",
				'it-it': "Ira",
				'pt-br': "Ira",
				'de-de': "Raserei"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour.",
	},

	thirdParty: {
		cardmarket: 361316,
		tcgplayer: 170893
	}
}

export default card
