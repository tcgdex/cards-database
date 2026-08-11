import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Wishiwashi GX",
		'fr-fr': "Froussardine GX",
		'es-es': "Wishiwashi GX",
		'it-it': "Wishiwashi GX",
		'pt-br': "Wishiwashi GX",
		'de-de': "Lusardin GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 210,

	types: [
		"Water",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Torrential Vortex",
				'fr-fr': "Vortex Torrentiel",
				'es-es': "Vórtice Torrencial",
				'it-it': "Vortice Torrenziale",
				'pt-br': "Vórtice Torrencial",
				'de-de': "Reißender Strudel"
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				'it-it': "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 120,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blue Surge GX",
				'fr-fr': "Déferlement Bleu GX",
				'es-es': "Oleada Azul GX",
				'it-it': "Ondata Blu-GX",
				'pt-br': "Rebentação Azul GX",
				'de-de': "Blaue Flut GX"
			},
			effect: {
				'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Sposta a piacimento tutte le Energie da questo Pokémon a quelli nella tua panchina. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 297585,
		tcgplayer: 130939
	}
}

export default card
