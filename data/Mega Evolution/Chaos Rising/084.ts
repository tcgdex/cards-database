import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Bubbly Water Energy",
		fr: "Énergie Water Pétillante",
		es: "Energía Water Burbujeante",
		'es-mx': "Energía Water Burbujeante",
		de: "Sprudelnde Water-Energie",
		it: "Energia Water Frizzante",
		pt: "Energia Water Borbulhante"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Normal",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693458
	},

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {W} Energy.\n\nThe {W} Pokémon this card is attached to recovers from all Special Conditions and can't be affected by any Special Conditions.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {W}.\n\nLe Pokémon {W} auquel cette carte est attachée guérit de tous les États Spéciaux et ne peut être affecté par aucun État Spécial.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {W}.\n\nEl Pokémon {W} al que esté unida esta carta se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {W}.\n\nEl Pokémon {W} al que esté unida esta carta se recupera de todas las Condiciones Especiales y no puede verse afectado por ninguna Condición Especial.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {W}-Energie.\n\nDas {W}-Pokémon, an das diese Karte angelegt ist, erholt sich von allen Speziellen Zuständen und kann nicht von Speziellen Zuständen betroffen werden.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {W}.\n\nIl Pokémon {W} a cui è assegnata questa carta guarisce da tutte le condizioni speciali e non può esserne influenzato.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {W}.\n\nO Pokémon {W} ao qual esta carta está ligada se recupera de todas as Condições Especiais e não pode ser afetado por quaisquer Condições Especiais."
	}
}

export default card
