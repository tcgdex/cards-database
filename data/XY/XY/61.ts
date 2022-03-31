import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
		es: "Rhyhorn",
		it: "Rhyhorn",
		pt: "Rhyhorn",
		de: "Rihorn"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
				es: "Perforador",
				it: "Perforcorno",
				pt: "Chifre Broca",
				de: "Hornbohrer"
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mad Mountain",
				fr: "Montagne Enragée",
				es: "Montaña Enloquecida",
				it: "Montepazzo",
				pt: "Montanha Louca",
				de: "Berg des Zorns"
			},
			effect: {
				en: "Flip 2 coins. If both are heads, discard the top card of your opponent's deck for each damage counter on this Pokémon.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez la carte du dessus du deck de votre adversaire pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Lanza 2 monedas. Si ambas son cara, descarta la primera carta de la baraja de tu rival por cada contador de daño en este Pokémon.",
				it: "Lancia due volte una moneta. Se esce entrambe le volte testa, scarta una carta in cima al mazzo del tuo avversario per ogni segnalino danno presente su questo Pokémon.",
				pt: "Jogue 2 moedas. Se ambas forem cara, descarte o card de cima do baralho do seu oponente para cada contador de danos neste Pokémon.",
				de: "Wirf 2 Münzen. Zeigen beide \"Kopf\", lege für jede Schadensmarke auf diesem Pokémon die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

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
