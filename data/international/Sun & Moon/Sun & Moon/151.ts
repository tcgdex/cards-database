import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Lapras GX",
		'fr-fr': "Lokhlass GX",
		'es-es': "Lapras GX",
		'it-it': "Lapras GX",
		'pt-br': "Lapras GX",
		'de-de': "Lapras GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 190,

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
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Tassa",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 3 cards.",
				'fr-fr': "Piochez 3 cartes.",
				'es-es': "Roba 3 cartas.",
				'it-it': "Pesca tre carte.",
				'pt-br': "Compre 3 cartas.",
				'de-de': "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Blizzard Burn",
				'fr-fr': "Blizzard Étourdissant",
				'es-es': "Quemadura de Hielo",
				'it-it': "Pirobora",
				'pt-br': "Queimadura de Neve",
				'de-de': "Blizzardbrand"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam GX",
				'fr-fr': "Laser Glace GX",
				'es-es': "Rayo Hielo GX",
				'it-it': "Geloraggio-GX",
				'pt-br': "Raio Congelante GX",
				'de-de': "Eisstrahl GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 295464,
		tcgplayer: 127190
	}
}

export default card
