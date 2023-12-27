import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu",
		fr: "Shifours Poing Final",
		es: "Urshifu Golpe Brusco",
		it: "Urshifu Singolcolpo",
		pt: "Urshifu Golpe Decisivo",
		de: "Fokussierter-Angriff-Wulaosu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Kubfu",
		fr: "Wushours",
		es: "Kubfu",
		it: "Kubfu",
		pt: "Kubfu",
		de: "Dakuma"
	},

	attacks: [{
		name: {
			en: "Field Crush",
			fr: "Broyeur de Terrain",
			es: "Arrasamiento de Campo",
			it: "Invasione di Campo",
			pt: "Esmagamento de Campo",
			de: "Feldschlag"
		},

		effect: {
			en: "If your opponent has a Stadium in play, discard it.",
			fr: "Si votre adversaire a un Stade en jeu, défaussez-le.",
			es: "Si tu rival tiene un Estadio en juego, descártalo.",
			it: "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
			pt: "Se o seu oponente tiver um Estádio em jogo, descarte-o.",
			de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			en: "Fists of Strife",
			fr: "Poings de Dispute",
			es: "Puños de Lucha",
			it: "Confliggipugni",
			pt: "Punhos da Desavença",
			de: "Fäuste der Zwietracht"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Inhabiting the mountains of a distant region, this Pokémon races across sheer cliffs, training its legs and refining its moves."
	}
}

export default card
