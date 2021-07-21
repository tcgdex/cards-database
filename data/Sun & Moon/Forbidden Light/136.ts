import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
		es: "Zygarde-GX",
		it: "Zygarde-GX",
		pt: "Zygarde-GX",
		de: "Zygarde-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
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
				en: "Cell Connector",
				fr: "Connecteur de Cellules",
				es: "Conector Celular",
				it: "Connettore Cellulare",
				pt: "Conector das Células",
				de: "Zellenanschluss"
			},
			effect: {
				en: "Attach 2 Fighting Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 2 cartes Énergie Fighting de votre pile de défausse à ce Pokémon.",
				es: "Une 2 cartas de Energía Fighting de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon due carte Energia Fighting dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia Fighting da sua pilha de descarte a este Pokémon.",
				de: "Lege 2 Fighting-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Land’s Wrath",
				fr: "Force Chtonienne",
				es: "Fuerza Telúrica",
				it: "Forza Tellurica",
				pt: "Ira da Terra",
				de: "Bodengewalt"
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
				en: "Verdict GX",
				fr: "Verdict GX",
				es: "Veredicto GX",
				it: "Verdetto-GX",
				pt: "Veredito GX",
				de: "Urteilsspruch GX"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from Pokémon-GX and Pokémon-EX during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-GX et de Pokémon-EX pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Evita todo el daño infligido a este Pokémon por ataques de Pokémon-GX y Pokémon-EX durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-GX e dei Pokémon-EX. Non puoi usare più di un attacco GX a partita.",
				pt: "Prevenirá todo o dano causado a este Pokémon por ataques de Pokémon-GX e Pokémon-EX durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Pokémon-GX und Pokémon-EX zugefügt wird. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
