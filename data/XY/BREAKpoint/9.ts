import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
		es: "Durant",
		it: "Durant",
		pt: "Durant",
		de: "Fermicula"
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
				en: "Mountain Munch",
				fr: "Dévore-Montagne",
				es: "Mascamontañas",
				it: "Sgranocchiacime",
				pt: "Masca-Montanhas",
				de: "Gipfelmampfer"
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte o card de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Scrape Down",
				fr: "Racleur",
				es: "Raspar",
				it: "Grattavia",
				pt: "Raspagem",
				de: "Schaber"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, discard the top 4 cards of your opponent's deck.",
				fr: "Si ce Pokémon a des marqueurs de dégâts, défaussez les 4 cartes du dessus du deck de votre adversaire.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, descarta las 4 primeras cartas de la baraja de tu rival.",
				it: "Se questo Pokémon ha dei segnalini danno, scarta le prime quattro carte del mazzo del tuo avversario.",
				pt: "Se este Pokémon possuir algum contador de danos, descarte os 4 cards do topo de cima do seu oponente.",
				de: "Wenn auf diesem Pokémon bereits mindestens 1 Schadensmarke liegt, lege die obersten 4 Karten vom Deck deines Gegners auf seinen Ablagestapel."
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

	thirdParty: {
		cardmarket: 288184
	}
}

export default card
