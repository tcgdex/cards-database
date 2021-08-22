import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Kartana GX",
		fr: "Katagami GX",
		es: "Kartana GX",
		it: "Kartana GX",
		pt: "Kartana GX",
		de: "Katagami GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				en: "Slice Off",
				fr: "Trancher",
				es: "Cortar en Rodajas",
				it: "Tagliavia",
				pt: "Fatiar",
				de: "Abschneiden"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from 1 of your opponent’s Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée à l’un des Pokémon de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Energía Especial de 1 de los Pokémon de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare un’Energia speciale da uno dei Pokémon del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar 1 Energia Especial de 1 dos Pokémon do seu oponente.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel legen."
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
				en: "Gale Blade",
				fr: "Lame Bourrasque",
				es: "Tajo Huracanado",
				it: "Raffica di Lame",
				pt: "Lâmina de Vendaval",
				de: "Sturmschwert"
			},
			effect: {
				en: "You may shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Vous pouvez mélanger ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajarlas todas.",
				it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Du kannst dieses Pokémon und alle an es angelegten Karten in dein Deck mischen."
			},
			damage: 70,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Blade GX",
				fr: "Lame GX",
				es: "Tajo GX",
				it: "Sectio-GX",
				pt: "Lâmina GX",
				de: "Schwerthieb GX"
			},
			effect: {
				en: "Take a Prize card. (You can’t use more than 1 GX attack in a game.)",
				fr: "Récupérez une carte Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Coge 1 carta de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Prendi una carta Premio. Non puoi usare più di un attacco GX a partita.",
				pt: "Pegue 1 carta de Prêmio (você não pode usar mais de 1 ataque GX por partida).",
				de: "Nimm 1 Preiskarte. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
