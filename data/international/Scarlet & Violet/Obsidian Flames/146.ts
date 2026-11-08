import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		'fr-fr': "Tarinorme",
		'en-us': "Probopass",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Tarinor",
		'en-us': "Nosepass",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'fr-fr': "Triple Nez",
			'en-us': "Triple Nose",
			'es-es': "Nariz Triple",
			'it-it': "Triplo Naso",
			'pt-br': "Nariz Triplo",
			'de-de': "Dreifachnase"
		},

		effect: {
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'en-us': "Flip 3 coins. This attack does 40 damage for each heads.",
			'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Buster de Fer",
			'en-us': "Iron Buster",
			'es-es': "Destructor Férreo",
			'it-it': "Ferro Distruttivo",
			'pt-br': "Destruidor Férreo",
			'de-de': "Eisensprenger"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725226,
				tcgplayer: 509932,
				cardtrader: 255831
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725226,
				tcgplayer: 509932,
				cardtrader: 255831
			}
		},
	],

	illustrator: "takuyoa",

	
}

export default card
