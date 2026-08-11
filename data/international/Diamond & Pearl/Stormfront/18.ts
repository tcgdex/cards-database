import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fainting Spell",
				'fr-fr': "Sort évanouissement",
				'de-de': "Ohnmachtsanfall"
			},
			effect: {
				'en-us': "Once during your opponent's turn, if Gengar would be Knocked Out by damage from an attack, you may flip a coin. If heads, the Defending Pokémon is Knocked Out.",
				'fr-fr': "Une seule fois lors du tour de votre adversaire, si Ectoplasma est mis K.O par des dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				'de-de': "Einmal während des Zuges deines Gegners kannst du, wenn Gengar durch Schaden eines Angriffs kampfunfähig würde, 1 Münze werfen. Bei \"Kopf\" ist das Angreifende Pokémon jetzt kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shadow Room",
				'fr-fr': "Pièce-ombre",
				'de-de': "Schattenraum"
			},
			effect: {
				'en-us': "Put 3 damage counters on 1 of your opponent's Pokémon. If that Pokémon has any Poké-Powers, put 6 damage counters on that Pokémon instead.",
				'fr-fr': "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si ce Pokémon possède des Poké-Powers, placez 6 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners. Wenn dieses Pokémon mindestens 1 Poké-Power hat, lege stattdessen 6 Schadensmarken darauf."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Poltergeist",
				'fr-fr': "Poltergeist",
				'de-de': "Poltergeist"
			},
			effect: {
				'en-us': "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade dans la main de votre adversaire.",
				'de-de': "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Trainer-, Unterstützer- und Stadion-Karten, die du dort gefunden hast, zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 278316,
		tcgplayer: 85676
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
	]
}

export default card
