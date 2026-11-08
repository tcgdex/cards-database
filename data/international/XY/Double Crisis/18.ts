import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Mightyena",
		'fr-fr': "Grahyèna de la Team Aqua",
		'pt-br': "Mightyena da Equipe Aqua",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Team Aqua's Poochyena",
		'fr-fr': "Medhyèna de la Team Aqua",
		'pt-br': "Poochyena da Equipe Aqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Teampact",
				'fr-fr': "Teampact",
				'pt-br': "Impacto em Equipe"
			},
			effect: {
				'en-us': "Flip a coin for each Team Aqua Pokémon you have in play. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Pokémon de la Team Aqua que vous avez en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'pt-br': "Jogue uma moeda para cada Pokémon da Equipe Aqua que você tem em jogo. Esse ataque causa 30 de danos vezes o número de caras.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'pt-br': "Mastigada",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente."
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Thanks to Mightyena's outstanding leadership, it's very good at combination attacks that can leave a foe helpless.",
	},

	thirdParty: {
		cardmarket: 282529,
		tcgplayer: 97064
	}
}

export default card
