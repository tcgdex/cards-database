import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Golduck δ",
		'fr-fr': "Akwakwak δ",
		'de-de': "Entoron"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Block",
				'fr-fr': "Blocage Delta",
				'de-de': "Delta-Block"
			},
			effect: {
				'en-us': "As long as any Stadium card with Holon in its name is in play, your opponent can't play any Stadium cards from his or her hand.",
				'fr-fr': "Tant que des cartes Stade dont le nom comporte Holon sont en jeu, votre adversaire ne peut pas jouer de carte Stade de sa main.",
				'de-de': "Solange sich eine Stadion-Karte mit \"Holon\" im Namen im Spiel befindet, kann dein Gegner keine Stadion-Karten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Mind Play",
				'fr-fr': "Manoeuvre psychologique",
				'de-de': "Gedankenspiel"
			},
			effect: {
				'en-us': "Choose 1 card from your opponent's hand without looking. Look at the card you chose. If that card is a Trainer card, this attack does 30 damage plus 30 more damage, and discard that card. If that card is not a Trainer card, return it to your opponent's hand.",
				'fr-fr': "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez cette carte. Si c'est une carte Dresseur, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte. Si cette carte n'est pas une carte Dresseur, replacez-la dans la main de votre adversaire.",
				'de-de': "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an. Wenn es eine Trainerkarte ist, fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu und lege die Karte danach auf den Ablagestapel deines Gegners. Wenn es keine Trainerkarte ist, nimmt dein Gegner sie zurück auf die Hand."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277013
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
