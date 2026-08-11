import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'es-es': "Hippowdon",
		'it-it': "Hippowdon",
		'pt-br': "Hippowdon",
		'de-de': "Hippoterus"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		450,
	],

	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Resistance Desert",
				'fr-fr': "Résistance Désertique",
				'es-es': "Resistencia Desierto",
				'it-it': "Silicoscudo",
				'pt-br': "Deserto de Resistência",
				'de-de': "Wüste des Widerstands"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon-EX.",
				'es-es': "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon-EX.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon-EX.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, impedirá todos os efeitos dos ataques, inclusive danos, feitos a este Pokémon por Pokémon-EX.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Pokémon-EX während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-Edge",
				'fr-fr': "Damoclès",
				'es-es': "Doble Filo",
				'it-it': "Sdoppiatore",
				'pt-br': "Faca de Dois Gumes",
				'de-de': "Risikotackle"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Esse Pokémon causa 20 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
	},

	thirdParty: {
		cardmarket: 273619,
		tcgplayer: 95986
	}
}

export default card
