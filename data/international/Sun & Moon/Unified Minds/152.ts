import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dragonite GX",
		'fr-fr': "Dracolosse GX",
		'es-es': "Dragonite GX",
		'it-it': "Dragonite GX",
		'pt-br': "Dragonite GX",
		'de-de': "Dragoran GX"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
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
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
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
				'en-us': "Sky Judgment",
				'fr-fr': "Jugement Céleste",
				'es-es': "Juicio Celeste",
				'it-it': "Giudizio Celeste",
				'pt-br': "Julgamento Celeste",
				'de-de': "Himmelsurteil"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 270,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mach Delivery GX",
				'fr-fr': "Livraison Flash GX",
				'es-es': "Reparto Mach GX",
				'it-it': "Consegna Mach GX",
				'pt-br': "Entrega Supersônica GX",
				'de-de': "Überschall-Lieferung GX"
			},
			effect: {
				'en-us': "You may discard any number of cards from your hand until you have 9 or fewer. Draw cards until you have 10 cards in your hand. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Vous pouvez défausser autant de cartes que vous voulez de votre main jusqu’à en avoir 9 ou moins. Piochez des cartes jusqu’à ce que vous ayez 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Puedes descartar cualquier cantidad de cartas de tu mano hasta que tengas 9 o menos. Roba cartas hasta que tengas 10 cartas en tu mano. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Puoi scartare un numero qualsiasi di carte che hai in mano finché ne hai nove o meno. Pesca fino ad avere 10 carte in mano. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Você pode descartar qualquer número de cartas da sua mão até ter 9 cartas ou menos. Compre cartas até ter 10 cartas na sua mão (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Du kannst beliebig viele Karten aus deiner Hand auf deinen Ablagestapel legen, bis du 9 oder weniger Karten auf der Hand hast. Ziehe so lang Karten, bis du 10 Karten auf deiner Hand hast. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 388547,
		tcgplayer: 195147
	}
}

export default card
