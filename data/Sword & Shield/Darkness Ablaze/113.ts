import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "​Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nickit",
		fr: "Goupilou"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
				es: "Maquinación",
				it: "Congiura",
				pt: "Trama Maldosa",
				de: "Ränkeschmied"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Sharp Fang",
				fr: "Croc Aiguisé",
				es: "Colmillo Afilado",
				it: "Zannaffilata",
				pt: "Presa Afiada",
				de: "Scharfe Fänge"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
