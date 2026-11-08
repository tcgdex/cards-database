import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [957],
	set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'es-es': "Tinkatink",
		'it-it': "Tinkatink",
		'pt-br': "Tinkatink",
		'de-de': "Forgita"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Smithereen Smash",
			'fr-fr': "Pulvérisation",
			'es-es': "Machaque",
			'it-it': "Frammentazione",
			'pt-br': "Pancada Estilhaçante",
			'de-de': "Splitterschlag"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "Kouki Saitou",
	description: {
		'en-us': "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 703193,
				tcgplayer: 499996
			},
		}
	],
}

export default card
