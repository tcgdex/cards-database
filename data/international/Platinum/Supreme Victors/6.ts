import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Magmortar",
		'fr-fr': "Maganon",
		'de-de': "Magbrant"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [467],

	hp: 110,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Magmar",
		'fr-fr': "Magmar"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Evolutionary Flame",
				'fr-fr': "Flamme évolutive",
				'de-de': "Entwickelnde Flamme"
			},
			effect: {
				'en-us': "Once during your turn, when you play Magmortar from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent's Active Pokémon is now Burned and Confused.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Maganon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Magbrant von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, diese Poké-Power benutzen. Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Arrow",
				'fr-fr': "Flèche de feu",
				'de-de': "Feuerpfeil"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Ball",
				'fr-fr': "Boule de feu",
				'de-de': "Flammender Ball"
			},
			effect: {
				'en-us': "You may move a Fire Energy card attached to Magmortar to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer une carte Énergie Fire attachée à Maganon sur 1 de vos Pokémon de Banc.",
				'de-de': "Du kannst 1 an Magbrant angelegte -Energiekarte entfernen und sie an 1 Pokémon auf deiner Bank anlegen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87058,
				cardmarket: 278697
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278697,
				tcgplayer: 87058
			}
		},
	],

}

export default card
