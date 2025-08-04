import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Sylveon GX",
		fr: "Nymphali GX",
		es: "Sylveon GX",
		it: "Sylveon GX",
		pt: "Sylveon GX",
		de: "Feelinara GX"
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
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Magical Ribbon",
				fr: "Ruban Magique",
				es: "Cinta Mágica",
				it: "Fiocco Magico",
				pt: "Fita Mágica",
				de: "Zauberband"
			},
			effect: {
				en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
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
				en: "Plea GX",
				fr: "Supplique GX",
				es: "Ruego GX",
				it: "Istanza-GX",
				pt: "Apelo GX",
				de: "Anflehen GX"
			},
			effect: {
				en: "Put 2 of your opponent’s Benched Pokémon and all cards attached to them into your opponent’s hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Placez 2 des Pokémon de Banc de votre adversaire et toutes les cartes qui leur sont attachées dans la main de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Pon 2 de los Pokémon en Banca de tu rival y todas las cartas unidas a ellos en la mano de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi due dei Pokémon in panchina del tuo avversario e tutte le carte loro assegnate e aggiungili alle carte che ha in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Coloque 2 Pokémon no Banco do seu oponente e todas as cartas ligadas a eles na mão do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Gib deinem Gegner 2 Pokémon von seiner Bank und alle an sie angelegten Karten auf seine Hand. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 296846,
		tcgplayer: 131008
	}
}

export default card
