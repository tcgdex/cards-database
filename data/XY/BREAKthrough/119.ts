import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Hoothoot",
		fr: "Hoothoot",
		es: "Hoothoot",
		it: "Hoothoot",
		pt: "Hoothoot",
		de: "Hoothoot"
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
				en: "Proclaim the Night",
				fr: "Proclamation Nocturne",
				es: "Proclamar la Noche",
				it: "Nottequi",
				pt: "Proclamar a Noite",
				de: "Verkünder der Nacht"
			},
			effect: {
				en: "Your opponent can't play any Item cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ninguna carta de Objeto de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare carte Strumento dalla sua mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhum card de Item da mão dele ou dela durante a próxima vez de jogar desse oponente.",
				de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten von seiner Hand spielen."
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

	thirdParty: {
		cardmarket: 286365,
		tcgplayer: 107238
	}
}

export default card
