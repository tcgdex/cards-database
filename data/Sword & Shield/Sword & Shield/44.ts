import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Kingler",
		fr: "Krabboss",
		es: "Kingler",
		it: "Kingler",
		pt: "Kingler",
		de: "Kingler"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Heavy Pincers",
				fr: "Pinces Lourdes",
				es: "Tenazas Pesadas",
				it: "Chele Pesanti",
				pt: "Pinças Pesadas",
				de: "Kräftige Scheren"
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a carta de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
				es: "Quebrantar",
				it: "Artiglilaceranti",
				pt: "Lacerar",
				de: "Klauenreißer"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "The large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move."
	},

	thirdParty: {
		cardmarket: 436374
	}
}

export default card
