import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
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
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Flash Claw",
				'fr-fr': "Flash-Griffe",
				'es-es': "Garra Fugaz",
				'it-it': "Artiglioflash",
				'pt-br': "Garra Lampejante",
				'de-de': "Flotte Pfote"
			},
			effect: {
				'en-us': "Your opponent discards a card from his or her hand.",
				'fr-fr': "Votre adversaire défausse une carte de sa main.",
				'es-es': "Tu rival descarta 1 carta de su mano.",
				'it-it': "Il tuo avversario scarta una carta che ha in mano.",
				'pt-br': "Seu oponente descarta um card da própria mão.",
				'de-de': "Dein Gegner legt 1 Karte von seiner Hand auf seinen Ablagespapel."
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

	description: {
		'en-us': "It feeds on eggs stolen from nests. Its sharply hooked claws rip vulnerable spots on prey.",
	},

	thirdParty: {
		cardmarket: 281533,
		tcgplayer: 91183
	}
}

export default card
