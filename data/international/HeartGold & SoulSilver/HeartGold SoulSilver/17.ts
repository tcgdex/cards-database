import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
		'de-de': "Pii"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [173],

	hp: 30,

	types: [
		"Colorless"
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
				'en-us': "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
				'fr-fr': "Tant que Mélo reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
				'de-de': "Solange Pii schläft, verhindere allen Schaden, der Pii durch Angriffe zugefügt wird."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Eeeeeeek",
				'fr-fr': "Arheuuuuu",
				'de-de': "Piiiiiiieps"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
				'fr-fr': "Mélangez votre main avec votre deck, piochez ensuite 6 cartes. Mélo est maintenant Endormi.",
				'de-de': "Mische deine Hand in dein Deck, ziehe danach 6 Karten. Pii schläft jetzt."
			},

		},
	],

	retreat: 0,

	description: {
		'en-us': "Because of its unusual, star-like silhouette, people believe that it came here on a meteor."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84367,
				cardmarket: 278989
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84367,
				cardmarket: 278989
			}
		},
		{
			type: "normal",
			stamp: ["david-cohen"],
			thirdParty: {
				tcgplayer: 480361,
				cardmarket: 868144
			}
		}
	],

}

export default card
