import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Armaldo δ",
		fr: "Armaldo δ ESPÈCES DELTA"
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
				fr: "Lame Delta"
			},
			effect: {
				en: "If you have any Supporter cards in play, this attack's base damage is 20 instead of 70.",
				fr: "Si vous avez des cartes Supporter en jeu, les dégâts de base de cette attaque sont de 20 au lieu de 70."
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
				fr: "Attaque fossile"
			},
			effect: {
				en: "You may discard a Claw Fossil, Mysterious Fossil, Root Fossil, or Holon Fossil from your hand. If you do, choose 1 of your opponent's Benched Pokémon and do 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez défausser Fossile griffe, Mystérieux fossile, Fossile racine ou Fossile Holon de votre main. Choisissez alors 1 des Pokémon de Banc de votre adversaire et infligez-lui 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
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





}

export default card
