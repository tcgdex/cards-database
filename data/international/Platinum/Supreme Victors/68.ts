import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Masquerain",
		'fr-fr': "Maskadra",
		'de-de': "Maskeregen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [284],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Surskit",
		'fr-fr': "Arakdo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Intimidating Pattern",
				'fr-fr': "Style intimidant",
				'de-de': "Einschüchterndes Muster"
			},
			effect: {
				'en-us': "As long as Masquerain is your Active Pokémon, any damage done by an opponent's attack is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Tant que Maskadra est votre Pokémon Actif, tous les dégâts infligés par une attaque de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Solange Maskeregen dein Aktives Pokémon ist, wird Schaden, der durch einen gegnerischen Angriff zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Skim Attack",
				'fr-fr': "Attaque rasante",
				'de-de': "Absahnangriff"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'de-de': "Ziehe 2 Karten."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	description: {
		'en-us': "Its antennae have eye patterns on them. Its four wings enable it to hover and fly in any direction."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87249,
				cardmarket: 278759
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278759,
				tcgplayer: 87249
			}
		},
	],

}

export default card
