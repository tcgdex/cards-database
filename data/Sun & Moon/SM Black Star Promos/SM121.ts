import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Raikou-GX",
		fr: "Raikou-GX",
		es: "Raikou-GX",
		it: "Raikou-GX",
		pt: "Raikou-GX",
		de: "Raikou-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig Claws",
				fr: "Creusogriffes",
				es: "Hundir garras",
				it: "Scavazanne",
				pt: "Fincar Garras",
				de: "Schaufelkrallen"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				es: "Trueno",
				it: "Tuono",
				pt: "Trovão",
				de: "Donner"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 50 danni a se stesso.",
				pt: "Jogue 1 moeda. Se sair coroa, este Pokémon causará 50 pontos de dano a si mesmo.",
				de: "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 50 Schadenspunkte zu."
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderous Rain GX",
				fr: "Pluie Tonitruante GX",
				es: "Lluvia Atronadora GX",
				it: "Pioggia Tonante GX",
				pt: "Chuva Estrondosa GX",
				de: "Donnerregen GX"
			},
			effect: {
				en: "This attack does 100 damage to each of your opponent’s Pokémon that has any Energy attached to it. (Don’t apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 100 dégâts à tout Pokémon de votre adversaire auquel de l’Énergie est attachée. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Este ataque hace 100 puntos de daño a cada uno de los Pokémon de tu rival que tenga alguna Energía unida a él. (No apliques Debilidad y Resistencia a los Pokémon en Banca). (No puedes usar más de 1 ataque GX en una partida).",
				it: "Questo attacco infligge 100 danni a ciascuno dei Pokémon del tuo avversario che ha Energie assegnate. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina. Non puoi usare più di un attacco GX a partita.",
				pt: "Este ataque causa 100 pontos de dano a cada um dos Pokémon do seu oponente que tiver alguma Energia ligada a ele (não aplique Fraqueza e Resistência aos Pokémon no Banco). (Você não pode usar mais de 1 ataque GX por partida.)",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners, an das mindestens 1 Energie angelegt ist, 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
	retreat: 1,



}

export default card
