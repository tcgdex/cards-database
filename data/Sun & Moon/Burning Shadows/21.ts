import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Ho-Oh-GX",
		fr: "Ho-Oh-GX",
		es: "Ho-Oh-GX",
		it: "Ho-Oh-GX",
		pt: "Ho-Oh-GX",
		de: "Ho-Oh-GX"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 190,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sacred Fire",
				fr: "Feu Sacré",
				es: "Fuego Sagrado",
				it: "Magifuoco",
				pt: "Fogo Sagrado",
				de: "Läuterfeuer"
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Phoenix Burn",
				fr: "Éclat du Phénix",
				es: "Ardor Fénix",
				it: "Scottata della Fenice",
				pt: "Fênix Ardente",
				de: "Phönix-Brand"
			},
			effect: {
				en: "This Pokémon can’t use Phoenix Burn during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Éclat du Phénix pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Ardor Fénix durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Scottata della Fenice.",
				pt: "Este Pokémon não poderá usar Fênix Ardente durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Phönix-Brand während deines nächsten Zuges nicht einsetzen."
			},
			damage: 180,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eternal Flame GX",
				fr: "Flamme Éternelle GX",
				es: "Llama Eterna GX",
				it: "Fiamma Eterna-GX",
				pt: "Flama Perene GX",
				de: "Ewige Flamme GX"
			},
			effect: {
				en: "Put 3 in any combination of Fire Pokémon-GX or Fire Pokémon-EX from your discard pile onto your Bench. (You can’t use more than 1 GX attack in a game.)",
				fr: "Ajoutez de votre pile de défausse à votre Banc une combinaison de 3 cartes choisies parmi des Pokémon-GX Fire et des Pokémon-EX Fire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 3 Pokémon-GX Fire o Pokémon-EX Fire, en cualquier combinación, de tu pila de descartes en tu Banca. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi tre Pokémon-GX Fire o Pokémon-EX Fire in qualsiasi combinazione dalla tua pila degli scarti e mettili nella tua panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 3 Pokémon-GX Fire ou Pokémon-EX Fire da sua pilha de descarte no seu Banco em qualquer combinação (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege eine beliebige Kombination aus 3 Fire-Pokémon-GX oder Fire-Pokémon-EX aus deinem Ablagestapel auf deine Bank. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
