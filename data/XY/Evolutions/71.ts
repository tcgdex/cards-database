import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Porygon",
		fr: "Porygon",
		es: "Porygon",
		it: "Porygon",
		pt: "Porygon",
		de: "Porygon"
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		137,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Conversion 3",
				fr: "Conversion 3",
				es: "Conversión 3",
				it: "Conversione3",
				pt: "Conversão 3",
				de: "Umwandlung 3"
			},
			effect: {
				en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. The Defending Pokémon's Weakness is now that type until the end of your next turn. (The amount of Weakness doesn't change.)",
				fr: "Choisissez le type Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy ou Dragon. La Faiblesse du Pokémon Défenseur est maintenant de ce type jusqu'à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				es: "Elige el tipo Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy o Dragon. La Debilidad del Pokémon Defensor pasa a ser de ese tipo hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				it: "Scegli uno dei seguenti tipi: Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy o Dragon. La debolezza del Pokémon difensore diventa di quel tipo fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				pt: "Encolha o tipo Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy ou Dragon. A Fraqueza do Pokémon Defensor passa a ser daquele tipo até o final da sua próxima vez de jogar. (A quantidade de Fraqueza não muda.)",
				de: "Wähle den Typ Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy oder Dragon. Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt dieser Typ. (Die Höhe der Schwäche ändert sich nicht.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
