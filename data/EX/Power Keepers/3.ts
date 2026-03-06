import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Armaldo",
		fr: "Armaldo",
		de: "Armaldo"
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
		en: "Anorith",
		fr: "Anorith"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Rock Blast",
				fr: "Boule roc",
				de: "Felswurf"
			},
			effect: {
				en: "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Défaussez jusqu'à 5 cartes Énergie  attachées à Armaldo. Pour chaque carte Énergie défaussée, choisissez des Pokémon en jeu de votre adversaire. Cette attaque inflige 20 dégâts à ces Pokémon. (Vous pouvez choisir le même Pokémon plus d'une fois.) Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance.",
				de: "Lege bis zu 5 -Energiekarten, die an Armaldo angelegt sind, auf deinen Ablagestapel. Für jede Karte, die du auf deinen Ablagestapel gelegt hast, wähle ein gegnerisches Pokémon im Spiel (du kannst das gleiche Pokémon mehrmals wählen). Dieser Angriff fügt den gewählten Pokémon 20 Schadenspunkte zu. Der Schaden dieses Angriffes wird durch Schwäche und Resistenz der gewählten Pokémon nicht verändert."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Claw",
				fr: "Mach-griffe",
				de: "Tempoklaue"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				de: "Der Schaden dieses Angriffs wird durch die Resistenz des Verteidigenden Pokémon nicht verändert."
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
