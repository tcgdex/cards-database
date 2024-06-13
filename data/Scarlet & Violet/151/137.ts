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
			fr: "Choisissez le type Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal ou Dragon. Tant que le Pokémon Défenseur est sur le Poste Actif, sa Faiblesse est alors de ce type. (La valeur de la Faiblesse ne change pas.)",
			en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Dragon type. Until the Defending Pokémon leaves the Active Spot, its Weakness is now that type. (The amount of Weakness doesn't change.)",
			es: "Elige el tipo Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal o Dragon. Hasta que el Pokémon Defensor deje el Puesto Activo, su Debilidad pasa a ser de ese tipo. (La cantidad de Debilidad no cambia).",
			it: "Scegli uno dei seguenti tipi: Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal o Dragon. Finché il Pokémon difensore è in posizione attiva, la sua debolezza diventa di quel tipo. Quanto è debole non cambia.",
			pt: "Escolha o tipo Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal ou Dragon. Até o Pokémon Defensor sair do Campo Ativo, a Fraqueza dele passa a ser daquele tipo. (A quantidade de Fraqueza não muda.)",
			de: "Wähle den Typ Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal oder Dragon. Bis das Verteidigende Pokémon die Aktive Position verlässt, ist seine Schwäche jetzt jener Typ. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card