import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Muk",
		fr: "Grotadmorv de la Team Aqua",
		pt: "Muk da Equipe Aqua",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Team Aqua's Grimer",
		fr: "Tadmorv de la Team Aqua",
		pt: "Grimer da Equipe Aqua",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sludge Festival",
				fr: "Festival de Boue",
				pt: "Festival de Lodo"
			},
			effect: {
				en: "The Retreat Cost of each Pokémon in play (except for Team Aqua Pokémon) is Colorless more.",
				fr: "Le Coût de Retraite de chaque Pokémon en jeu (à part les Pokémon de la Team Aqua) est augmenté de Colorless.",
				pt: "O Custo para Recuar de cada um dos Pokémon em jogo (exceto os Pokémon da Equipe Aqua) será de Incolor a mais",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pester",
				fr: "Tarabustage",
				pt: "Importunar",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires.",
				pt: "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, esse ataque causará 60 de danos adicionais.",
			},
			damage: "60＋",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 282519,
		tcgplayer: 97054
	}
}

export default card
