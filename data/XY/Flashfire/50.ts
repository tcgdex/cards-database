import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Flash Claw",
				fr: "Flash-Griffe",
				es: "Garra Fugaz",
				it: "Artiglioflash",
				pt: "Garra Lampejante",
				de: "Flotte Pfote"
			},
			effect: {
				en: "Your opponent discards a card from his or her hand.",
				fr: "Votre adversaire défausse une carte de sa main.",
				es: "Tu rival descarta 1 carta de su mano.",
				it: "Il tuo avversario scarta una carta che ha in mano.",
				pt: "Seu oponente descarta um card da própria mão.",
				de: "Dein Gegner legt 1 Karte von seiner Hand auf seinen Ablagespapel."
			},

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281533
	}
}

export default card
