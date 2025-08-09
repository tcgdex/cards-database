import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		fr: "Kangourex GX",
		en: "Kangaskhan GX",
		es: "Kangaskhan GX",
		it: "Kangaskhan GX",
		pt: "Kangaskhan GX",
		de: "Kangama GX"
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
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
				fr: "Coup d’Poing en Demi Spirale",
				en: "Split Spiral Punch",
				es: "Puño en Espiral Cortante",
				it: "Spiralpugno Squarciante",
				pt: "Soco Espiral Dividido",
				de: "Spiralhieb"
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				en: "Your opponent’s Active Pokémon is now Confused.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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
				fr: "Frappe Enragée",
				en: "Enraged Strike",
				es: "Golpe Enfurecido",
				it: "Colpo Furioso",
				pt: "Golpe Raivoso",
				de: "Wutstoß"
			},
			effect: {
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 80 dégâts supplémentaires.",
				en: "If your opponent’s Active Pokémon is Confused, this attack does 80 more damage.",
				es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
				fr: "Combine Familiale GX",
				en: "Familial Combo GX",
				es: "Combo Familiar GX",
				it: "Combo Familiare GX",
				pt: "Combo Familiar GX",
				de: "Familienbund GX"
			},
			effect: {
				fr: "Piochez 5 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				en: "Draw 5 cards. (You can’t use more than 1 GX attack in a game.)",
				es: "Roba 5 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Pesca cinque carte. Non puoi usare più di un attacco GX a partita.",
				pt: "Compre 5 cartas (você não pode usar mais de 1 ataque GX por partida).",
				de: "Ziehe 5 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
