import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Seasonal Blessings",
				fr: "Vœux de Saison",
				es: "Bendiciones Estacionales",
				it: "Preghiera Stagionale",
				pt: "Bênçãos Sazonais",
				de: "Segen der Jahreszeit"
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Rebond",
				es: "Bote",
				it: "Rimbalzo",
				pt: "Ricochete",
				de: "Sprungfeder"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 407734,
		tcgplayer: 201925
	}
}

export default card
