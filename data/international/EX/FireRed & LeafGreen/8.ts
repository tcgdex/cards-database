import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Power Gene",
				'fr-fr': "Puissance génétique",
				'de-de': "Power Gene"
			},
			effect: {
				'en-us': "As long as Nidoking is in play, your attacks by Nidoran ♀, Nidorina, Nidoqueen, Nidoran ♂, and Nidorino do 10 more damage to the Defending Pokemon.",
				'fr-fr': "Tant que Nidoking est en jeu, les attaques effectuées par Nidoran ♀, Nidorina, Nidoqueen, Nidoran ♂ et Nidorino infligent 10 dégâts supplémentaires au Pokémon Défenseur.",
				'de-de': "As long as Nidoking is in play, your attacks by Nidoran (f), Nidorina, Nidoqueen, Nidoran (m) and Nidorino do 10 more damage to the Defending Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Earth Poison",
				'fr-fr': "Poison de terre",
				'de-de': "Earth Poison"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Empoisonné.",
				'de-de': "If the Defending Pokémon has already any Damage counters on it, the Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bound Crush",
				'fr-fr': "Saut destructeur",
				'de-de': "Bound Crush"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Nidoking can't use Bound Crush during your next turn.",
				'fr-fr': "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Nidoking ne pourra pas utiliser Saut destructeur lors de votre prochain tour.",
				'de-de': "Choose 1 of your opponent´s Pokémon. This attack does 60 damage on this Pokémon. (Don´t apply Weakness and Resistance on Benched Pokémon.) Nidoking can´t use Bound Crush during next turn."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276184,
				tcgplayer: 87696
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276184,
				tcgplayer: 87696
			},
		}
	]
}

export default card
