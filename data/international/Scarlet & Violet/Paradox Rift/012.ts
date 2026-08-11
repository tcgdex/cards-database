import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		'en-us': "Orbeetle",
		'fr-fr': "Astronelle",
		'es-es': "Orbeetle",
		'it-it': "Orbeetle",
		'pt-br': "Orbeetle",
		'de-de': "Maritellit"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dottler",
		'fr-fr': "Coléodôme",
		'es-es': "Dottler",
		'it-it': "Dottler",
		'pt-br': "Dottler",
		'de-de': "Keradar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Satellite Beam",
			'fr-fr': "Rayon Satellite",
			'es-es': "Rayo Satélite",
			'it-it': "Raggio Satellitare",
			'pt-br': "Feixe-satélite",
			'de-de': "Satellitenstrahl"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy card in your opponent's discard pile.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño por cada carta de Energía en la pila de descartes de tu rival.",
			'it-it': "Questo attacco infligge 30 danni per ogni carta Energia nella pila degli scarti del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada carta de Energia na pilha de descarte do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Energiekarte im Ablagestapel deines Gegners 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Brain Shake",
			'fr-fr': "Cahot Mental",
			'es-es': "Sacudida Cerebral",
			'it-it': "Scuotimente",
			'pt-br': "Chacoalhada Cerebral",
			'de-de': "Gehirnschütteln"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It emits psychic energy to observe and study what's around it—and what's around it can include things over six miles away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740488,
				tcgplayer: 523611,
				cardtrader: 265102
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740488,
				tcgplayer: 523611,
				cardtrader: 265102
			}
		},
	],

	illustrator: "Oku",

	
}

export default card
