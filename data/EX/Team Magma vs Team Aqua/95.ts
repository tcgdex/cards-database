import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Swampert ex",
		fr: "Laggron ex",
		de: "Sumpex-ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [260],

	hp: 150,

	stage: "Stage2",
	types: [
		"Fighting"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hyper Pump",
				fr: "Hyper pompe",
				de: "Hyperpumpe"
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each basic Energy attached to Swampert ex but not used to pay for this attack's Energy cost. You can't add more than 80 damage in this way.",
				fr: "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Énergie de base attachée à Laggron ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 80 dégâts de cette façon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Sumpex ex angelegte Basis-Energiekarte zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 80 Schadenspunkte hinzufügen."
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
				en: "Crushing Wave",
				fr: "Vague écrasante",
				de: "Zermalmende Welle"
			},

			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. After doing damage, flip a coin. If heads, your opponent discards an Energy card, if any, attached to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Après avoir infligé des dégâts, lancez une pièce. Si c'est face, votre adversaire défausse une carte Énergie attachée à ce Pokémon, s'il en a. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 40 Schadenspunkte zu. Wirf 1 Münze, nachdem der Schaden zugefügt wurde. Bei „Kopf“ legt dein Gegner eine an das Verteidigende Pokémon angelegte Energiekarten (falls vorhanden) auf den Ablagestapel. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

			damage: "20+"
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275872,
				tcgplayer: 89682
			}
		},
		{
			type: "holo",
			stamp: ["reed-weichler"],
			thirdParty: {
				cardmarket: 871824,
				tcgplayer: 477439
			}
		}
	],

}

export default card
