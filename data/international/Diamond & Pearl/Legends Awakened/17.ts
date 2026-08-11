import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Sonic Wave",
				'fr-fr': "Vague sonique",
				'de-de': "Überschallwelle"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Pursue and Turn",
				'fr-fr': "Chasser et tourner",
				'de-de': "Verfolgen und Abdrehen"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has 2 or more damage counters on it, this attack does 60 damage plus 20 more damage and switch Yanmega with 1 of your Benched Pokémon.",
				'fr-fr': "Si le Pokémon Défenseur possède au moins 2 marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Échangez Yanmega avec 1 des Pokémon de votre Banc.",
				'de-de': "Wenn auf dem Verteidigenden Pokémon mindestens 2 Schadensmarken liegen, fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu und tausche Yanmega gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "By churning its wings, it creates shock waves that inflict critical internal injuries to foes.",
		'fr-fr': "Les ondes de choc qu'il génère en battant des ailes infligent de graves blessures internes."
	},

	thirdParty: {
		cardmarket: 278166,
		tcgplayer: 90690
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
		}
	]
}

export default card
