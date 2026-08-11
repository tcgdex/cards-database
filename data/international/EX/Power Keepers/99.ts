import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Walrein ex",
		'fr-fr': "Kaimorse ex",
		'de-de': "Walraisa ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		365,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Chilling Breath",
				'fr-fr': "Haleine glaçante",
				'de-de': "Eiskalter Hauch"
			},
			effect: {
				'en-us': "Once during your turn, when you play Walrein ex from your hand to evolve 1 of your Pokémon, you may use this power. Your opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Kaimorse ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas jouer de carte Dresseur de sa main lors de son prochain tour.",
				'de-de': "Einmal während deines Zuges, wenn du Walraisa ex von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Poké-Power einsetzen. Dein Gegner kann in seinem nächsten Zug keine Trainerkarten von der Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wreck",
				'fr-fr': "Anéantissement",
				'de-de': "Zerschlagen"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this attack does 70 damage plus 20 more damage. Discard that Stadium card.",
				'fr-fr': "Si une carte Stade est en jeu, cette attaque inflige 70 dégâts plus 20 dégâts supplémentaires. Défaussez cette carte Stade.",
				'de-de': "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 70 Schadenspunkte plus 20 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 277405,
		tcgplayer: 90471
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card

