import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
		es: "Noibat",
		it: "Noibat",
		pt: "Noibat",
		de: "eF-eM"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		714,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Sound",
				fr: "Son Destructeur",
				es: "Sonido Destructivo",
				it: "Distrusuono",
				pt: "Som Destruidor",
				de: "Trümmerton"
			},
			effect: {
				en: "Your opponent reveals their hand. Discard all Item cards you find there.",
				fr: "Votre adversaire dévoile sa main. Défaussez toutes les cartes Objet que vous y trouvez.",
				es: "Tu rival enseña las cartas de su mano. Descarta todas las cartas de Objeto que encuentres entre ellas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scarta tutte le carte Strumento presenti tra esse.",
				pt: "Seu oponente revela a própria mão. Descarte todas as cartas de Item que encontrar lá.",
				de: "Dein Gegner zeigt dir seine Handkarten. Lege alle Itemkarten, die du dort findest, auf seinen Ablagestapel."
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
		cardmarket: 355613,
		tcgplayer: 165762
	}
}

export default card
