import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Hélédelle",
		es: "Swellow",
		it: "Swellow",
		pt: "Swellow",
		de: "Schwalboss"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Drive Off",
				fr: "Déroute",
				es: "Huida",
				it: "Filar Via",
				pt: "Rechaçar",
				de: "Wegtreiben"
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá fazer com que seu oponente troque seu Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281440
	}
}

export default card
