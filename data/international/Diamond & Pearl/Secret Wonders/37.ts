import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Sharpedo",
		'fr-fr': "Sharpedo",
		'de-de': "Tohaido"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		319,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rough Skin",
				'fr-fr': "Peau dure",
				'de-de': "Rauhaut"
			},
			effect: {
				'en-us': "If Sharpedo is your Active Pokémon and is damaged by an opponent's attack (even if Sharpedo is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si Sharpedo est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Sharpedo est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant.",
				'de-de': "Wenn Tohaido dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Tohaido dadurch kampfunfähig wird), lege 2 Schadensmarkten auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strike Wound",
				'fr-fr': "Blessure d'attaque",
				'de-de': "Wundentreffer"
			},
			effect: {
				'en-us': "If the Defending Pokémon has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
				'de-de': "Wenn mindestens 2 Schadensmarken auf dem Verteidigenden Pokémon liegen, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu. Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	description: {
		'en-us': "Its fangs rip through sheet iron. It swims at 75 mph and is known as \"The Bully of the Sea.\"",
	},

	thirdParty: {
		cardmarket: 277790,
		tcgplayer: 89099
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
