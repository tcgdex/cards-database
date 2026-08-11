import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot",
		'es-es': "Hoothoot",
		'it-it': "Hoothoot",
		'pt-br': "Hoothoot",
		'de-de': "Hoothoot"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		163,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Proclaim the Night",
				'fr-fr': "Proclamation Nocturne",
				'es-es': "Proclamar la Noche",
				'it-it': "Nottequi",
				'pt-br': "Proclamar a Noite",
				'de-de': "Verkünder der Nacht"
			},
			effect: {
				'en-us': "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				'fr-fr': "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
				'es-es': "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				'it-it': "Il tuo avversario non può giocare carte Strumento dalla sua mano durante il suo prossimo turno.",
				'pt-br': "Seu oponente não poderá jogar nenhum card de Item da mão dele ou dela durante a próxima vez de jogar desse oponente.",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Itemkarten von seiner Hand spielen."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It always stand on one foot. It changes feet so fast, the movement can rarely be seen.",
	},

	thirdParty: {
		cardmarket: 286365,
		tcgplayer: 107238
	}
}

export default card
