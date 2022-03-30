import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Pidove",
		fr: "Poichigeon",
		es: "Pidove",
		it: "Pidove",
		pt: "Pidove",
		de: "Dusselgurr"
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		519,
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
			],
			name: {
				en: "Homing Pidove",
				fr: "Poichigeon Voyageur",
				es: "Pidove Mensajero",
				it: "Pidove Viaggiatore",
				pt: "Pidove Localizador",
				de: "Dusselgurr-Peiler"
			},
			effect: {
				en: "Look at the top card of your deck. Then, you may shuffle your deck.",
				fr: "Regardez la carte du dessus de votre deck. Ensuite, vous pouvez mélanger votre deck.",
				es: "Mira la primera carta de tu baraja. Después, puedes barajar las cartas de tu baraja.",
				it: "Guarda la carta in cima al tuo mazzo. Poi, puoi rimischiare le carte del tuo mazzo.",
				pt: "Olhe o card de cima do seu baralho. Em seguida, você pode embaralhar seus cards.",
				de: "Schau dir die oberste Karte deines Decks an. Anschließend kannst du dein Deck mischen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 20,

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



}

export default card
