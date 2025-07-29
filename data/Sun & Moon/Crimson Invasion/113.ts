import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Golem GX",
		fr: "Grolem d’Alola GX",
		es: "Golem de Alola GX",
		it: "Golem di Alola GX",
		pt: "Golem de Alola GX",
		de: "Alola-Geowaz GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
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
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
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
				en: "Super Electromagnetic Tackle",
				fr: "Super Charge Électromagnétique",
				es: "Placaje Superelectromagnético",
				it: "Azione Superelettromagnetica",
				pt: "Ofensiva Supereletromagnética",
				de: "Superelektromagnetischer Rempler"
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
				es: "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 50 danni a se stesso.",
				pt: "Este Pokémon causa 50 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
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
				en: "Heavy Rock GX",
				fr: "Lourd Rocher GX",
				es: "Roca Pesada GX",
				it: "Macigno Ponderoso-GX",
				pt: "Rocha Pesada GX",
				de: "Schwerer Felsen GX"
			},
			effect: {
				en: "Your opponent can’t play any cards from their hand during their next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Tu rival no puede jugar ninguna carta de su mano durante su próximo turno. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il tuo avversario non può giocare nessuna carta che ha in mano durante il suo prossimo turno. Non puoi usare più di un attacco GX a partita.",
				pt: "Seu oponente não poderá jogar nenhuma carta da própria mão durante a próxima vez dele(a) jogar (você não pode usar mais de 1 ataque GX por partida).",
				de: "Dein Gegner kann während seines nächsten Zuges keine Karten aus seiner Hand spielen. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 311884
	}
}

export default card
