import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Kyogre EX",
		fr: "Kyogre-EX de la Team Aqua",
		pt: "Kyogre-EX da Equipe Aqua",
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 190,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Power Saver",
				fr: "Économie de Puissance",
				pt: "Economizador de Energia",
			},
			effect: {
				en: "If there are 4 or fewer Team Aqua Pokémon in play, this Pokémon can't attack.",
				fr: "S'il y a 4 Pokémon de la Team Aqua en jeu ou moins, ce Pokémon ne peut pas attaquer.",
				pt: "Se houver 4 ou menos Pokémon da Equipe Aqua em jogo, esse Pokémon não poderá atacar",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Impact",
				fr: "Impact Aqua",
				pt: "Impacto Aqua",
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Incolor no Custo para Recuar do Pokémon Ativo do seu oponente."
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
		cardmarket: 282517,
		tcgplayer: 97052
	}
}

export default card
