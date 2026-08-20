import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Ninetales",
		fr: "Feunard lumineux",
		de: "Helles Vulnona"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],

			name: {
				en: "Guiding Flame",
				fr: "Flambeau",
				de: "Leitende Flamme"
			},

			effect: {
				en: "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
				fr: "Placez une carte Bébé Pokémon ou Pokémon de base de votre pile de défausse sur votre Banc. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				de: "Lege eine Baby-Pokémon- oder eine Basis-Pokémon-Karte aus deinem Ablagestapel auf deine Bank. (Du kannst diesen Angriff nicht verwenden, wenn deine Bank voll ist.)"
			},

			damage: 50
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				de: "Feuersturm"
			},
			effect: {
				en: "Discard a Energy card attached to Light Ninetales in order to use this attack.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Feunard lumineux pour utiliser cette attaque.",
				de: "Lege eine an Helles Vulnona angelegte {R}-Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It is said that each of its nine tails contains a different magical power.",
		fr: "On dit que chacune de ses neuf queues renferme un pouvoir magique différent.",
		de: "Es wird gesagt, dass jeder seiner neun Schwänze eine unterschiedliche magische Fähigkeit habe."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274702,
				tcgplayer: 86746
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274702,
				tcgplayer: 86746
			}
		}
	]
}

export default card
