import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Steelix GL",
		'fr-fr': "Steelix  Niv. 38",
		'de-de': "Stahlos GL"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [208],

	hp: 110,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mend",
				'fr-fr': "Réparation",
				'de-de': "Reparieren"
			},
			effect: {
				'en-us': "Search your discard pile for a Metal Energy card and attach it to Steelix GL. If you do, remove 1 damage counter from Steelix GL.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie Metal et attachez-la à Steelix . Retirez alors à Steelix  1 marqueur de dégât.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Stahlos GL an. Wenn du das machst, entferne 1 Schadensmarke von Stahlos GL."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Squeeze",
				'fr-fr': "Compression",
				'de-de': "Quetschen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 50 more damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 50 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt gelähmt."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278625,
				tcgplayer: 89567
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278625,
				tcgplayer: 89567
			}
		},
	],

}

export default card
