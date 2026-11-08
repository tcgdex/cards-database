import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 140,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fairy Feast",
				'fr-fr': "Festin Féérique",
				'es-es': "Festín Feérico",
				'it-it': "Festa Fatata",
				'pt-br': "Banquete de Fadas",
				'de-de': "Feenschmaus"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 30 damage from each of your Fairy Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à chacun de vos Pokémon Fairy.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 30 pontos de dano de cada um dos seus Pokémon Fairy.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 30 Schadenspunkte bei jedem deiner Fairy-Pokémon heilen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As everyone knows, it visits peaceful regions, bringing them gifts of kindness and sweet blessings.",
	},

	thirdParty: {
		cardmarket: 372425,
		tcgplayer: 189236
	}
}

export default card
