import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Luminous Energy",
		fr: "Énergie Lumineuse",
		es: "Energía Luminosa",
		it: "Energia Luminosa",
		pt: "Energia Luminosa",
		de: "Leucht-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time.\n\nIf the Pokémon this card is attached to has any other Special Energy attached, this card provides Colorless Energy instead.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit tout type d'Énergie, mais seulement une Énergie à la fois.\nSi le Pokémon auquel cette carte est attachée a au moins une autre Énergie spéciale attachée, cette carte fournit une Énergie Colorless à la place.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona cualquier tipo de Energía, pero proporciona solo una Energía a la vez.\nSi el Pokémon al que está unida esta carta tiene cualquier otra Energía Especial unida a él, esta carta proporciona 1 Energía Colorless en vez de una Energía de cualquier otro tipo.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce un'Energia di qualsiasi tipo, ma solo una alla volta.\n\nSe il Pokémon a cui è assegnata questa carta ha un'altra Energia speciale assegnata, invece fornisce Energia Colorless.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá todo tipo de Energia, mas fornecerá 1 Energia por vez.\nSe o Pokémon ao qual esta carta está ligada tiver qualquer outra Energia Especial ligada a ele, esta carta fornecerá Energia Colorless.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie jeden Energietyp, aber immer nur 1 Energie.\nWenn an das Pokémon, an das diese Karte angelegt ist, mindestens 1 andere Spezial-Energie angelegt ist, liefert diese Karte stattdessen Colorless-Energie."
	},

	energyType: "Normal",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card