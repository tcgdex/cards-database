import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'de-de': "Snibunna"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [461],

	hp: 80,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Claw Snag",
				'fr-fr': "Griffentaille",
				'de-de': "Klauengriff"
			},
			effect: {
				'en-us': "Once during your turn, when you play Weavile from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. Choose a card from your opponent's hand and discard it.",
				'fr-fr': "Une seule fois pendant votre tour, lorsque vous jouez Dimoret de votre main pour faire évoluer l’un de vos Pokémon, vous pouvez demander à voir la main de votre adversaire. Choisissez une carte dans la main de votre adversaire et défaussez-la.",
				'de-de': "Einmal während deines Zuges, wenn du Snibunna von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, darfst du dir die Handkarten deines Gegners anschauen. Wähle 1 Karte von der Hand deines Gegners und lege sie auf seinen Ablagestapel."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Feint Attack",
				'fr-fr': "Feinte",
				'de-de': "Finte"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Choisissez l’un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers et les Poké-Bodies ou tout autre effet en action sur ce Pokémon.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem gewählten Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It lives in snowy regions. It carves patterns in trees with its claws as a signal to others."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279278,
				tcgplayer: 90533
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279278,
				tcgplayer: 90533
			}
		}
	],

}

export default card
