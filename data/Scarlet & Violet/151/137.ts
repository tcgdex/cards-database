import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		fr: "Porygon",
		en: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Conversion 4",
			en: "Conversion 4",
			es: "Conversión 4",
			it: "Conversione4",
			pt: "Conversão 4",
			de: "Umwandlung 4"
		},

		effect: {
			fr: "Choisissez le type {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} ou {N}. Tant que le Pokémon Défenseur est sur le Poste Actif, sa Faiblesse est alors de ce type. (La valeur de la Faiblesse ne change pas.)",
			en: "Choose {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M}, or {N} type. Until the Defending Pokémon leaves the Active Spot, its Weakness is now that type. (The amount of Weakness doesn't change.)",
			es: "Elige el tipo {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} o {N}. Hasta que el Pokémon Defensor deje el Puesto Activo, su Debilidad pasa a ser de ese tipo. (La cantidad de Debilidad no cambia).",
			it: "Scegli uno dei seguenti tipi: {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} o {N}. Finché il Pokémon difensore è in posizione attiva, la sua debolezza diventa di quel tipo. Quanto è debole non cambia.",
			pt: "Escolha o tipo {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} ou {N}. Até o Pokémon Defensor sair do Campo Ativo, a Fraqueza dele passa a ser daquele tipo. (A quantidade de Fraqueza não muda.)",
			de: "Wähle den Typ {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} oder {N}. Bis das Verteidigende Pokémon die Aktive Position verlässt, ist seine Schwäche jetzt jener Typ. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "5ban Graphics"
}

export default card