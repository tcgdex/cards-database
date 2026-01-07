import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan",
		de: "Seemon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Aquaknarre"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Energy attached to Seadra but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie  attachée à Hypocéan en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf Seemon abgelegte -Energiekarte zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich nicht mehr als 20 Schadenpunkte auf diese Art und Weise hinzufügen."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seadra.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets ou attaques, y compris les dégâts, infligés Hypocéan.",
				de: "Wirf eine Münze. Bei 'Kopf' verhindere während des nächsten gegnerischen Zuges alle Auswirkungen von Angriffen auf Seemon (einschließlich der Schadenspunkte)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Il peut nager à l'envers en agitant ses petites nageoires pectorales."
	},

	thirdParty: {
		cardmarket: 273903,
		tcgplayer: 44444
	},

	variants: [
		{
			type: "normal",
			foil: "galaxy"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy"
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
