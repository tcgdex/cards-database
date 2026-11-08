import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'es-es': "Manaphy",
		'it-it': "Manaphy",
		'pt-br': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blessings of the Deep",
				'fr-fr': "Bénédiction des Profondeurs",
				'es-es': "Bendiciones del Abismo",
				'it-it': "Preghiera dagli Abissi",
				'pt-br': "Bênçãos Abissais",
				'de-de': "Segen der Tiefsee"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any Water Energy attached to it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à l’un de vos Pokémon auquel de l’Énergie Water est attachée.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes curar 20 puntos de daño a 1 de tus Pokémon que tenga alguna Energía Water unida a él.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi curare da 20 danni uno dei tuoi Pokémon che ha Energie Water assegnate.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode curar 20 pontos de dano de 1 dos seus Pokémon que tiver alguma Energia Water ligada a ele.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 20 Schadenspunkte bei 1 deiner Pokémon heilen, an das mindestens 1 Water-Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d’Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 30,

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
		'en-us': "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
	},

	thirdParty: {
		cardmarket: 302163,
		tcgplayer: 146679
	}
}

export default card
