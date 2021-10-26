import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar",
		es: "Slowpoke de Galar",
		it: "Slowpoke di Galar",
		pt: "Slowpoke de Galar",
		de: "Galar-Flegmon"
	},

	illustrator: "Ryota Murayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Tantailizing",
			fr: "Ragoûtant",
			es: "Cola Tentadora",
			it: "Stuzzicoda",
			pt: "Cauda Apetitosa",
			de: "Ausschweifen"
		},

		effect: {
			en: "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Lancia una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Jogue 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			de: "Wirf 1 Münze. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	}
}

export default card
