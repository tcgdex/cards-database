import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Shiftry ex",
		'fr-fr': "Tengalice ex",
		'de-de': "Tengulist ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		275,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dark Eyes",
				'fr-fr': "Yeux obscurs",
				'de-de': "Dunkle Augen"
			},
			effect: {
				'en-us': "After your opponent's Pokémon uses a Poké-Power, put 2 damage counters on that Pokémon.",
				'fr-fr': "Après que votre adversaire ait utilisé un Poké-Power, placez 2 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Nachdem ein Pokémon deines Gegners eine Pokémon-Power benutzt hat, lege 2 Schadensmarken auf dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Target Attack",
				'fr-fr': "Attaque ciblée",
				'de-de': "Gezielter Angriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If that Pokémon already has any damage counters on it, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Si ce Pokémon possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. Wenn auf diesem Pokémon schon mindestens 1 Schadensmarke liegt, fügt dieser Angriff stattdessen 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blade Arms",
				'fr-fr': "Bras tranchants",
				'de-de': "Klingenarme"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 277178,
		tcgplayer: 89160
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
