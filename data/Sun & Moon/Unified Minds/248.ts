import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dragonite GX",
		fr: "Dracolosse GX",
		es: "Dragonite GX",
		it: "Dragonite GX",
		pt: "Dragonite GX",
		de: "Dragoran GX"
	},

	illustrator: "ConceptLab",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 250,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Dragonair",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
				es: "Garra Dragón",
				it: "Dragartigli",
				pt: "Garra de Dragão",
				de: "Drachenklaue"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Judgment",
				fr: "Jugement Céleste",
				es: "Juicio Celeste",
				it: "Giudizio Celeste",
				pt: "Julgamento Celeste",
				de: "Himmelsurteil"
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
				es: "Descarta 3 Energías de este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias deste Pokémon.",
				de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 270,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mach Delivery GX",
				fr: "Livraison Flash GX",
				es: "Reparto Mach GX",
				it: "Consegna Mach GX",
				pt: "Entrega Supersônica GX",
				de: "Überschall-Lieferung GX"
			},
			effect: {
				en: "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can’t use more than 1 GX attack in a game.)",
				fr: "Vous pouvez défausser autant de cartes que vous voulez de votre main jusqu’à en avoir 9 ou moins. Piochez des cartes jusqu’à ce que vous ayez 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Puedes descartar cualquier cantidad de cartas de tu mano hasta que tengas 9 o menos. Roba cartas hasta que tengas 10 cartas en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Puoi scartare un numero qualsiasi di carte che hai in mano finché ne hai nove o meno. Pesca fino ad avere 10 carte in mano. Non puoi usare più di un attacco GX a partita.",
				pt: "Você pode descartar qualquer número de cartas da sua mão até ter 9 cartas ou menos. Compre cartas até ter 10 cartas na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				de: "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen, bis du 9 oder weniger Karten auf der Hand hast. Ziehe so lang Karten, bis du 10 Karten auf deiner Hand hast. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 388547
	}
}

export default card
