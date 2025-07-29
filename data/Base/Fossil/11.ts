import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Magneton",
		fr: "Magneton",
		de: "Magneton"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Magnemite",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Sonicboom",
				fr: "Sonicboom",
				de: "Überschallknall"
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "Ne pas appliquer la Faiblesse et la Résistance à cette attaque. (Tout autre effet se produisant après application de la Faiblesse et de la Résistance est toujours valide.)",
				de: "Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Selfdestruct",
				fr: "Destruction",
				de: "Finale"
			},
			effect: {
				en: "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.",
				fr: "Inflige 20 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Magneton s'inflige 100 dégâts.",
				de: "Fügt jedem Pokémon auf der Bank einees jeden Spielers 20 Scahdenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden)Magneton fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	description: {
		fr: "Constitué de Magneti reliés les uns aux autres, il apparaît lorsque le soleil brille."
	},

	thirdParty: {
		cardmarket: 273872
	}
}

export default card
