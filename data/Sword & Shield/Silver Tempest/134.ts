import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Shout of Power",
			fr: "Cri de Puissance",
			es: "Grito de Poder",
			it: "Urlotonante",
			pt: "Grito de Poder",
			de: "Mächtiger Aufruf"
		},

		effect: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
			it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
			pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
		},

		damage: 20
	}, {
		cost: ["Grass", "Fighting"],

		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
			es: "Ataque Fugaz",
			it: "Attacco Veloce",
			pt: "Ataque em Velocidade",
			de: "Tempoangriff"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card