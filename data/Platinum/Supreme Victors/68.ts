import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskeregen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Pattern",
				fr: "Style intimidant",
				de: "Einschüchterndes Muster"
			},
			effect: {
				en: "As long as Masquerain is your Active Pokémon, any damage done by an opponent's attack is reduced by 20 (before applying Weakness and Resistance).",
				fr: "Tant que Maskadra est votre Pokémon Actif, tous les dégâts infligés par une attaque de votre adversaire sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				de: "Solange Maskeregen dein Aktives Pokémon ist, wird Schaden, der durch einen gegnerischen Angriff zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Skim Attack",
				fr: "Attaque rasante",
				de: "Absahnangriff"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
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

	thirdParty: {
		cardmarket: 278759
	}
}

export default card
