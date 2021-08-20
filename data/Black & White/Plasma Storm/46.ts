import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnézone",
		es: "Magnezone",
		it: "Magnezone",
		pt: "Magnezone",
		de: "Magnezone"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magnéton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dual Brains",
				fr: "Double Cerveau",
				es: "Doble Cerebro",
				it: "Doppiamente",
				pt: "Cérebros Duplos",
				de: "Doppelhirn"
			},
			effect: {
				en: "During your turn, you may play 2 Supporter cards.",
				fr: "Pendant votre tour, vous pouvez jouer 2 cartes Supporter.",
				es: "Durante tu turno, puedes jugar 2 cartas de Partidario.",
				it: "Durante il tuo turno, puoi giocare due carte Aiuto.",
				pt: "Durante sua vez de jogar, você poderá jogar 2 cards de Apoiador.",
				de: "Während deines Zuges kannst du 2 Unterstützerkarten spielen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc. Ensuite, votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
