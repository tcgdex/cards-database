import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'en-us': "Toedscruel",
		'fr-fr': "Terracruel",
		'es-es': "Toedscruel",
		'it-it': "Toedscruel",
		'pt-br': "Toedscruel",
		'de-de': "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Eerie Tentacles",
			'fr-fr': "Tentacules Inquiétants",
			'es-es': "Tentáculos Inquietantes",
			'it-it': "Tentacoli Inquietanti",
			'pt-br': "Tentáculos Perturbadores",
			'de-de': "Schaurige Tentakel"
		},

		effect: {
			'en-us': "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			'es-es': "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			'it-it': "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			'pt-br': "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			'de-de': "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Triple Smash",
			'fr-fr': "Triple Éclate",
			'es-es': "Golpe Triple",
			'it-it': "Tripla Schiacciata",
			'pt-br': "Pancada Tripla",
			'de-de': "Dreifachschmetterer"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "nagimiso",

	description: {
		'en-us': "It coils its 10 tentacles around prey and sucks out their nutrients, causing the prey pain. The folds along the rim of its head are a popular delicacy.",
	},

	thirdParty: {
        cardmarket: 702322,
        tcgplayer: 487864
    }
}

export default card