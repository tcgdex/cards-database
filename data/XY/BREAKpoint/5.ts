import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Kricketot",
		fr: "Crikzik",
		es: "Kricketot",
		it: "Kricketot",
		pt: "Kricketot",
		de: "Zirpurze"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		401,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bug Hunch",
				fr: "Insec'tuition",
				es: "Instinto Bicho",
				it: "Sensinsetto",
				pt: "Pressentimento de Inseto",
				de: "Käferwahrnehmung"
			},
			effect: {
				en: "Search your deck for up to 3 Grass Pokémon, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 Pokémon Grass dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 Pokémon Grass, enséñalos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a tre Pokémon Grass, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 3 Pokémon Grass, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 3 Grass-Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
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

	thirdParty: {
		cardmarket: 288180
	}
}

export default card
