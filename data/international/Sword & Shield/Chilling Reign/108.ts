import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [892],
	set: Set,

	name: {
		'en-us': "Single Strike Urshifu",
		'fr-fr': "Shifours Poing Final",
		'es-es': "Urshifu Golpe Brusco",
		'it-it': "Urshifu Singolcolpo",
		'pt-br': "Urshifu Golpe Decisivo",
		'de-de': "Fokussierter-Angriff-Wulaosu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Kubfu",
		'fr-fr': "Wushours",
		'es-es': "Kubfu",
		'it-it': "Kubfu",
		'pt-br': "Kubfu",
		'de-de': "Dakuma"
	},

	attacks: [{
		name: {
			'en-us': "Field Crush",
			'fr-fr': "Broyeur de Terrain",
			'es-es': "Arrasamiento de Campo",
			'it-it': "Invasione di Campo",
			'pt-br': "Esmagamento de Campo",
			'de-de': "Feldschlag"
		},

		effect: {
			'en-us': "If your opponent has a Stadium in play, discard it.",
			'fr-fr': "Si votre adversaire a un Stade en jeu, défaussez-le.",
			'es-es': "Si tu rival tiene un Estadio en juego, descártalo.",
			'it-it': "Se il tuo avversario ha una carta Stadio in gioco, scartala.",
			'pt-br': "Se o seu oponente tiver um Estádio em jogo, descarte-o.",
			'de-de': "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel."
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'en-us': "Fists of Strife",
			'fr-fr': "Poings de Dispute",
			'es-es': "Puños de Lucha",
			'it-it': "Confliggipugni",
			'pt-br': "Punhos da Desavença",
			'de-de': "Fäuste der Zwietracht"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 100 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 100 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 100 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 100 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 100 Schadenspunkte mehr zu."
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


	stage: "Stage1",

	description: {
		'en-us': "Inhabiting the mountains of a distant region, this Pokémon races across sheer cliffs, training its legs and refining its moves."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567216,
				tcgplayer: 241783
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567216,
				tcgplayer: 241783
			}
		},
	],
}

export default card
