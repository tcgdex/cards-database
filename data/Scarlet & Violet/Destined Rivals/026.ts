import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Toedscruel",
		fr: "Terracruel",
		de: "Tenterra",
		it: "Toedscruel",
		es: "Toedscruel",
		pt: "Toedscruel"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Eerie Tentacles",
			fr: "Tentacules Inquiétants",
			de: "Schaurige Tentakel",
			it: "Tentacoli Inquietanti",
			es: "Tentáculos Inquietantes",
			pt: "Tentáculos Perturbadores"
		},

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			de: "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben.",
			it: "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			pt: "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Triple Smash",
			fr: "Triple Éclate",
			de: "Dreifachschmetterer",
			it: "Tripla Schiacciata",
			es: "Golpe Triple",
			pt: "Pancada Tripla"
		},

		effect: {
			en: "Flip 3 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			es: "Lanza 3 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 80 pontos de dano para cada cara."
		},

		damage: "80×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card