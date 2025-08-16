import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
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
		en: "Blitzle",
		fr: "Zébibron",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sprint",
				fr: "Sprint",
				es: "Esprint",
				it: "Sprint",
				pt: "Corrida",
				de: "Sprint"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard your hand and draw 4 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser votre main et piocher 4 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar las cartas de tu mano y robar 4 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare le carte che hai in mano e pescare quattro carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar a sua mão e comprar 4 cartas.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du deine Handkarten auf deinen Ablagestapel legen und 4 Karten ziehen."
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
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Raio de Cabeça",
				de: "Kopf-Blitz"
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

	thirdParty: {
		cardmarket: 365720,
		tcgplayer: 178891
	}
}

export default card
