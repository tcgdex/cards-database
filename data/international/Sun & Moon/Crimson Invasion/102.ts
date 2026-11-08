import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Alolan Golem GX",
		'fr-fr': "Grolem d’Alola GX",
		'es-es': "Golem de Alola GX",
		'it-it': "Golem di Alola GX",
		'pt-br': "Golem de Alola GX",
		'de-de': "Alola-Geowaz GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 250,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Alolan Graveler",
		'fr-fr': "Gravalanch d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 80,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Electromagnetic Tackle",
				'fr-fr': "Super Charge Électromagnétique",
				'es-es': "Placaje Superelectromagnético",
				'it-it': "Azione Superelettromagnetica",
				'pt-br': "Ofensiva Supereletromagnética",
				'de-de': "Superelektromagnetischer Rempler"
			},
			effect: {
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 200,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Rock GX",
				'fr-fr': "Lourd Rocher GX",
				'es-es': "Roca Pesada GX",
				'it-it': "Macigno Ponderoso-GX",
				'pt-br': "Rocha Pesada GX",
				'de-de': "Schwerer Felsen GX"
			},
			effect: {
				'en-us': "Your opponent can’t play any cards from their hand during their next turn. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Tu rival no puede jugar ninguna carta de su mano durante su próximo turno. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il tuo avversario non può giocare nessuna carta che ha in mano durante il suo prossimo turno. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Seu oponente não poderá jogar nenhuma carta da própria mão durante a próxima vez dele(a) jogar (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Dein Gegner kann während seines nächsten Zuges keine Karten aus seiner Hand spielen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 311949,
		tcgplayer: 149128
	}
}

export default card
