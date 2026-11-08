import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'es-es': "Golem",
		'it-it': "Golem",
		'pt-br': "Golem",
		'de-de': "Geowaz"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 180,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steamroller",
				'fr-fr': "Bulldoboule",
				'es-es': "Rodillo de Púas",
				'it-it': "Rulloduro",
				'pt-br': "Rolo Compressor",
				'de-de': "Quetschwalze"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 100,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Slam",
				'fr-fr': "Tacle Lourd",
				'es-es': "Cuerpo Pesado",
				'it-it': "Pesobomba",
				'pt-br': "Golpe Pesado",
				'de-de': "Rammboss"
			},
			effect: {
				'en-us': "This attack does 20 less damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte weniger mal der Anzahl der Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "180-",

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
		'en-us': "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
	},

	thirdParty: {
		cardmarket: 372380,
		tcgplayer: 189188
	}
}

export default card
