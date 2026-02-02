import { Card } from '../../../interfaces'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		en: "Team Aqua's Seviper",
		fr: "Séviper de la Team Aqua",
		pt: "Seviper da Equipe Aqua",
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		336,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
				pt: "Dente Venenoso",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Envenenado.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venom Tail",
				fr: "Queue Venimeuse",
				pt: "Cauda Envenenada",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, discard an Energy attached to that Pokémon.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, défaussez une Énergie lui étant attachée.",
				pt: "Se o Pokémon Ativo do seu oponente estiver sendo afetado por uma Condição Especial, descarte uma Energia ligada a esse Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282520,
		tcgplayer: 97055
	}
}

export default card
