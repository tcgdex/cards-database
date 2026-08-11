import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'de-de': "Unratütox",
		'es-es': "Trubbish",
		'pt-br': "Trubbish",
		'it-it': "Trubbish"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Poisonous Puddle",
			'fr-fr': "Flaque Toxique",
			'es-es': "Charco Venenoso",
			'it-it': "Pozza Velenosa",
			'pt-br': "Chorume Venenoso",
			'de-de': "Giftpfütze"
		},

		effect: {
			'en-us': "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
			'fr-fr': "Une fois pendant votre tour, si un Stade est en jeu, vous pouvez laisser le Pokémon Actif de votre adversaire Empoisonné.",
			'es-es': "Una vez durante tu turno, si hay un Estadio en juego, puedes dejar al Pokémon Activo de tu rival Envenenado.",
			'it-it': "Una sola volta durante il tuo turno, se c'è in gioco una carta Stadio, puoi lasciare il Pokémon attivo del tuo avversario avvelenato.",
			'pt-br': "Uma vez durante o seu turno, se um Estádio estiver em jogo, você poderá deixar o Pokémon Ativo do seu oponente Envenenado.",
			'de-de': "Einmal während deines Zuges, wenn eine Stadionkarte im Spiel ist, kannst du das Aktive Pokémon deines Gegners vergiften."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Sludge Bomb",
			'fr-fr': "Bombe Beurk",
			'es-es': "Bomba Lodo",
			'it-it': "Fangobomba",
			'pt-br': "Bomba de Lodo",
			'de-de': "Matschbombe"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	stage: "Stage1",
	dexId: [569],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453463
	}
}

export default card
