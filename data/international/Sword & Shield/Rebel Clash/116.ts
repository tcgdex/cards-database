import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [442],

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Splitting Spite",
				'fr-fr': "Mépris Partagé",
				'es-es': "Dividir Rencor",
				'it-it': "Dispetto Comune",
				'pt-br': "Rancor Dividido",
				'de-de': "Geteiltes Leid"
			},
			effect: {
				'en-us': "Discard the top card of each player's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de chaque joueur.",
				'es-es': "Descarta la primera carta de la baraja de cada jugador.",
				'it-it': "Scarta la prima carta del mazzo di ciascun giocatore.",
				'pt-br': "Descarte a carta de cima do baralho de cada jogador.",
				'de-de': "Lege die oberste Karte vom Deck jedes Spielers auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dripping Grudge",
				'fr-fr': "Rancune Dégoulinante",
				'es-es': "Goteo Rabioso",
				'it-it': "Gocce di Rancore",
				'pt-br': "Rancor Gotejante",
				'de-de': "Tropfender Groll"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival por cada Pokémon en tu pila de descartes.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario per ogni Pokémon nella tua pila degli scarti.",
				'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente para cada Pokémon na sua pilha de descarte.",
				'de-de': "Lege für jedes Pokémon in deinem Ablagestapel 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 60,
	types: ["Darkness"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457988,
				tcgplayer: 213208
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457988,
				tcgplayer: 213208
			}
		},
	],
}

export default card
