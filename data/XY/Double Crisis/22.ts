import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Magma's Zangoose",
		fr: "Mangriff de la Team Magma",
		pt: "Zangoose da Equipe Magma",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				pt: "Chamar a Família",
			},
			effect: {
				en: "Search your deck for up to 2 Basic Team Magma Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon de base de la Team Magma dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				pt: "Procure em seu baralho até 2 Pokémon da Equipe Magma Basico e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Team Play",
				fr: "Jeu d'Équipe",
				pt: "Jogo em Equipe",
			},
			effect: {
				en: "This attack does 20 damage times the number of Team Magma Pokémon on your Bench.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon de la Team Magma sur votre Banc.",
				pt: "Esse ataque causa 20 de danos vezes o número de Pokémon da Equipe Magma no seu Banco.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282533,
		tcgplayer: 97068
	}
}

export default card
