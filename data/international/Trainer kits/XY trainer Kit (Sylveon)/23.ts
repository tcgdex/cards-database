import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pokémon Catcher",
		'fr-fr': "Attrape-Pokémon",
		'es-es': "Capturapokémon",
		'it-it': "Acchiappa-Pokémon",
		'pt-br': "Pegador de Pokémon",
		'de-de': "Pokémon-Fänger"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon.",
		'fr-fr': "Lancez une pièce. Si c’est face, échangez 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Jogue uma moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
		'de-de': "Wirf 1 Münze. Bei \"Kopf\" kannst du 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
	},

	trainerType: "Item"
}

export default card