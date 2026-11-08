import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Teeziro",

	attacks: [{
		name: {
			'en-us': "Victory Dive",
			'fr-fr': "Plongée Victorieuse",
			'es-es': "Salto Victoria",
			'it-it': "Picchiata Vittoriosa",
			'pt-br': "Victory Dive",
			'de-de': "Triumphzug"
		},

		effect: {
			'en-us': "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck jusqu'à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'es-es': "Puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Puoi cercare nel tuo mazzo fino a due carte e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'de-de': "Du kannst dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power."
	},

	dexId: [494],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574044,
				tcgplayer: 246836
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574044,
				tcgplayer: 246836
			}
		},
	],
}

export default card
