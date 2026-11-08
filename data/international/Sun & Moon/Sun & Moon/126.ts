import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Pokémon Catcher",
		'fr-fr': "Attrape-Pokémon",
		'es-es': "Capturapokémon",
		'it-it': "Acchiappa-Pokémon",
		'pt-br': "Pegador de Pokémon",
		'de-de': "Pokémon-Fänger"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		'en-us': "Flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
		'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
		'it-it': "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
		'pt-br': "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
		'de-de': "Wirf 1 Münze. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295439
	}
}

export default card
