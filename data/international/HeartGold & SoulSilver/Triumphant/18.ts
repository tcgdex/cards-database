import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'de-de': "Dragoran"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 140,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Calming Wind",
				'fr-fr': "Vent apaisant",
				'de-de': "Beruhigender Wind"
			},
			effect: {
				'en-us': "Remove all Special Conditions from Dragonite.",
				'fr-fr': "Retirez tous les États Spéciaux à Dracolosse.",
				'de-de': "Entferne alle Speziellen Zustände von Dragoran."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Stamp",
				'fr-fr': "Dragofrappe",
				'de-de': "Drachenstampfer"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing. If both of them are heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Si vous obtenez deux fois face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 2 Münzen. Wenn beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Wenn beide Münzen \"Kopf\" zeigen, ist das Verteidigende Pokémon jezt gelähmt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "This marine Pokémon has an impressive build that lets it freely fly over raging seas without trouble."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84914,
				cardmarket: 279548
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279548,
				tcgplayer: 84914
			}
		},
	],

}

export default card
