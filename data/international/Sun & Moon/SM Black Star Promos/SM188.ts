import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Kangourex GX",
		'en-us': "Kangaskhan GX",
		'es-es': "Kangaskhan GX",
		'it-it': "Kangaskhan GX",
		'pt-br': "Kangaskhan GX",
		'de-de': "Kangama GX"
	},
	illustrator: "aky CG Works",
	rarity: "Promo",
	category: "Pokemon",

	dexId: [115],

	set: Set,

	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'fr-fr': "Coup d’Poing en Demi Spirale",
				'en-us': "Split Spiral Punch",
				'es-es': "Puño en Espiral Cortante",
				'it-it': "Spiralpugno Squarciante",
				'pt-br': "Soco Espiral Dividido",
				'de-de': "Spiralhieb"
			},
			effect: {
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Frappe Enragée",
				'en-us': "Enraged Strike",
				'es-es': "Golpe Enfurecido",
				'it-it': "Colpo Furioso",
				'pt-br': "Golpe Raivoso",
				'de-de': "Wutstoß"
			},
			effect: {
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 80 dégâts supplémentaires.",
				'en-us': "If your opponent’s Active Pokémon is Confused, this attack does 80 more damage.",
				'es-es': "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 80 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 80 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'fr-fr': "Combine Familiale GX",
				'en-us': "Familial Combo GX",
				'es-es': "Combo Familiar GX",
				'it-it': "Combo Familiare GX",
				'pt-br': "Combo Familiar GX",
				'de-de': "Familienbund GX"
			},
			effect: {
				'fr-fr': "Piochez 5 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'en-us': "Draw 5 cards. (You can’t use more than 1 GX attack in a game.)",
				'es-es': "Roba 5 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Pesca cinque carte. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Compre 5 cartas (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Ziehe 5 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
