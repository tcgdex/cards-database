import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wishiwashi GX",
		fr: "Froussardine GX",
		es: "Wishiwashi GX",
		it: "Wishiwashi GX",
		pt: "Wishiwashi GX",
		de: "Lusardin GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revolver d’Água",
				de: "Aquaknarre"
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
				en: "Torrential Vortex",
				fr: "Vortex Torrentiel",
				es: "Vórtice Torrencial",
				it: "Vortice Torrenziale",
				pt: "Vórtice Torrencial",
				de: "Reißender Strudel"
			},
			effect: {
				en: "Discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
				en: "Blue Surge GX",
				fr: "Déferlement Bleu GX",
				es: "Oleada Azul GX",
				it: "Ondata Blu-GX",
				pt: "Rebentação Azul GX",
				de: "Blaue Flut GX"
			},
			effect: {
				en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like. (You can’t use more than 1 GX attack in a game.)",
				fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Sposta a piacimento tutte le Energie da questo Pokémon a quelli nella tua panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 297500,
		tcgplayer: 130940
	}
}

export default card
