import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Huntail",
		'fr-fr': "Serpang",
		'es-es': "Huntail",
		'it-it': "Huntail",
		'pt-br': "Huntail",
		'de-de': "Aalabyss"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Big Bite",
				'fr-fr': "Grosse Morsure",
				'es-es': "Gran Mordisco",
				'it-it': "Grande Morso",
				'pt-br': "Mordidona",
				'de-de': "Mächtiger Biss"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dangerous Bite",
				'fr-fr': "Morsure Dangereuse",
				'es-es': "Mordisco Peligroso",
				'it-it': "Morso Insidioso",
				'pt-br': "Mordida Perigosa",
				'de-de': "Gefährlicher Biss"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Básico, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives deep in the sea. With a tail shaped like a small fish, it attracts unsuspecting prey.",
	},

	thirdParty: {
		cardmarket: 361289,
		tcgplayer: 170859
	}
}

export default card
