import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
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
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Fire Counterattack",
				de: "Feuerkonter"
			},
			effect: {
				en: "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
				de: "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Roar",
				de: "Finsternisbrüller"
			},
			effect: {
				en: "Your opponent discards a card from his or her hand.",
				de: "Der Gegner legt eine seiner Handkarten auf seinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279653,
		tcgplayer: 86211
	}
}

export default card
