import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Weavile",
		fr: "Dimoret",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
				es: "Llamar a la Familia",
				it: "Cerca Famiglia",
				pt: "Chamar a Família",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho até 2 Pokémon Básicos e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Claw Rend",
				fr: "Déchirure",
				es: "Quebrantar",
				it: "Artiglilaceranti",
				pt: "Lacerar",
				de: "Reißer"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 30 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 30 de danos adicionais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281535
	}
}

export default card
