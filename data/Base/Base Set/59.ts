import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		de: "Quapsel",
		it: "Poliwag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre",
				it:" Pistolacqua"
			},
			effect: {
				en: "Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack's Energy cost. Extra Energy after the end don't count.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Ptitard en plus du coût en Énergie de cette attaque. Les Énergies  supplémentaires après la seconde ne comptent pas.",
				de: "Fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Quapsel abgelegte  Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Du kannst nicht mehr als 20 Schadenspunkte auf diese Weise hinzufügen.",
				it: "Infligge 10 danni più altri 10 danni per ogni Energia Acqua assegnata a Poliwag che non viene usata per pagare il costo di Energia di questo attacco. Altre carte Energia Acqua dopo la 2ª non contano."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Il court mal avec ses petites pattes. Il préfère nager que de se tenir debout.",
		it: "Le sue gambe appena sviluppate non riescono a sostenerlo nella corsa; preferisce nuotare inceve di stare in piedi. LIV 13 N.60"
	},

	thirdParty: {
		cardmarket: 273754,
		tcgplayer: 42403
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
