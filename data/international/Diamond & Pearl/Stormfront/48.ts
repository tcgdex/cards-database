import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'de-de': "Zobiris"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'fr-fr': "Ténéfix",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Overeager",
				'fr-fr': "Enthousiaste",
				'de-de': "Voreiligkeit"
			},
			effect: {
				'en-us': "If Sableye is your Active Pokémon at the beginning of the game, you go first. (If each player's Active Pokémon has the Overeager Poké-Body, this power does nothing.)",
				'fr-fr': "Si Ténéfix est votre Pokémon Actif au début de la partie, vous commencez. (Si le Pokémon Actif de chaque joueur possède le Poké-Body Enthousiaste, ce pouvoir est sans effet.)",
				'de-de': "Wenn Zobiris zu Beginn des Spiels dein Aktives Pokémon ist, beginnst du das Spiel. (Wenn beide Spieler ein Aktives Pokémon mit Voreiligkeit Poké-Body haben, hat diese Poké-Body keine Auswirkungen.)"
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Impersonate",
				'fr-fr': "Personnifier",
				'de-de': "Nachahmen"
			},
			effect: {
				'en-us': "Search your deck for a Supporter card and discard it. Shuffle your deck afterward. Then, use the effect of that card as the effect of this attack.",
				'fr-fr': "Choisissez dans votre deck une carte Supporter et défaussez-la. Ensuite, mélangez votre deck. Puis, utilisez l'effet de cette carte comme l'effet de cette attaque.",
				'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte und lege sie auf deinen Ablagestapel. Mische dein Deck danach. Danach nutze den Effekt der auf diese Weise abgelegten Karte als Effekt dieses Angriffs."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Overconfident",
				'fr-fr': "Plein de zèle",
				'de-de': "Vermessenheit"
			},
			effect: {
				'en-us': "If the Defending Pokémon has fewer remaining HP than Sableye, this attack's base damage is 40.",
				'fr-fr': "Si le Pokémon Défenseur possède moins de PV que Ténéfix, les dégâts de base de cette attaque sont de 40.",
				'de-de': "Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Zobiris, beträgt der Grundschaden dieses Angriffs 40 Schadenspunkte."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278346,
		tcgplayer: 88853
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
	]
}

export default card
