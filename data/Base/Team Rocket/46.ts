import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Wartortle",
		fr: "Carabaffe obscur",
		de: "Dunkles Schillok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		8,
	],

	hp: 60,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Doubleslap",
				fr: "Double gifle",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt jedesmal, wenn die Münze „Kopf“ zeigt, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Mirror Shell",
				fr: "Carapace miroir",
				de: "Spiegelpanzer"
			},
			effect: {
				en: "If an attack does damage to Dark Wartortle during your opponent's next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle attacks the Defending Pokémon for an equal amount of damage.",
				fr: "Si une attaque inflige des dégâts à Carabaffe obscur pendant le prochain tour de votre adversaire (même si Carabaffe obscur est K.O.), Carabaffe obscur attaque le Pokémon Défenseur avec une quantité de dégâts égale.",
				de: "Falls ein Angriff Dunkles Schillok während des nächsten Zuge deines Gegners Schaden zufügt (selbst wenn Dunkles Schillok kampfunfähig gemacht wird), greift Dunkles Schillok das verteidigende Pokémon mit der gleichen Schadensmenge an."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "A Pokémon with a negative attitude, it hides in its shell whenever it's in a bad mood—which is often.",
		fr: "Il a très mauvais caractère et se cache dans sa carapace dès qu'il est de mauvaise humeur - ce qui est souvent le cas.",
		de: "Ein Pokémon mit einer negativen Einstellung. Es versteckt sich in seiner eigenen Schale, wenn es schlechter Laune ist, was oft zutrifft."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274099,
				tcgplayer: 84670
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274099,
				tcgplayer: 84670
			}
		}
	]
}

export default card
