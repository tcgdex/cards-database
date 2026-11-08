import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [182],
	set: Set,

	name: {
		'en-us': "Bellossom",
		'fr-fr': "Joliflor",
		'es-es': "Bellossom",
		'it-it': "Bellossom",
		'pt-br': "Bellossom",
		'de-de': "Blubella"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Flower Spin",
			'fr-fr': "Pirouette Fleur",
			'es-es': "Giro Flor",
			'it-it': "Fioregiro",
			'pt-br': "Ciranda de Flores",
			'de-de': "Blumenwirbel"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 80 damage for each heads. Switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa. Scambia questo Pokémon con uno della tua panchina.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691720,
				tcgplayer: 478049
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691720,
				tcgplayer: 478049
			}
		},
	],
}

export default card
