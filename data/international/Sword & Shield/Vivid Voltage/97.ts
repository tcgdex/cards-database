import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [750],

	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'pt-br': "Mudsdale",
		'de-de': "Pampross"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'pt-br': "Mudbray",
		'de-de': "Pampuli"
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud Bomb",
				'fr-fr': "Boue-Bombe",
				'es-es': "Bomba Fango",
				'it-it': "Pantanobomba",
				'pt-br': "Bomba de Lama",
				'de-de': "Schlammbombe"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
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
				'en-us': "This attack does 30 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts de moins pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño menos por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in meno per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a menos para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu."
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

	retreat: 3,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Mud that hardens around a Mudsdale's legs sets harder than stone. It's so hard that it allows this Pokémon to scrap a truck with a single kick."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511905,
				tcgplayer: 226540
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511905,
				tcgplayer: 226540
			}
		},
	],
}

export default card
