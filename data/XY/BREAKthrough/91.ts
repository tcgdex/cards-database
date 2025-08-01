import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stand In",
				fr: "Remplaçant",
				es: "Paso al Frente",
				it: "Supplente",
				pt: "Substituir",
				de: "Vertretung"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes cambiar este Pokémon por tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon estiver em seu Banco, você poderá trocá-lo com seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, dieses Pokémon gegen dein Aktives Pokémon austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Jack",
				fr: "Emprise Mentale",
				es: "Levantamente",
				it: "Sollevamente",
				pt: "Tomada Mental",
				de: "Gedankenstoß"
			},
			effect: {
				en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 30 de danos adicionais para cada Pokémon no Banco do seu oponente.",
				de: "Dieser Angriff fügt 30 weitere Schadenspunkte für jedes Pokémon auf der Bank deines Gegners zu."
			},
			damage: "10+",

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

	retreat: 2,

	thirdParty: {
		cardmarket: 286337
	}
}

export default card
