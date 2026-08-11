import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Tyranitar",
		'fr-fr': "Tyranocif",
		'de-de': "Despotar"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [248],

	hp: 160,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Darkness Howl",
				'fr-fr': "Obscurlement",
				'de-de': "Finsternisjauler"
			},
			effect: {
				'en-us': "This attack does 20 damage to each Pokémon in play (both yours and your opponent's) (excluding any Darkness Pokémon). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chaque Pokémon en jeu (les vôtres et ceux de votre adversaire), à l’exception des Pokémon Darkness. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon im Spiel (deinen und denen deines Gegners) 10 Schadenspunkte zu. (-Pokémon sind hiervon ausgenommen.) (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Power Claw",
				'fr-fr': "Griffes puissantes",
				'de-de': "Kraftklaue"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par les Poké-Powers, les Poké-Bodies ou tout autre effet actif sur le Pokémon Défenseur.",
				'de-de': "Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Tail",
				'fr-fr': "Queue titanesque",
				'de-de': "Megatonnenschweif"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'de-de': "Lege die obersten 3 Karten von deinem Deck auf deinen Ablagestapel."
			},
			damage: 120,

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

	retreat: 3,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279182,
				tcgplayer: 90122
			}
		},
	],

}

export default card
