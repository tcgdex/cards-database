import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar"
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
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fainting Spell",
				fr: "Sort évanouissement",
				de: "Ohnmachtsanfall"
			},
			effect: {
				en: "Once during your opponent's turn, if Gengar would be Knocked Out by damage from an attack, you may flip a coin. If heads, the Defending Pokémon is Knocked Out.",
				fr: "Une seule fois lors du tour de votre adversaire, si Ectoplasma est mis K.O par des dégâts d'une attaque, vous pouvez lancer une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
				de: "Einmal während des Zuges deines Gegners kannst du, wenn Gengar durch Schaden eines Angriffs kampfunfähig würde, 1 Münze werfen. Bei \"Kopf\" ist das Angreifende Pokémon jetzt kampfunfähig."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Room",
				fr: "Pièce-ombre",
				de: "Schattenraum"
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon. If that Pokémon has any Poké-Powers, put 6 damage counters on that Pokémon instead.",
				fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Si ce Pokémon possède des Poké-Powers, placez 6 marqueurs de dégât sur ce Pokémon.",
				de: "Lege 3 Schadensmarken auf 1 Pokémon deines Gegners. Wenn dieses Pokémon mindestens 1 Poké-Power hat, lege stattdessen 6 Schadensmarken darauf."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
				fr: "Poltergeist",
				de: "Poltergeist"
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage times the number of Trainer, Supporter, and Stadium cards in your opponent's hand.",
				fr: "Regardez la main de votre adversaire. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Dresseur, Supporter et Stade dans la main de votre adversaire.",
				de: "Schau dir die Handkarten deines Gegners an. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der Trainer-, Unterstützer- und Stadion-Karten, die du dort gefunden hast, zu."
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
