import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'de-de': "Sarzenia"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [71],

	hp: 110,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Tangling Tendrils",
				'fr-fr': "Enchevêtrement végétal",
				'de-de': "Wirrranken"
			},
			effect: {
				'en-us': "As long as Victreebel is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
				'fr-fr': "Tant qu’Empiflor est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
				'de-de': "Solange Sarzenia dein Aktives Pokémon ist, betragen die Rückzugskosten für das Aktive Pokémon deines Gegners 2  mehr."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Acidic Drain",
				'fr-fr': "Ponction acide",
				'de-de': "Säuresauger"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and Poisoned. Remove 3 damage counters from Victreebel.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Retirez 3 marqueurs de dégât à Empiflor.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt und vergiftet. Entferne 3 Schadensmarken von Sarzenia."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Acid that has dissolved many prey becomes sweeter, making it even more effective at attracting prey."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90365,
				cardmarket: 279542
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279542,
				tcgplayer: 90365
			}
		},
	],

}

export default card
