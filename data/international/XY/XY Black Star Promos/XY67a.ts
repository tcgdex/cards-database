import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Jirachi",
		'fr-fr': "Jirachi"
	},

	illustrator: "sui",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stardust",
				'fr-fr': "Poussière Étoile"
			},
			effect: {
				'en-us': "Discard a Special Energy attached to your opponent's Active Pokémon. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire. Dans ce cas, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire."
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dream Dance",
				'fr-fr': "Danse-Rêve"
			},
			effect: {
				'en-us': "Both Active Pokémon are now Asleep.",
				'fr-fr': "Les deux Pokémon Actifs sont maintenant Endormis."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is said to have the ability to grant any wish for just one week every thousand years.",
	},

	thirdParty: {
		cardmarket: 289787
	}
}

export default card
