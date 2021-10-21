import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Aromatic Grass Energy",
		fr: "Énergie Grass Arôme",
		es: "Energía Grass Aromática",
		it: "Energia Grass Aromatica",
		pt: "Energia Grass Aromática",
		de: "Aroma-Grass-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Grass Energy.\n\nThe Grass Pokémon this card is attached to recovers from all Special Conditions and can't be affected by any Special Conditions.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Grass.\n\nLe Pokémon Grass auquel cette carte est attachée guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Grass.\n\nEl Pokémon Grass al que esté unida esta carta se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Grass.\n\nIl Pokémon Grass a cui è assegnata questa carta guarisce da tutte le condizioni speciali e non può esserne influenzato.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Grass.\n\nO Pokémon Grass ao qual esta carta está ligada se recupera de todas as Condições Especiais e não pode ser afetado por quaisquer Condições Especiais.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Grass-Energie.\n\nDas Grass-Pokémon, an das diese Karte angelegt ist, erholt sich von allen Speziellen Zuständen und kann nicht von Speziellen Zuständen betroffen werden."
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
