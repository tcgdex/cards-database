import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Flareon δ",
		'fr-fr': "Pyroli δ",
		'de-de': "Flamara"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Delta Search",
				'fr-fr': "Recherche Delta",
				'de-de': "Delta-Suche"
			},
			effect: {
				'en-us': "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Pyroli. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Flamara an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			name: {
				'en-us': "Return Burn",
				'fr-fr': "Retour de brûlure",
				'de-de': "Brennende Rückkehr"
			},

			effect: {
				'en-us': "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned.",
				'fr-fr': "Vous pouvez reprendre dans votre main une carte Énergie attachée à Pyroli. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Du kannst 1 an Flamara angelegte Energiekarte zurück auf die Hand nehmen. Wenn du das machst, ist das Verteidigende Pokémon jetzt verbrannt."
			},

			damage: 50,
			cost: ["Colorless", "Fire", "Metal"]
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276768
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
