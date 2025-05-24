import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Neo Upper Energy",
		fr: "Néo-Énergie Sup",
		es: "Energía Neosuperior",
		it: "Neoenergia Vantaggio",
		pt: "Energia Neossuperior",
		de: "Neo-Aufputsch-Energie"
	},

	rarity: "ACE SPEC Rare",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {C} Energy.\n\nIf this card is attached to a Stage 2 Pokémon, this card provides every type of Energy but provides only 2 Energy at a time.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}.\nSi cette carte est attachée à un Pokémon de Niveau 2, elle fournit tout type d'Énergie, mais ne fournit que 2 Énergies à la fois.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {C}.\nSi esta carta está unida a un Pokémon de Fase 2, esta carta proporciona cualquier tipo de Energía, pero proporciona solo 2 Energías a la vez.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {C}.\nSe questa carta è assegnata a un Pokémon di Fase 2, fornisce Energie di qualsiasi tipo, ma solo due alla volta.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {C}.\nSe esta carta estiver ligada a um Pokémon Estágio 2, esta carta fornecerá todo tipo de Energia, mas fornecerá 2 Energias por vez.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {C}-Energie.\nWenn diese Karte an ein Phase-2-Pokémon angelegt ist, liefert diese Karte jeden Energietyp, aber immer nur 2 Energien."
	},

	energyType: "Normal",
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card