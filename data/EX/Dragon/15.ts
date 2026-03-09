import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon",
		de: "Libelldra"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		330,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sand Guard",
				fr: "Défense de sable",
				de: "Sandwache"
			},
			effect: {
				en: "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.",
				fr: "Lorsqu'une attaque de votre adversaire inflige des dégâts à Libegon (après application de la Faiblesse et de la Résistance), lancez une pièce. Si c'est face, les dégâts sont réduits de 20.",
				de: "Immer wenn Libelldra durch einen generischen Angriff Schaden zugefügt würde (nachdem Schwäche und Resistenz verrechnet wurden), wirf 1 Münze. Bei 'Kopf' wird der Schaden um 20 Schadenspunkte reduziert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Tranch'air",
				de: "Luftschlitzer"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy card attached to Flygon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée à Libegon.",
				de: "Wirf 1 Münze. Entferne bei 'Zahl' 1 Energiekarte von Libelldra."
			},
			damage: 60,

		},
	],


	retreat: 2,

	thirdParty: {
		tcgplayer: 85522,
		cardmarket: 275881
	}
}

export default card
