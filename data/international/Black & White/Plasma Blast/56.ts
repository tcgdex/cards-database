import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'es-es': "Houndoom",
		'it-it': "Houndoom",
		'pt-br': "Houndoom",
		'de-de': "Hundemon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Clamp",
				'fr-fr': "Pince des Ténèbres",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blazing Claws",
				'fr-fr': "Griffes Ardentes",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Team Plasma Pokémon, this attack does 60 more damage, and the Defending Pokémon is now Burned.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, cette attaque inflige 60 dégâts supplémentaires et le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
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
		'en-us': "The flames it breathes when angry contain toxins. If they cause a burn, it will hurt forever.",
	},

	thirdParty: {
		cardmarket: 281077,
		tcgplayer: 86213
	}
}

export default card
