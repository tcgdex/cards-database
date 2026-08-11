import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'de-de': "Shnebedeck"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		459,
	],

	hp: 50,

	types: [
		"Water",
	],

	evolveFrom: {
		'fr-fr': "Blizzi",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hide",
				'fr-fr': "Cachette",
				'de-de': "Verstecken"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Snover during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Blizzi lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere während des nächsten Zuges deines Gegners alle Effekte eines Angriffs, einschließlich Schaden, die Shnebedeck zugefügt würden."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'de-de': "Pulverschnee"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives on snowy mountains. Having had little contact with humans, it is boldly inquisitive.",
		'fr-fr': "Il vit sur les monts enneigés. Ignorant des coutumes humaines, il lui arrive d'être très indiscret."
	},

	thirdParty: {
		cardmarket: 278372,
		tcgplayer: 89406
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
