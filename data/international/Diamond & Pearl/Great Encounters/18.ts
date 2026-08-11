import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Demolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 90,

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
			],
			name: {
				'en-us': "Dark Fang",
				'fr-fr': "Croc obscurité",
				'de-de': "Finsterzahn"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking and discard it.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Black Fire",
				'fr-fr': "Feu noir",
				'de-de': "Schwarzes Feuer"
			},
			effect: {
				'en-us': "You may discard a Fire or Darkness Energy attached to Houndoom. If you discard a Fire Energy, the Defending Pokémon is now Burned. If you discard a Darkness Energy, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie Fire ou Darkness attachée à Demolosse. Si vous défaussez une Énergie Fire, le Pokémon Défenseur est maintenant Brûlé. Si vous défaussez une Énergie (D), cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Du kannst 1 an Hundemon angelegte - oder -Energie auf deinen Ablagestapel legen. Wenn du 1 -Energie auf deinen Ablagestapel legst, ist das Verteidigende Pokémon jetzt verbrannt. Wenn du 1 -Energie auf deinen Ablagestapel legst, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
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
		'en-us': "Long ago, people imagined its eerie howls to be the call of the grim reaper.",
	},

	thirdParty: {
		cardmarket: 277920,
		tcgplayer: 86207
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
