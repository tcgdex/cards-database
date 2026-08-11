import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Unown U",
		'fr-fr': "Zarbi U",
		'de-de': "Icognito U"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "UNSEEN",
				'fr-fr': "UNSEEN",
				'de-de': "UNSEEN"
			},
			effect: {
				'en-us': "As long as Unown U is on your Bench, prevent all effects of attacks, including damage, done by your opponent's Pokémon to any Unown on your Bench.",
				'fr-fr': "Tant que Zarbi U est sur votre Banc, prévenez tous les effets d'attaques, dégâts inclus, infligés à n'importe quel Zarbi se trouvant sur votre Banc par les Pokémon de votre adversaire.",
				'de-de': "Solange Icognito U auf deiner Bank ist, verhindere alle Effekte von gegnerischen Angriffen, einschließlich Schaden, die den Icognito auf deiner Bank zugefügt würden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},
			effect: {
				'en-us': "Search your deck for any 1 card and discard it. Shuffle your deck afterward.",
				'fr-fr': "Choisissez 1 carte dans votre deck et défaussez-la. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Karte und lege sie auf deinen Ablagestapel. Mische dein Deck danach."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Shaped like an ancient writing, it is a huge mystery whether language or Unown came first.",
		'fr-fr': "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
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
