import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Roserade",
		'fr-fr': "Roserade",
		'de-de': "Roserade"
	},

	illustrator: "Nakaoka",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		407,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Roselia",
		'fr-fr': "Roselia",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Spike Whip",
				'fr-fr': "Fouet à clou",
				'de-de': "Stachelpeitsche"
			},
			effect: {
				'en-us': "If Budew is anywhere under Roserade, choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si Rozbouton se trouve sous Roserade, choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wenn Knospi sich an beliebiger Stelle unter Roserade befindet, wähle 1 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attracts prey with a sweet aroma, then downs it with thorny whips hidden in its arms.",
		'fr-fr': "Il attire ses proies avec son doux parfum et les achève grâce aux fouets d'épines de ses bras."
	},

	thirdParty: {
		cardmarket: 277512,
		tcgplayer: 88826
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse"
		}
	]
}

export default card
