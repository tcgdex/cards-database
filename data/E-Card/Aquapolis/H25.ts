import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
		de: "Suicune"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
				fr: "Corps pur",
				de: "Reiner Körper"
			},
			effect: {
				en: "To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)",
				fr: "Pour attacher une carte Énergie {W} de votre main à Suicune, vous devez vous défausser d'une carte Énergie attachée à Suicune. (Attachez l'Énergie {W}, et défaussez-vous ensuite d'une carte Énergie attachée à Suicune.)",
				de: "Um eine {W}-Energiekarte aus deiner Hand an Suicune anzulegen, musst du eine an Suicune angelegte Energiekarte auf deinen Ablagestapel legen. (Lege erst die {W}-Energie an, und lege dann eine an Suicune angelegte Energiekarte auf den Ablagestapel.)"
			}
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
				en: "Hypno Wave",
				fr: "Hypnovague",
				de: "Hypno-Welle"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts et le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff 30 Schadenspunkte zu, und das Verteidigende Pokémon schläft jetzt."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89598,
				cardmarket: 275109
			}
		},
	]
}

export default card
