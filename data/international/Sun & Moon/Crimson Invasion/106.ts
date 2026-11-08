import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Kartana GX",
		'fr-fr': "Katagami GX",
		'es-es': "Kartana GX",
		'it-it': "Kartana GX",
		'pt-br': "Kartana GX",
		'de-de': "Katagami GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		798,
	],

	hp: 170,

	types: [
		"Metal",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Slice Off",
				'fr-fr': "Trancher",
				'es-es': "Cortar en Rodajas",
				'it-it': "Tagliavia",
				'pt-br': "Fatiar",
				'de-de': "Abschneiden"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent’s Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Energía Especial de 1 de los Pokémon de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare un’Energia speciale da uno dei Pokémon del tuo avversario.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar 1 Energia Especial de 1 dos Pokémon do seu oponente.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gale Blade",
				'fr-fr': "Lame Bourrasque",
				'es-es': "Tajo Huracanado",
				'it-it': "Raffica di Lame",
				'pt-br': "Lâmina de Vendaval",
				'de-de': "Sturmschwert"
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 70,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Blade GX",
				'fr-fr': "Lame GX",
				'es-es': "Tajo GX",
				'it-it': "Sectio-GX",
				'pt-br': "Lâmina GX",
				'de-de': "Schwerthieb GX"
			},
			effect: {
				'en-us': "Take a Prize card. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Coge 1 carta de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Prendi una carta Premio. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Pegue 1 carta de Prêmio (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Nimm 1 Preiskarte. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311953,
		tcgplayer: 149136
	}
}

export default card
