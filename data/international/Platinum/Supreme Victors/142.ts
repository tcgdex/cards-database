import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Blaziken FB LV.X",
		'fr-fr': "Brasegali ",
		'de-de': "Lohgock FB"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [257],
	hp: 110,
	types: [
		"Fire"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Burning Spirit",
				'fr-fr': "Esprit brûlant",
				'de-de': "Brennender Geist"
			},
			effect: {
				'en-us': "Any damage done by attacks to a Burned Pokémon (both yours and your opponent's) is increased by 40 (after applying Weakness and Resistance). No more than 40 damage can be added by all Burning Spirit Poké-Bodies.",
				'fr-fr': "Tous les dégâts infligés par des attaques à un Pokémon Brûlé (les vôtres et ceux de votre adversaire) sont augmentés de 40 (après application de la Faiblesse et de la Résistance). Les Poké-Bodies Esprit brûlant ne peuvent pas ajouter plus de 40 dégâts.",
				'de-de': "Schaden, der verbrannten Pokémon (deinen und denen deines Gegners) durch Angriffe zugefügt wird, wird um 40 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden). Durch alle Brennender Geist Poké-Body können nicht mehr als 40 KP addiert werden."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Jet Shoot",
				'fr-fr': "Coup éclair",
				'de-de': "Düsenschuss"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Blaziken FB by attacks is increased by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous les dégâts infligés à Brasegali  par des attaques sont augmentés de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Lohgock FB durch Angriffe zugefügt wird, um 40 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278833,
				tcgplayer: 83915
			}
		},
	],

}

export default card
