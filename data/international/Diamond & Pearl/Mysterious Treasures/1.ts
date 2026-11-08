import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'de-de': "Stollos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heap Up",
				'fr-fr': "Empiler",
				'de-de': "Aufhäufen"
			},
			effect: {
				'en-us': "Search your discard pile for all Energy cards and show them to your opponent. If you find any Metal Special Energy cards there, this attack does 40 damage plus 30 more damage. Put all of those Energy cards on top of your deck. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre pile de défausse toutes les cartes Énergie et montrez-les à votre adversaire. Si vous y trouvez des cartes Énergie Spéciale Metal, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires. Placez toutes ces cartes au dessus de votre deck. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach allen Energiekarten und zeige sie deinem Gegner. Wenn mindestens 1 dieser Energiekarten eine -Spezialenergiekarte ist, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu. Lege alle diese Energiekarten auf dein Deck. Mische dein Deck danach."
			},
			damage: "40+",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Hard Metal",
				'fr-fr': "Métal dur",
				'de-de': "Hartmetall"
			},
			effect: {
				'en-us': "You may do 60 damage plus 40 more damage. If you do, Aggron does 40 damage to itself.",
				'fr-fr': "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires. Galeking s'inflige alors 40 dégâts.",
				'de-de': "Du kannst mit diesem Angriff 60 Schadenspunkte plus weitere 40 Schadenspunkte zufügen. Wenn du das machst, fügt sich Stolloss selbst 40 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,


	description: {
		'en-us': "While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns.",
		'fr-fr': "Il creuse des galeries à travers la pierre avec ses cornes d'acier pour trouver le fer qu'il apprécie."
	},

	thirdParty: {
		cardmarket: 277630,
		tcgplayer: 83478
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
