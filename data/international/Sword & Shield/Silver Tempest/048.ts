import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [752],
	set: Set,

	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Drowning Ball",
			'fr-fr': "Bulle Noyade",
			'es-es': "Burbuja Ahogante",
			'it-it': "Annegabolla",
			'pt-br': "Bola de Afogamento",
			'de-de': "Ertränkende Blase"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e scarti un'Energia assegnata a quel Pokémon.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado, e descarte 1 Energia daquele Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und du legst 1 Energie von jenem Pokémon auf den Ablagestapel deines Gegners."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Headbutt Bounce",
			'fr-fr': "Culbute Surprise",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It launches water bubbles with its legs, drowning prey within the bubbles. This Pokémon can then take its time to savor its meal.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682095,
				tcgplayer: 451696
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682095,
				tcgplayer: 451696
			}
		},
	],
}

export default card
