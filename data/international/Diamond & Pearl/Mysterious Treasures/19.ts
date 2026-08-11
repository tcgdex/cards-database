import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'de-de': "Rexblisar"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Glacier Snow",
				'fr-fr': "Neige de glacier",
				'de-de': "Gletscherschnee"
			},
			effect: {
				'en-us': "If Abomasnow is your Active Pokémon and is damaged by an opponent's attack (even if Abomasnow is Knocked Out), the Attacking Pokémon is now Asleep.",
				'fr-fr': "Si Blizzaroi est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Blizzaroi est mis K.O), le Pokémon Attaquant est maintenant Endormi.",
				'de-de': "Wenn Rexblisar dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Rexblisar dadurch kampfunfähig wird), schläft das Angreifende Pokémon jetzt."
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
				'en-us': "Heavy Blizzard",
				'fr-fr': "Gros blizzard",
				'de-de': "Schwerer Schneesturm"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chaque Pokémon de Banc de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' lege 1 Schadensmarke auf jedes Pokémon auf der Bank deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "It whips up blizzards in mountains that are always buried in snow. It is the abominable snowman.",
		'fr-fr': "C'est l'abominable homme des neiges. Il ensevelit les montagnes sous ses blizzards."
	},

	thirdParty: {
		cardmarket: 277648,
		tcgplayer: 83440
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
