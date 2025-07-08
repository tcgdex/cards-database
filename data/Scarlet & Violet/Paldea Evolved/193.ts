import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Thérapeutique",
		en: "Therapeutic Energy",
		es: "Energía Terapéutica",
		it: "Energia Terapeutica",
		pt: "Energia Terapêutica",
		de: "Therapie-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}.\nLe Pokémon auquel cette carte est attachée guérit des États Spéciaux Endormi, Confus ou Paralysé, et ne peut être affecté par ces États Spéciaux.",
		en: "As long as this card is attached to a Pokémon, it provides {C} Energy.\n\nThe Pokémon this card is attached to recovers from being Asleep, Confused, or Paralyzed and can't be affected by those Special Conditions.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {C}.\n\nEl Pokémon al que esté unida esta carta deja de estar Confundido, Dormido\n\no Paralizado y no puede verse afectado por ninguna de esas Condiciones Especiales.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {C}.\n\nIl Pokémon a cui è assegnata questa carta guarisce dalle condizioni speciali di addormentato, confuso o paralizzato e non può esserne influenzato.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {C}.\nO Pokémon ao qual esta carta está ligada se recupera de estar Adormecido, Confuso ou Paralisado e não pode ser afetado por estas Condições Especiais.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {C}-Energie.\nDas Pokémon, an das diese Karte angelegt ist, erholt sich von Schlaf, Verwirrung oder Paralyse und kann nicht von jenen Speziellen Zuständen betroffen werden."
	},

	energyType: "Special",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card