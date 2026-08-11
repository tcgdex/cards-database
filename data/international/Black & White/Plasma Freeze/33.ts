import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Magnetic Draw",
				'fr-fr': "Pioche Magnétique",
				'es-es': "Magnetorobo",
				'it-it': "Magnetopesca",
				'pt-br': "Comprada Magnética",
				'de-de': "Magnet-Zieher"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw cards until you have 4 cards in your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 4 cartes en main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar cartas hasta que tengas 4 cartas en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare delle carte fino ad averne quattro in mano.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá comprar cards até ter 4 cards na mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du so viele Karten ziehen, bis du 4 Karten auf der Hand hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
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

	retreat: 1,

	description: {
		'en-us': "It is known to drift on winds if it is bloated to bursting with stored electricity.",
	},

	thirdParty: {
		cardmarket: 280911,
		tcgplayer: 85162
	}
}

export default card
