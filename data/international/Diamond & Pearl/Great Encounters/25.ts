import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'de-de': "Milotic"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Marvel Scale",
				'fr-fr': "Écaille spé.",
				'de-de': "Notschutz"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Milotic by your opponent's Pokémon LV.X.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Milobellus par les Pokémon LV.X de votre adversaire.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Milotic von Pokémon LV.X deines Gegners zugefügt würden."
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
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'de-de': "Windhose"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si ce sont 2 piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When people bicker, it is said to arise from the depths of lakes to becalm violent hearts.",
	},

	thirdParty: {
		cardmarket: 277927,
		tcgplayer: 87454
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
