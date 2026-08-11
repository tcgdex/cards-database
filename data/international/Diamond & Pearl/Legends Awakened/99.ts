import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Hitmonchan",
		'fr-fr': "Tygnon",
		'de-de': "Nockchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Counter Punch",
				'fr-fr': "Contre-poing",
				'de-de': "Konterhieb"
			},
			effect: {
				'en-us': "During your opponent's next turn, if Hitmonchan is damaged by an opponent's attack (even if Hitmonchan is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
				'fr-fr': "Lors du prochain tour de votre adversaire, si une attaque de votre adversaire inflige des dégâts à Tygnon (même si Tygnon est mis K.O), placez 4 marqueurs de dégât sur le Pokémon Attaquant.",
				'de-de': "Wenn Nockchan im nächsten Zug deines Gegners durch einen gegnerischen Angriff Schaden erhält (auch wenn Nockchan dadurch kampfunfähig wird), lege 4 Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Gut Strike",
				'fr-fr': "Coup d'tripes",
				'de-de': "Magenschlag"
			},
			effect: {
				'en-us': "If Tyrogue is anywhere under Hitmonchan, this attack's base damage is 60 instead of 30.",
				'fr-fr': "Si Debugant se trouve sous Tygnon, les dégâts de base de cette attaque sont de 60 au lieu de 30.",
				'de-de': "Wenn Rabauz sich an beliebiger Stelle unter Nockchan befindet, beträgt der Grundschaden dieses Angriffs 60 Schadenspunkte."
			},
			damage: 30,

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
		'en-us': "The arm-twisting punches it throws pulverize even concrete. It rests after three minutes of fighting.",
		'fr-fr': "Même le béton cède sous ses poings dévastateurs. Au combat, il s'essouffle au bout de 3 minutes."
	},

	thirdParty: {
		cardmarket: 278248,
		tcgplayer: 86093
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
