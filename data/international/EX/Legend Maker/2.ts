import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'de-de': "Stolloss"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Blow",
				'fr-fr': "Souffle lourd",
				'de-de': "Schwerer Hieb"
			},
			effect: {
				'en-us': "Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.",
				'fr-fr': "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Galeking. Si Galeking possède des cartes Énergie réaction, cette attaque inflige 70 dégâts.",
				'de-de': "Dieser Angriff fügt 70 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke an Stolloss zu. Wenn mindestens eine Reaktions-Energiekarte an Stolloss angelegt ist, fügt dieser Angriff stattdessen 70 Schadenspunkte zu."
			},
			damage: "70-",

		},
		{
			cost: [
				"Fighting",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bound Crush",
				'fr-fr': "Saut destructeur",
				'de-de': "Zermalmende Ranke"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Lors de votre prochain tour, Galeking ne pourra pas utiliser Saut destructeur.",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Stolloss kann Zermalmende Ranke in deinem nächsten Zug nicht benutzen."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 4,

	thirdParty: {
		cardmarket: 276879,
		tcgplayer: 83476
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
