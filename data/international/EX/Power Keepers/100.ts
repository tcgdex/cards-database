import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Flareon ☆",
		'fr-fr': "Pyroli ☆",
		'de-de': "Flamara ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Crimson Ray",
				'fr-fr': "Rayon rouge",
				'de-de': "Purpurner Strahl"
			},
			effect: {
				'en-us': "Once during your turn, when you put Flareon ☆ from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Burned.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Pyroli ☆ de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Brûlé.",
				'de-de': "Einmal während deines Zuges, wenn du Flamara ☆ von deiner Hand auf deine Bank legst, kannst du diese Poké-Power einsetzen. Alle Aktiven Pokémon (deine und die deines Gegners) sind jetzt verbrannt."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard a Fire Energy attached to Flareon ☆.",
				'fr-fr': "Défaussez une Énergie  attachée à Pyroli ☆.",
				'de-de': "Entferne eine -Energie von Flamara ☆ und lege sie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 85503
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

