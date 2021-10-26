import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
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
				en: "Splitting Spite",
				fr: "Mépris Partagé",
				es: "Dividir Rencor",
				it: "Dispetto Comune",
				pt: "Rancor Dividido",
				de: "Geteiltes Leid"
			},
			effect: {
				en: "Discard the top card of each player's deck.",
				fr: "Défaussez la carte du dessus du deck de chaque joueur.",
				es: "Descarta la primera carta de la baraja de cada jugador.",
				it: "Scarta la prima carta del mazzo di ciascun giocatore.",
				pt: "Descarte a carta de cima do baralho de cada jogador.",
				de: "Lege die oberste Karte vom Deck jedes Spielers auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dripping Grudge",
				fr: "Rancune Dégoulinante",
				es: "Goteo Rabioso",
				it: "Gocce di Rancore",
				pt: "Rancor Gotejante",
				de: "Tropfender Groll"
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire pour chaque Pokémon dans votre pile de défausse.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival por cada Pokémon en tu pila de descartes.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario per ogni Pokémon nella tua pila degli scarti.",
				pt: "Coloque 1 contador de dano no Pokémon Ativo do seu oponente para cada Pokémon na sua pilha de descarte.",
				de: "Lege für jedes Pokémon in deinem Ablagestapel 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago."
	}
}

export default card
