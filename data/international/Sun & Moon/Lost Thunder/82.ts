import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sprint",
				'fr-fr': "Sprint",
				'es-es': "Esprint",
				'it-it': "Sprint",
				'pt-br': "Corrida",
				'de-de': "Sprint"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard your hand and draw 4 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser votre main et piocher 4 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar las cartas de tu mano y robar 4 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare le carte che hai in mano e pescare quattro carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar a sua mão e comprar 4 cartas.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du deine Handkarten auf deinen Ablagestapel legen und 4 Karten ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Head Bolt",
				'fr-fr': "Éclair Frontal",
				'es-es': "Rayo de Cabeza",
				'it-it': "Zuccalampo",
				'pt-br': "Raio de Cabeça",
				'de-de': "Kopf-Blitz"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
	},

	thirdParty: {
		cardmarket: 365720,
		tcgplayer: 178891
	}
}

export default card
