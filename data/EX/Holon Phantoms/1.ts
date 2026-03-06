import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Armaldo δ",
		fr: "Armaldo δ",
		de: "Armaldo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 110,

	types: [
		"Fighting",
		"Metal",
	],

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Delta Edge",
				fr: "Lame Delta",
				de: "Delta-Schneide"
			},
			effect: {
				en: "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70.",
				fr: "Si vous avez des cartes Supporter en jeu, les dégâts de base de cette attaque sont de 20 au lieu de 70.",
				de: "Wenn du mindestens 1 Unterstützerkarte im Spiel hast, beträgt der Grundschaden dieses Angriffs 20 Schadenspunkte anstelle von 70 Schadenspunkten."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fossil Charge",
				fr: "Attaque fossile",
				de: "Fossiler Sturmangriff"
			},
			effect: {
				en: "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser Fossile griffe, Mystérieux fossile, Fossile racine ou Fossile Holon de votre main. Choisissez alors 1 des Pokémon de Banc de votre adversaire et infligez-lui 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Du kannst ein Klauenfossil, Geheimnis-Fossil, Wurzelfossil oder Holon-Fossil von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, kannst du 1 Pokémon auf der Bank deines Gegners wählen und diesem 30 Schadenspunkte zufügen. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		cardmarket: 276971
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
