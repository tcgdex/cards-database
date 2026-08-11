import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Ampharos",
		'fr-fr': "Pharamp",
		'de-de': "Ampharos"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [181],

	hp: 130,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Flaaffy",
		'fr-fr': "Lainergie"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Damage Bind",
				'fr-fr': "Attache-dégâts",
				'de-de': "Schadensfessel"
			},
			effect: {
				'en-us': "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
				'fr-fr': "Chaque Pokémon possédant des marqueurs de dégâts (les vôtres et ceux de votre adversaire) ne peut pas utiliser de Poké-Powers.",
				'de-de': "Pokémon (deine und die deines Gegners), auf denen mindestens 1 Schadensmarke liegt, können keine Poké-Power benutzen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gigavolt",
				'fr-fr': "Gigavolt",
				'de-de': "Gigavolt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: "30+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reflect Energy",
				'fr-fr': "Renvoi d'énergie",
				'de-de': "Energiereflektion"
			},
			effect: {
				'en-us': "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie attachée à Pharamp sur 1 des Pokémon de votre Banc.",
				'de-de': "Entferne 1 an Ampharos angelegte Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 83543,
				cardmarket: 278422
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278422,
				tcgplayer: 83543
			}
		}
	],

}

export default card
