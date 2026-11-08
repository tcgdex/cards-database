import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'de-de': "Darkrai"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Darkness Roar",
				'fr-fr': "Rugissement obscur",
				'de-de': "Finsteres Gebrüll"
			},
			effect: {
				'en-us': "You may have your opponent switch the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Du kannst deinen Gegner das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank austauschen lassen."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Hole",
				'fr-fr': "Trou-dodo",
				'de-de': "Schlafloch"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, this attack does 40 damage plus 40 more damage. If the Defending Pokémon is not Asleep, that Pokémon is now Asleep.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si le Pokémon Défenseur n'est pas Endormi, il est maintenant Endormi.",
				'de-de': "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu. Wenn das Verteidigende Pokémon nicht schläft, schläft es jetzt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
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
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
	},

	thirdParty: {
		cardmarket: 277905,
		tcgplayer: 84699
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
