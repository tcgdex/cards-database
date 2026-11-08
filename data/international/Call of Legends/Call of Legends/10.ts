import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [229],

	hp: 90,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Fire Counterattack",
				'fr-fr': "Contre-attaque de feu",
				'de-de': "Feuerkonter"
			},
			effect: {
				'en-us': "If your opponent has any Fighting Pokémon in play, this attack does 20 damage plus 60 more damage.",
				'fr-fr': "Si votre adversaire dispose de n'importe quel Pokémon  en jeu, cette attaque inflige 20 dégâts plus 60 dégâts supplémentaires.",
				'de-de': "Wenn dein Gegner mindestens 1 -Pokémon im Spiel hat, fügt dieser Angriff 20 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Roar",
				'fr-fr': "Cri des Ténèbres",
				'de-de': "Finsternisbrüller"
			},
			effect: {
				'en-us': "Your opponent discards a card from his or her hand.",
				'fr-fr': "Votre adversaire défausse une carte de sa main.",
				'de-de': "Der Gegner legt eine seiner Handkarten auf seinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
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
		'en-us': "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86211,
				cardmarket: 279653
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86211,
				cardmarket: 279653
			},
		},
	],

}

export default card
