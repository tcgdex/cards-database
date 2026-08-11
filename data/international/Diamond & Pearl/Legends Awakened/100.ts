import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'de-de': "Kicklee"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Gut Kick",
				'fr-fr': "Coup d'pied d'tripes",
				'de-de': "Magentritt"
			},
			effect: {
				'en-us': "If Tyrogue is anywhere under Hitmonlee, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si Debugant se trouve sous Kicklee, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wenn Rabauz sich an beliebiger Stelle unter Kicklee befindet, kannst du 1 Pokémon auf einer Bank wählen. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu, anstelle dem Verteidigenden Pokémon Schaden zuzufügen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Kick",
				'fr-fr': "Ultimawashi",
				'de-de': "Megakick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its legs can stretch double. First-time foes are startled by its extensible reach.",
		'fr-fr': "Ses pattes élastiques s'allongent, ce qui ne manque jamais de surprendre au premier combat."
	},

	thirdParty: {
		cardmarket: 278249,
		tcgplayer: 86106
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
