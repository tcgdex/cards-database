import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Full Heal",
		'fr-fr': "Guérison Totale",
		'de-de': "Hyperheiler",
		'it-it': "Recupero Totale"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.",
		'fr-fr': "Votre Pokémon actif n'est plus Endormi, Confus, Paralysé ou Empoisonné.",
		'de-de': "Dein aktives Pokémon ist nicht mehr schlafend, verwirrt, gelähmt oder vergiftet.",
		'it-it': "Il tuo Pokémon Attivo non è più Addormentato, Confuso, Paralizzato o Avvelenato."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273777,
				tcgplayer: 42428
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107079
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107079
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
