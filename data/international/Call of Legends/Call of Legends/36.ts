import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Tyrogue",
		'fr-fr': "Debugant",
		'de-de': "Rabauz"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [236],

	hp: 30,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sweet Sleeping Face",
				'fr-fr': "Joli visage endormi",
				'de-de': "Niedliches Schlafgesicht"
			},
			effect: {
				'en-us': "As long as Tyrogue is Asleep, prevent all damage done to Tyrogue by attacks.",
				'fr-fr': "Tant que Debugant reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				'de-de': "Solange Rabauz schläft, verhindere allen Schaden, der Rabauz durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Mischievous Punch",
				'fr-fr': "Coquipoing",
				'de-de': "Gehässiger Hieb"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance. Tyrogue is now Asleep.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse ou la Résistance. Debugant est maintenant Endormi.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert. Rabauz schläft jetzt."
			},
			damage: 30,

		},
	],

	description: {
		'en-us': "Even though it is small, it can't be ignored because it will slug any handy target without warning.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90132,
				cardmarket: 279679
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90132,
				cardmarket: 279679
			},
		},
	],

}

export default card
