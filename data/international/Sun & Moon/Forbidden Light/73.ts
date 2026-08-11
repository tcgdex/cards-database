import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Zygarde GX",
		'fr-fr': "Zygarde GX",
		'es-es': "Zygarde GX",
		'it-it': "Zygarde GX",
		'pt-br': "Zygarde GX",
		'de-de': "Zygarde GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 200,

	types: [
		"Fighting",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cell Connector",
				'fr-fr': "Connecteur de Cellules",
				'es-es': "Conector Celular",
				'it-it': "Connettore Cellulare",
				'pt-br': "Conector das Células",
				'de-de': "Zellenanschluss"
			},
			effect: {
				'en-us': "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia Fighting da sua pilha de descarte a este Pokémon.",
				'de-de': "Lege 2 Fighting-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land’s Wrath",
				'fr-fr': "Force Chtonienne",
				'es-es': "Fuerza Telúrica",
				'it-it': "Forza Tellurica",
				'pt-br': "Ira da Terra",
				'de-de': "Bodengewalt"
			},

			damage: 130,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Verdict GX",
				'fr-fr': "Verdict GX",
				'es-es': "Veredicto GX",
				'it-it': "Verdetto-GX",
				'pt-br': "Veredito GX",
				'de-de': "Urteilsspruch GX"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX et de Pokémon-EX pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de Pokémon-GX y Pokémon-EX durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-GX e dei Pokémon-EX. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Prevenirá todo o dano causado a este Pokémon por ataques de Pokémon-GX e Pokémon-EX durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Pokémon-GX und Pokémon-EX zugefügt wird. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 327207,
		tcgplayer: 165725
	}
}

export default card
