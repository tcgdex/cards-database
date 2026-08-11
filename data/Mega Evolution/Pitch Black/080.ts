import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Misty's Vitality",
		fr: "Vitalité d'Ondine",
		es: "Vitalidad de Misty",
		'es-mx': "Vitalidad de Misty",
		de: "Mistys Vitalität",
		it: "Vitalità di Misty",
		pt: "Vitalidade da Misty"
	},

	illustrator: "En Morikura",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		en: "Search your deck for up to 4 Basic {W} Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck. Your turn ends.",
		fr: "Cherchez dans votre deck jusqu'à 4 cartes Énergie {W} de base, puis attachez-les à l'un de vos Pokémon. Mélangez ensuite votre deck. Votre tour se termine.",
		es: "Busca en tu baraja hasta 4 cartas de Energía {W} Básica y únelas a uno de tus Pokémon. Después, baraja las cartas de tu baraja. Tu turno termina.",
		'es-mx': "Busca en tu mazo hasta 4 cartas de Energía {W} Básica y únelas a 1 de tus Pokémon. Después, baraja tu mazo. Tu turno termina.",
		de: "Durchsuche dein Deck nach bis zu 4 Basis-{W}-Energiekarten und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck. Dein Zug endet.",
		it: "Cerca nel tuo mazzo fino a quattro carte Energia base {W} e assegnale a uno dei tuoi Pokémon. Poi rimischia il tuo mazzo. Il tuo turno finisce.",
		pt: "Procure por até 4 cartas de Energia {W} Básica no seu baralho e ligue-as a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho. O seu turno acaba."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895864,
				tcgplayer: 704837
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895864,
				tcgplayer: 704837
			}
		},
	],
}

export default card
