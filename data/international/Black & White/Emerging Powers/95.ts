import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Pokémon Catcher",
		'fr-fr': "Attrape-Pokémon",
		'es-es': "CapturaPokémon",
		'it-it': "Acchiappa-Pokémon",
		'pt-br': "Pegador de Pokémon",
		'de-de': "Pokémon-Fänger"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Échangez le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
		'en-us': "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon.",
		'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Jogue uma moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
		'de-de': "Wirf 1 Münze. Bei „Kopf“ kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280060
	}
}

export default card
