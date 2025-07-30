import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Demolosse",
		de: "Hundemon"
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
		en: "Houndour",
		fr: "Malosse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Dark Fang",
				fr: "Croc obscurité",
				de: "Finsterzahn"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				de: "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Black Fire",
				fr: "Feu noir",
				de: "Schwarzes Feuer"
			},
			effect: {
				en: "You may discard a Fire or Darkness Energy attached to Houndoom. If you discard a Fire Energy, the Defending Pokémon is now Burned. If you discard a Darkness Energy, this attack does 40 damage plus 30 more damage.",
				fr: "Vous pouvez défausser une Énergie Fire ou Darkness attachée à Demolosse. Si vous défaussez une Énergie Fire, le Pokémon Défenseur est maintenant Brûlé. Si vous défaussez une Énergie (D), cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				de: "Du kannst 1 an Hundemon angelegte - oder -Energie auf deinen Ablagestapel legen. Wenn du 1 -Energie auf deinen Ablagestapel legst, ist das Verteidigende Pokémon jetzt verbrannt. Wenn du 1 -Energie auf deinen Ablagestapel legst, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 277920,
		tcgplayer: 86207
	}
}

export default card
