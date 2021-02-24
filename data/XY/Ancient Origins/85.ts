import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "M Sceptile-EX",
		fr: "M-Jungko-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],
	hp: 220,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sceptile-EX",
		fr: "Jungko-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Jagged Saber",
				fr: "Stop Θ",
			},
			effect: {
				en: "You may attach up to 2 Grass Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
			},
			damage: 100,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				fr: "Sabre Tranchant",
			},
			effect: {
				fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie Grass de votre main à vos Pokémon de Banc, de la manière que vous voulez. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts au Pokémon choisi.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
