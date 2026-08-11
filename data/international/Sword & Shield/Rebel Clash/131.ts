import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [476],

	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Gravitational Drop",
				'fr-fr': "Chute Gravitationnelle",
				'es-es': "Caída Gravitacional",
				'it-it': "Caduta Gravitazionale",
				'pt-br': "Queda Gravitacional",
				'de-de': "Gravitationsfall"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				'de-de': "Diese Attacke fügt für jedes Colorless in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	hp: 140,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458053,
				tcgplayer: 213227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458053,
				tcgplayer: 213227
			}
		},
	],
}

export default card
