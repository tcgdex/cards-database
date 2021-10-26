import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drawup Power",
				fr: "Pouvoir Bloquant",
				es: "Extraer Poder",
				it: "Prelievo Energetico",
				pt: "Poder de Içamento",
				de: "Kraft aufziehen"
			},
			effect: {
				en: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Énergie, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cat Kick",
				fr: "Coup d'Patte",
				es: "Patada Gato",
				it: "Calciogatto",
				pt: "Chute do Gato",
				de: "Katzenkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
	},

	stage: "Basic",

	description: {
		en: "It shows its cute side by chasing its own tail until it gets dizzy."
	}
}

export default card
