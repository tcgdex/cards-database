import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Incineroar GX",
		fr: "Félinferno GX",
		es: "Incineroar GX",
		it: "Incineroar GX",
		pt: "Incineroar GX",
		de: "Fuegro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 250,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hustling Strike",
				fr: "Frappe Bousculante",
				es: "Impacto Vigoroso",
				it: "Colpo Vigoroso",
				pt: "Ataque Apressado",
				de: "Schneller Streich"
			},
			effect: {
				en: "This attack does 20 more damage for each of your Benched Fire Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc Fire.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon Fire en Banca.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon Fire nella tua panchina.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon Fire no seu Banco.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Fire-Pokémon auf deiner Bank zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Tiger Swing",
				fr: "Projection de Tigre",
				es: "Golpe Tigre",
				it: "Colpo della Tigre",
				pt: "Lança-tigre",
				de: "Tigerschleuder"
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
				it: "Lancia due volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
				pt: "Jogue 2 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Slam GX",
				fr: "Percussion Brûlante GX",
				es: "Sacudida Ardiente GX",
				it: "Schianto Ardente-GX",
				pt: "Pancada Ardente GX",
				de: "Brandknall GX"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned. (You can’t use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El Pokémon Activo de tu rival pasa a estar Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Il Pokémon attivo del tuo avversario viene bruciato. Non puoi usare più di un attacco GX a partita.",
				pt: "O Pokémon Ativo do seu oponente agora está Queimado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295337,
		tcgplayer: 126898
	}
}

export default card
