import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Blast",
				'fr-fr': "Boule roc",
				'de-de': "Felswurf"
			},
			effect: {
				'en-us': "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Défaussez jusqu'à 5 cartes Énergie  attachées à Armaldo. Pour chaque carte Énergie défaussée, choisissez des Pokémon en jeu de votre adversaire. Cette attaque inflige 20 dégâts à ces Pokémon. (Vous pouvez choisir le même Pokémon plus d'une fois.) Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance.",
				'de-de': "Lege bis zu 5 -Energiekarten, die an Armaldo angelegt sind, auf deinen Ablagestapel. Für jede Karte, die du auf deinen Ablagestapel gelegt hast, wähle ein gegnerisches Pokémon im Spiel (du kannst das gleiche Pokémon mehrmals wählen). Dieser Angriff fügt den gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffes wird durch Schwäche und Resistenz der gewählten Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Claw",
				'fr-fr': "Mach-griffe",
				'de-de': "Tempoklaue"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verändert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 277309,
		tcgplayer: 83620
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
