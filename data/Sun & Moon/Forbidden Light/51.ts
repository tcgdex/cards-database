import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		it: "Malamar",
		pt: "Malamar",
		de: "Calamanero"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Recharge",
				fr: "Recharge Psy",
				es: "Psicorrecarga",
				it: "Psicocarica",
				pt: "Recarga Psíquica",
				de: "Psycho-Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Psychic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Psychic de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Psychic dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Psychic da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Psychic-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Sphere",
				fr: "Sphère Psy",
				es: "Esfera Psíquica",
				it: "Psicosfera",
				pt: "Esfera Psíquica",
				de: "Psychosphäre"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355570,
		tcgplayer: 165701
	}
}

export default card
