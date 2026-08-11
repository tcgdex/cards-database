import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Dusclops",
		'fr-fr': "Teraclope",
		'de-de': "Zwirrklop"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		356,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Dark Mind",
				'fr-fr': "Sombre-esprit",
				'de-de': "Finsteres Gemüt"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Light",
				'fr-fr': "Lumière mystérieuse",
				'de-de': "Geheimnisvolles Licht"
			},
			effect: {
				'en-us': "If Phoebe's Stadium is in play, the Defending Pokémon is now Confused.",
				'fr-fr': "Si Stade de Spectra est en jeu, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wenn Antonias Stadion im Spiel ist, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277320,
		tcgplayer: 85027
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
			foil: "cosmos"
		}
	]
}

export default card
