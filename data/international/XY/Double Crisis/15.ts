import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Groudon EX",
		'fr-fr': "Groudon-EX de la Team Magma",
		'pt-br': "Groudon-EX da Equipe Magma",
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 190,

	types: [
		"Fighting",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Saver",
				'fr-fr': "Économie de Puissance",
				'pt-br': "Economizador de Energia",
			},
			effect: {
				'en-us': "If there are 4 or fewer Team Magma Pokémon in play, this Pokémon can't attack.",
				'fr-fr': "S'il y a 4 Pokémon de la Team Magma en jeu ou moins, ce Pokémon ne peut pas attaquer.",
				'pt-br': "Se houver 4 ou menos Pokémon da Equipe Magma em jogo, esse Pokémon não poderá atacar.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Magma Quake",
				'fr-fr': "Secousse Magma",
				'pt-br': "Terremoto de Magma",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 80 de danos adicionais.",
			},
			damage: "80＋",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 282526,
		tcgplayer: 97061
	}
}

export default card
