import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Salamence LV. X",
		de: "Brutalanda"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	
	hp: 160,

	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Double Fall",
				de: "Doppelpreis"
			},
			effect: {
				en: "Once during your turn (before your attack), when you put Salamence LV.X from your hand onto your Active Salamence, you may use this power. For each of your opponent's Pokémon that is Knocked Out by damage from Salamence's attacks this turn, take 1 more Prize card.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn du Brutalanda LV.X auf dein Aktives Brutalanda legst, diese Poké-Power benutzen. Nimm für jedes Pokémon deines Gegners, das in diesem Zug durch Schaden von Brutalandas Angriffen kampfunfähig wird, 1 zusätzlichen Preis."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
				de: "Dampfstrahl"
			},
			effect: {
				en: "Discard an Energy card attached to Salamence.",
				de: "Entferne 1 an Brutalanda angelegte Energiekarte und lege sie auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
