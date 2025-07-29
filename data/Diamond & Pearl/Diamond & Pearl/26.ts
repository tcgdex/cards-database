import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
		de: "Bojelin"
	},

	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		419,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Screw Tail",
				fr: "Queue cloutée",
				de: "Schraubschwanz"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei 'Kopf' lege eine Energie, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Water Energy attached to Floatzel but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie Water attachée à Mustéflott qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Dieser Angriff fügt 40 Schadenspunkte plus 20 weitere Schadenpunkte für jede an Bojelin angelegte -Energie zu, die nicht zum Bezahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 40 Schadenspunkte hinzufügen."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "Il flotte grâce à sa bouée très développée. Il vole au secours des gens sur le point de se noyer."
	},

	thirdParty: {
		cardmarket: 277525
	}
}

export default card
