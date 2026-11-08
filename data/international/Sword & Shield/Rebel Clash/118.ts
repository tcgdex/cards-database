import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [569],

	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
		'es-es': "Trubbish",
		'it-it': "Trubbish",
		'pt-br': "Trubbish",
		'de-de': "Unratütox"
	},

	abilities: [
		{
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
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sludge Bomb",
				'fr-fr': "Bombe Beurk",
				'es-es': "Bomba Lodo",
				'it-it': "Fangobomba",
				'pt-br': "Bomba de Lodo",
				'de-de': "Matschbombe"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457998,
				tcgplayer: 213210
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457998,
				tcgplayer: 213210
			}
		},
	],
}

export default card
