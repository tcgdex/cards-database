import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Metal Sound",
				'fr-fr': "Strido-son",
				'de-de': "Metallsound"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Resonance",
				'fr-fr': "Résonance",
				'de-de': "Resonanz"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Confused, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Confus, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon verwirrt ist, fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
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
		'en-us': "The units at its sides generate electromagnetic waves that keep it airborne. It feeds on electricity.",
		'fr-fr': "Ses extrémités génèrent les vagues électromagnétiques qui le font voler. Il se nourrit d'électricité."
	},

	thirdParty: {
		cardmarket: 277586,
		tcgplayer: 87081
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
