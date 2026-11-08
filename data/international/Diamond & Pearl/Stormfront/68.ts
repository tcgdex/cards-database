import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'de-de': "Traunfugil"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'fr-fr': "Feuforêve",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Lullaby",
				'fr-fr': "Comptine",
				'de-de': "Wiegenlied"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Nightmare Feast",
				'fr-fr': "Festin cauchemardesque",
				'de-de': "Alptraumgelage"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Asleep, this attack does 50 damage and remove 5 damage counters from Misdreavus. If the Defending Pokémon is not Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur est Endormi, cette attaque inflige 50 dégâts et retire à Feuforêve 5 marqueurs de dégât. Si le Pokémon Défenseur n'est pas Endormi, cette attaque est sans effet.",
				'de-de': "Wenn das Verteidigende Pokémon schläft, fügt dieser Angriff 50 Schadenspunkte zu und entferne 5 Schadensmarken von Traunfugil. Wenn das Verteidigende Pokémon nicht schläft, hat dieser Angriff keine Auswirkungen."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It loves to sneak up on people late at night, then startle them with its shrieklike cry.",
		'fr-fr': "Il adore se faufiler derrière les gens la nuit pour les effrayer avec son cri strident."
	},

	thirdParty: {
		cardmarket: 278366,
		tcgplayer: 87508
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
