import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
		de: "Natu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Koud'bec",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Telekinesis",
				fr: "Télékinésie",
				de: "Telekinese"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Ne pas appliquer la Faiblesse et la Résistance à cette attaque. (Tout autre effet ou attaque qui survient après application de la Faiblesse et de la Résistance est toujours valide.)",
				de: "Wähle ein Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Wende Schwäche und Resistenz für diesen Angriff nicht an. (Alle anderen Auswirkungen von Angriffen, die nach der Anwendung von Schwäche und Resistenz stattfänden, finden immer noch statt.)"
			}
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Because its wings aren't yet fully grown, it has to hop to get around. It is always staring at something.",
		fr: "Comme ses ailes ne sont pas complètement développées, il doit sauter pour se déplacer. Il observe toujours quelque chose.",
		de: "Da seine Flügel noch nicht voll ausgewachsen sind, muss es hüpfen, um sich zurechtzufinden. Es starrt immer irgendetwas an."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274467,
				tcgplayer: 87681
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274467,
				tcgplayer: 87681
			}
		}
	]
}

export default card
