import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Sylveon GX",
		'fr-fr': "Nymphali GX",
		'es-es': "Sylveon GX",
		'it-it': "Sylveon GX",
		'pt-br': "Sylveon GX",
		'de-de': "Feelinara GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		700,
	],

	hp: 200,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Magical Ribbon",
				'fr-fr': "Ruban Magique",
				'es-es': "Cinta Mágica",
				'it-it': "Fiocco Magico",
				'pt-br': "Fita Mágica",
				'de-de': "Zauberband"
			},
			effect: {
				'en-us': "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a tre carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 110,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Plea GX",
				'fr-fr': "Supplique GX",
				'es-es': "Ruego GX",
				'it-it': "Istanza-GX",
				'pt-br': "Apelo GX",
				'de-de': "Anflehen GX"
			},
			effect: {
				'en-us': "Put 2 of your opponent’s Benched Pokémon and all cards attached to them into your opponent’s hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Placez 2 des Pokémon de Banc de votre adversaire et toutes les cartes qui leur sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon 2 de los Pokémon en Banca de tu rival y todas las cartas unidas a ellos en la mano de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi due dei Pokémon in panchina del tuo avversario e tutte le carte loro assegnate e aggiungili alle carte che ha in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Coloque 2 Pokémon no Banco do seu oponente e todas as cartas ligadas a eles na mão do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Gib deinem Gegner 2 Pokémon von seiner Bank und alle an sie angelegten Karten auf seine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 297606,
		tcgplayer: 131008
	}
}

export default card
