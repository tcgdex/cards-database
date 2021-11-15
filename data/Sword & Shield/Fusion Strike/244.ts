import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Fusion Strike Energy",
		fr: "Énergie Poing de Fusion",
		es: "Energía Golpe Fusión",
		it: "Energia Colpo Fusione",
		pt: "Energia Golpe Fusão",
		de: "Fusionsangriff-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "This card can only be attached to a Fusion Strike Pokémon. If this card is attached to anything other than a Fusion Strike Pokémon, discard this card.\nAs long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. Prevent all effects of your opponent's Pokémon's Abilities done to the Pokémon this card is attached to.",
	},

	energyType: "Special",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
