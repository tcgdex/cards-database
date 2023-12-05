import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Espeon",
		fr: "Mentali obscur",
		de: "Dunkles Psiana"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gouge",
				fr: "Griffes rétractiles",
				de: "Klauen ausfahren"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu; bei 'Zahl' fügt dieser Angriff 10 Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psysplash",
				fr: "Psy plouf",
				de: "Psyspritzer"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Pokémon for each Energy card attached to that Pokémon. Don't apply Weakness and Resistance.",
				fr: "Inflige 10 dégâts à chaque Pokémon de votre adversaire pour chaque carte Énergie attachée à ce Pokémon. N'appliquez ni la Faiblesse, ni la Résistance.",
				de: "Fügt jedem der Pokémon deines Gegners 10 Schadenspunkte für jede an dieses Pokémon angelegte Energiekarte zu. Wende Schwäche und Resistenz nicht an."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "La double extrémité de sa queue s'agite quand il utilise ses pouvoirs psychiques pour deviner quelle sera la prochaine action de son adversaire."
	}
}

export default card
