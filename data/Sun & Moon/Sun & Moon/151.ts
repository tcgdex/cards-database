import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lapras GX",
		fr: "Lokhlass GX",
		es: "Lapras GX",
		it: "Lapras GX",
		pt: "Lapras GX",
		de: "Lapras GX"
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
				en: "Collect",
				fr: "Collecte",
				es: "Coleccionar",
				it: "Tassa",
				pt: "Coleta",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
				es: "Roba 3 cartas.",
				it: "Pesca tre carte.",
				pt: "Compre 3 cartas.",
				de: "Ziehe 3 Karten."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
				es: "Quemadura de Hielo",
				it: "Pirobora",
				pt: "Queimadura de Neve",
				de: "Blizzardbrand"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
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
				en: "Ice Beam GX",
				fr: "Laser Glace GX",
				es: "Rayo Hielo GX",
				it: "Geloraggio-GX",
				pt: "Raio Congelante GX",
				de: "Eisstrahl GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Paralyzed. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Paralizado. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Paralisado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 295345
	}
}

export default card
