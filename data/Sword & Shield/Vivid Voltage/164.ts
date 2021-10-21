import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Stone Fighting Energy",
		fr: "Énergie Fighting Pierre",
		es: "Energía Fighting Piedra",
		it: "Energia Fighting Granitica",
		pt: "Energia Fighting Pétrea",
		de: "Stein-Fighting-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Fighting Energy.\n\nThe Fighting Pokémon this card is attached to takes 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Fighting.\n\nLe Pokémon Fighting auquel cette carte est attachée subit 20 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Fighting.\n\nLos ataques de los Pokémon de tu rival hacen 20 puntos de daño menos al Pokémon Fighting al que esté unida esta carta\n(después de aplicar Debilidad y Resistencia).",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Fighting.\n\nIl Pokémon Fighting a cui è assegnata questa carta subisce 20 danni in meno dagli attacchi dei Pokémon del tuo avversario,\ndopo aver applicato debolezza e resistenza.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Fighting.\n\nO Pokémon Fighting ao qual esta carta está ligada recebe 20 pontos de dano a menos dos ataques dos Pokémon do seu oponente\n(depois de aplicar Fraqueza e Resistência).",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Fighting-Energie.\n\nDem Fighting-Pokémon, an das diese Karte angelegt ist, werden durch Attacken von Pokémon deines Gegners 20 Schadenspunkte weniger zugefügt\n(nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	energyType: "Special",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
