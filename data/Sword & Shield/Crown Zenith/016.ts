import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude",
		es: "Zarude",
		it: "Zarude",
		pt: "Zarude",
		de: "Zarude"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Drag Off",
			fr: "Traîne",
			es: "Jalón",
			it: "Trascinato Via",
			pt: "Arrastar para Fora",
			de: "Wegzerren"
		},

		effect: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 20 damage to the new Active Pokémon.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 20 dégâts au nouveau Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 20 danni al nuovo Pokémon attivo.",
			pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 20 pontos de dano ao novo Pokémon Ativo.",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 20 Schadenspunkte zu."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Triple Whip",
			fr: "Triple Fouet",
			es: "Triple Latigazo",
			it: "Triplafrustata",
			pt: "Chicote Triplo",
			de: "Tripelpeitsche"
		},

		effect: {
			en: "Flip 3 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card