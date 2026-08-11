import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Delcatty ex",
		'fr-fr': "Delcatty ex",
		'de-de': "Enekoro ex"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Constrain",
				'fr-fr': "Limitation",
				'de-de': "Behindern"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Chaque joueur défausse des cartes jusqu'à ce qu'il ne lui reste plus que 6 cartes en main. (Vous défaussez vos cartes en premier.) Ce pouvoir ne peut pas être utilisé si Delcatty ex est affecté par un État Spécial.",
				'de-de': "Während deines Zuges (vor deinem Angriff) kannst du ein Mal diese Poké-Power einsetzen. Jeder Spieler legt solange Karten von seiner Hand auf seinen Ablagestapel, bis er nur noch 4 Karten auf der Hand hat. (Du legst als Erster eine Karte auf den Ablagestapel.) Diese Poké-Power kann nicht benutzt werden, wenn Enekoro ex von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Upstream",
				'fr-fr': "Remonter le courant",
				'de-de': "Aufwärtsfluss"
			},
			effect: {
				'en-us': "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre pile de défausse toutes les cartes Énergie. Cette attaque inflige 10 dégâts multipliés par le nombre de cartes Énergie que vous trouvez. Montrez-les à votre adversaire et placez-les au dessus de votre deck. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach allen dort befindlichen Energiekarten. Dieser Angriff fügt 10 Schadenspunkte für jede Energiekarte, die du in deinem Ablagestapel gefunden hast, zu. Zeige die Karten deinem Gegner und lege sie auf dein Deck. Mische dein Deck danach."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'keu",
				'de-de': "Schweifschlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 0,

	thirdParty: {
		cardmarket: 277172,
		tcgplayer: 84744
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
