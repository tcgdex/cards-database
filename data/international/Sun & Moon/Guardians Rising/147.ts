import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Incineroar GX",
		'fr-fr': "Félinferno GX",
		'es-es': "Incineroar GX",
		'it-it': "Incineroar GX",
		'pt-br': "Incineroar GX",
		'de-de': "Fuegro GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Hustling Strike",
				'fr-fr': "Frappe Bousculante",
				'es-es': "Impacto Vigoroso",
				'it-it': "Colpo Vigoroso",
				'pt-br': "Ataque Apressado",
				'de-de': "Schneller Streich"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your Benched Fire Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon de Banc Fire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon Fire en Banca.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon Fire nella tua panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon Fire no seu Banco.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Fire-Pokémon auf deiner Bank zu."
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
				'en-us': "Tiger Swing",
				'fr-fr': "Projection de Tigre",
				'es-es': "Golpe Tigre",
				'it-it': "Colpo della Tigre",
				'pt-br': "Lança-tigre",
				'de-de': "Tigerschleuder"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu."
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
				'en-us': "Burning Slam GX",
				'fr-fr': "Percussion Brûlante GX",
				'es-es': "Sacudida Ardiente GX",
				'it-it': "Schianto Ardente-GX",
				'pt-br': "Pancada Ardente GX",
				'de-de': "Brandknall GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 297696,
		tcgplayer: 131055
	}
}

export default card
