import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Telepathic Psychic Energy",
		fr: "Énergie Psychic Télépathique",
		es: "Energía Psychic Telepática",
		'es-mx': "Energía Psychic Telepática",
		de: "Telepathische Psychic-Energie",
		it: "Energia Psychic Telepatica",
		pt: "Energia Psychic Telepática"
	},

	rarity: "Rare",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {P} Energy.\nWhen you attach this card from your hand to a {P} Pokémon, search your deck for up to 2 Basic {P} Pokémon and put them onto your Bench. Then, shuffle your deck.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {P}.\nLorsque vous attachez cette carte de votre main à un Pokémon {P}, cherchez dans votre deck jusqu'à 2 Pokémon {P} de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {P}.\n\nCuando unas esta carta de tu mano a un Pokémon {P}, busca en tu baraja hasta 2 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {P}.\nCuando unas esta carta de tu mano a un Pokémon {P}, busca en tu mazo hasta 2 Pokémon {P} Básicos y ponlos en tu Banca. Después, baraja tu mazo.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {P}-Energie.\n\nWenn du diese Karte aus deiner Hand an ein {P}-Pokémon anlegst, durchsuche dein Deck nach bis zu 2 Basis-{P}-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {P}.\n\nQuando assegni questa carta dalla tua mano a un Pokémon {P}, cerca nel tuo mazzo fino a due Pokémon Base {P} e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {P}.\nQuando você ligar esta carta da sua mão a um Pokémon {P}, procure por até 2 Pokémon {P} Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho."
	},

	energyType: "Normal",
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684396,
		cardmarket: 877505
	}
}

export default card
