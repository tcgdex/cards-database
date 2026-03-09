import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Flareon Star",
		fr: "Pyroli",
		de: "Flamara *"
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
				en: "Crimson Ray",
				fr: "Rayon rouge",
				de: "Purpurner Strahl"
			},
			effect: {
				en: "Once during your turn, when you put Flareon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Burned.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Pyroli  de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Brûlé.",
				de: "Einmal während deines Zuges, wenn du Flamara ☆ von deiner Hand auf deine Bank legst, kannst du diese Poké-Power einsetzen. Alle Aktiven Pokémon (deine und die deines Gegners) sind jetzt verbrannt."
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
				en: "Flamethrower",
				fr: "Lance-flamme",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard a Fire Energy attached to Flareon Star.",
				fr: "Défaussez une Énergie  attachée à Pyroli .",
				de: "Entferne eine -Energie von Flamara ☆ und lege sie auf deinen Ablagestapel."
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
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

