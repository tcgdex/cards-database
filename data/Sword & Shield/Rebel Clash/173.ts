import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Speed Lightning Energy",
		fr: "Énergie Lightning Vélocité",
		es: "Energía Lightning Velocidad",
		it: "Energia Lightning Velocità",
		pt: "Energia Lightning Acelerada",
		de: "Tempo-Lightning-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Lightning Energy.\n\nWhen you attach this card from your hand to a Lightning Pokémon, draw 2 cards.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Lightning.\n\nLorsque vous attachez cette carte de votre main à un Pokémon Lightning, piochez 2 cartes.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Lightning.\n\nCuando unes esta carta de tu mano a 1 Pokémon Lightning, roba 2 cartas.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Lightning.\n\nQuando assegni questa carta dalla tua mano a un Pokémon Lightning, pesca due carte.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Lightning.\n\nQuando você ligar esta carta da sua mão a 1 Pokémon Lightning, compre 2 cartas.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Lightning-Energie.\n\nWenn du diese Karte aus deiner Hand an ein Lightning-Pokémon anlegst, ziehe 2 Karten."
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
