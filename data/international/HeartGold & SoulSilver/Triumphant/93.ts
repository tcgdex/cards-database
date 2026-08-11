import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [101],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energymite",
				'fr-fr': "Énergimite",
				'de-de': "Enermit"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. If you do, Electrode is Knocked Out. Look at the top 7 cards of your deck. Choose as many Energy cards as you like and attach them to your Pokémon in any way you like. Discard the other cards. This power can't be used if Electrode is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce Poké-Power. Dans ce cas, Electrode est mis K.O. Regardez les 7 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez et attachez-les à vos Pokémon comme bon vous semble. Défaussez les autres cartes. Ce Poké-Power ne peut pas être utilisé si Electrode est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Wenn du das machst, wird Lektrobal kampfunfähig. Schau dir die obersten 7 Karten deines Decks an. Wähle beliebig viele Energiekarten, die du dort gefunden hast, und lege sie in beliebiger Verteilung an deine Pokémon an. Lege die anderen Karten auf deinen Ablagestapel. Diese Poké-Power kann nicht verwendet werden, wenn Lektrobal von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gigashock",
				'fr-fr': "Electrochok",
				'de-de': "Gigaschock"
			},
			effect: {
				'en-us': "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,
	suffix: "Prime",

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85160,
				cardmarket: 279564
			}
		},
	],

}

export default card
