import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Malamar V",
		fr: "Sepiatroce V",
		es: "Malamar V",
		it: "Malamar V",
		pt: "Malamar V",
		de: "Calamanero V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
				es: "Jalón",
				it: "Trascinato Via",
				pt: "Arrastar para Fora",
				de: "Wegzerren"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Brain Shake",
				fr: "Cahot Mental",
				es: "Sacudida Cerebral",
				it: "Scuotimente",
				pt: "Chacoalhada Cerebral",
				de: "Gehirnschütteln"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
