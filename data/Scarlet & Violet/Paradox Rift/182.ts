import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Medical Energy",
		fr: "Énergie Médicale",
		es: "Energía Medicinal",
		it: "Energia Medica",
		pt: "Energia Medicinal",
		de: "Medizin-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {C} Energy.\n\nWhen you attach this card from your hand to 1 of your Pokémon, heal 30 damage from that Pokémon.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}.\nLorsque vous attachez cette carte de votre main à l'un de vos Pokémon, soignez 30 dégâts de ce Pokémon-là.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {C}.\nCuando unas esta carta de tu mano a uno de tus Pokémon, cura 30 puntos de daño a ese Pokémon.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {C}.\nQuando assegni questa carta dalla tua mano a uno dei tuoi Pokémon, cura quel Pokémon da 30 danni.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {C}.\nQuando você ligar esta carta da sua mão a 1 dos seus Pokémon, cure 30 pontos de dano daquele Pokémon.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {C}-Energie.\nWenn du diese Karte aus deiner Hand an 1 deiner Pokémon anlegst, heile 30 Schadenspunkte bei jenem Pokémon."
	},

	energyType: "Normal",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card