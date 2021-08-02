import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		pt: "Weedle",
		de: "Hornliu"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 40,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Hunch",
				fr: "Insec’tuition",
				es: "Instinto Bicho",
				it: "Sensinsetto",
				pt: "Pressentimento de Inseto",
				de: "Käferwahrnehmung"
			},
			effect: {
				en: "Search your deck for up to 2 Grass Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 Pokémon Grass, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Grass, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Grass, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 Pokémon Grass no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Grass-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
