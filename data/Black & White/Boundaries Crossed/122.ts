import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		508,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sentinel",
				fr: "Sentinelle",
				es: "Centinela",
				it: "Sentinella",
				pt: "Sentinela",
				de: "Wächter"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Supporter cards from his or her hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Supporter de sa main.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Partidario de su mano.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Aiuto che ha in mano.",
				pt: "Desde que este Pokémon seja seu Pokémon Ativo, seu oponente não poderá jogar cards de Apoiador da mão dele ou dela.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Unterstützerkarten von seiner Hand spielen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 90,

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
