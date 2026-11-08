import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [137],
	set: Set,

	name: {
		'fr-fr': "Porygon",
		'en-us': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Conversion 4",
			'en-us': "Conversion 4",
			'es-es': "Conversión 4",
			'it-it': "Conversione4",
			'pt-br': "Conversão 4",
			'de-de': "Umwandlung 4"
		},

		effect: {
			'fr-fr': "Choisissez le type {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} ou {N}. Tant que le Pokémon Défenseur est sur le Poste Actif, sa Faiblesse est alors de ce type. (La valeur de la Faiblesse ne change pas.)",
			'en-us': "Choose {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M}, or {N} type. Until the Defending Pokémon leaves the Active Spot, its Weakness is now that type. (The amount of Weakness doesn't change.)",
			'es-es': "Elige el tipo {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} o {N}. Hasta que el Pokémon Defensor deje el Puesto Activo, su Debilidad pasa a ser de ese tipo. (La cantidad de Debilidad no cambia).",
			'it-it': "Scegli uno dei seguenti tipi: {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} o {N}. Finché il Pokémon difensore è in posizione attiva, la sua debolezza diventa di quel tipo. Quanto è debole non cambia.",
			'pt-br': "Escolha o tipo {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} ou {N}. Até o Pokémon Defensor sair do Campo Ativo, a Fraqueza dele passa a ser daquele tipo. (A quantidade de Fraqueza não muda.)",
			'de-de': "Wähle den Typ {G}, {R}, {W}, {L}, {P}, {F}, {D}, {M} oder {N}. Bis das Verteidigende Pokémon die Aktive Position verlässt, ist seine Schwäche jetzt jener Typ. (Die Höhe der Schwäche ändert sich nicht.)"
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "In recent years, this species has been very helpful in cyberspace. These Pokémon will go around checking to make sure no suspicious data exists.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733732,
				tcgplayer: 516700,
				cardtrader: 261143
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733732,
				tcgplayer: 516700,
				cardtrader: 261143
			}
		},
	],

	illustrator: "5ban Graphics",

	
}

export default card
