import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [530],
	set: Set,

	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Digging Claw",
			'fr-fr': "Griffe Excavatrice",
			'es-es': "Garra Excavadora",
			'it-it': "Scavartiglio",
			'pt-br': "Garras de Escavação",
			'de-de': "Buddelklaue"
		},

		effect: {
			'en-us': "Discard the top card of your opponent's deck.",
			'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
			'es-es': "Descarta la primera carta de la baraja de tu rival.",
			'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
			'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
			'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Drill Smash",
			'fr-fr': "Broiement Perceuse",
			'es-es': "Golpe Taladro",
			'it-it': "Avvitacolpo",
			'pt-br': "Pancada Perfurante",
			'de-de': "Schmetterbohrer"
		},

		effect: {
			'en-us': "If you have any {M} Pokémon on your Bench, this attack does 80 more damage.",
			'fr-fr': "Si vous avez au moins un Pokémon {M} sur votre Banc, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si tienes algún Pokémon {M} en tu Banca, este ataque hace 80 puntos de daño más.",
			'it-it': "Se hai dei Pokémon {M} in panchina, questo attacco infligge 80 danni in più.",
			'pt-br': "Se você tiver algum Pokémon {M} no seu Banco, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn du mindestens 1 {M}-Pokémon auf deiner Bank hast, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794438,
				tcgplayer: 589938
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794438,
				tcgplayer: 589938
			}
		},
	],

	illustrator: "Yuya Oka",

}

export default card
