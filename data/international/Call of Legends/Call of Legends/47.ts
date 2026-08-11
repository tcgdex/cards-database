import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Mime Jr.",
		'fr-fr': "Mime Jr.",
		'de-de': "Pantimimi"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [439],

	hp: 30,

	types: [
		"Psychic"
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
				'en-us': "As long as Mime Jr. is Asleep, prevent all damage done to Mime Jr. by attacks.",
				'fr-fr': "Tant que Mime Jr. est Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				'de-de': "Solange Pantimimi schläft, verhindere allen Schaden, der Pantimimi durch Angriffe zugefügt wird."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Sleepy Lost",
				'fr-fr': "Berceuse perdue",
				'de-de': "Nirgendwo-Schlaf"
			},
			effect: {
				'en-us': "Put the top card of your opponent's deck in the Lost Zone. Mime Jr. is now Asleep.",
				'fr-fr': "Placez la carte du dessus du deck de votre adversaire dans la Zone Perdue. Mime Jr. est maintenant Endormi.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners ins Nirgendwo. Pantimimi schläft jetzt."
			},

		},
	],

	description: {
		'en-us': "In an attempt to confuse its enemy, it mimics the enemy's movements. Then it wastes no time in making itself scarce!",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87472,
				cardmarket: 279690
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87472,
				cardmarket: 279690
			},
		},
	],

}

export default card
