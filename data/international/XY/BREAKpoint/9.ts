import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mountain Munch",
				'fr-fr': "Dévore-Montagne",
				'es-es': "Mascamontañas",
				'it-it': "Sgranocchiacime",
				'pt-br': "Masca-Montanhas",
				'de-de': "Gipfelmampfer"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte o card de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Scrape Down",
				'fr-fr': "Racleur",
				'es-es': "Raspar",
				'it-it': "Grattavia",
				'pt-br': "Raspagem",
				'de-de': "Schaber"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, discard the top 4 cards of your opponent's deck.",
				'fr-fr': "Si ce Pokémon a des marqueurs de dégâts, défaussez les 4 cartes du dessus du deck de votre adversaire.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, descarta las 4 primeras cartas de la baraja de tu rival.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, scarta le prime quattro carte del mazzo del tuo avversario.",
				'pt-br': "Se este Pokémon possuir algum contador de danos, descarte os 4 cards do topo de cima do seu oponente.",
				'de-de': "Wenn auf diesem Pokémon bereits mindestens 1 Schadensmarke liegt, lege die obersten 4 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
	},

	thirdParty: {
		cardmarket: 288184,
		tcgplayer: 111512
	}
}

export default card
