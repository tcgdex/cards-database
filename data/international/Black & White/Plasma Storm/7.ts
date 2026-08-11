import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'es-es': "Cherrim",
		'it-it': "Cherrim",
		'pt-br': "Cherrim",
		'de-de': "Kinoso"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fair-Weather Heal",
				'fr-fr': "Soin des Beaux Jours",
				'es-es': "Cura del Buen Tiempo",
				'it-it': "Curabeltempo",
				'pt-br': "Cura Bom Tempo",
				'de-de': "Gut-Wetter-Heilung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Grass Energy attached to it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à 1 de vos Pokémon auquel de l’Énergie Grass est attachée.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Grass unida a él.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare da 20 danni uno dei tuoi Pokémon che ha Energie Grass assegnate.",
				'pt-br': "Uma vez na sua vez de jogar (antes de atacar), você poderá curar 20 de danos de 1 dos seus Pokémon com qualquer Energia Grass ligada a ele.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen, an das Grass-Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Random Peck",
				'fr-fr': "Coup d'Bec au Pif",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body.",
	},

	thirdParty: {
		cardmarket: 280747,
		tcgplayer: 84258
	}
}

export default card
