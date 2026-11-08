import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Azumarill",
		'fr-fr': "Azumarill",
		'de-de': "Azumarill"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [184],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Drizzle",
				'fr-fr': "Crachin",
				'de-de': "Niesel"
			},
			effect: {
				'en-us': "If you have Water Energy cards in your hand, attach as many Water Energy cards as you like to any of your Active Pokémon.",
				'fr-fr': "Si vous avez des cartes Énergie  dans votre main, attachez-en autant que vous le voulez à votre ou vos Pokémon Actifs.",
				'de-de': "Falls du -Energiekarten auf der Hand hast, kannst du beliebig viele -Energiekarten an deine Aktiven Pokémon anlegen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Max Bubbles",
				'fr-fr': "Maxi bulles",
				'de-de': "Riesen Seifenblasen"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to all of your Active Pokémon. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque carte Énergie attachée à chacun de vos Pokémon Actifs. Cette attaque inflige 30 dégâts multipliés par le nombre de face.",
				'de-de': "Wirf für jede Energiekarte, die an deinen Aktiven Pokémon angelegt ist, eine Münze. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275807,
				tcgplayer: 83679
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275807,
				tcgplayer: 83679
			}
		},
	],

}

export default card
