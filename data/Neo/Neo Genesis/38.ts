import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
		de: "Lanturn"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Hydroelectric Power",
				fr: "Pouvoir hydroélectrique",
				de: "Hydroelektrischer Strom"
			},
			effect: {
				en: "You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed.",
				fr: "Vous pouvez augmenter de 10 le nombre de dégâts infligés par Projecteur pour chaque Énergie  attachée à Lanturn mais non utilisée pour payer le coût en Énergie de Projecteur. Ce pouvoir ne peut être utilisé si Lanturn est Endormi, Confus ou Paralysé.",
				de: "Du kannst mit Flutlicht 10 Schadenspunkte mehr für jede an Lanturn angelegte {W}-Energie, die nicht zum Zahlen der Energiekosten für Flutlicht verwendet wird, zufügen. Diese Fähigkeit kann nicht verwendet werden, falls Lanturn schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Floodlight",
				fr: "Projecteur",
				de: "Flutlicht"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "The light it emits is so bright that it can illuminate the sea's surface from a depth of over three miles.",
		fr: "La lumière qu'il produit est si brillante qu'elle atteint la surface de la mer depuis plus de 5 kilomètres de profondeur.",
		de: "Das Licht, das es ausstrahlt, ist so hell, dass es die Meeresoberfläche aus einer Tiefe von drei Meilen beleuchten kann."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274438,
				tcgplayer: 86603
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274438,
				tcgplayer: 86603
			}
		}
	]
}

export default card
