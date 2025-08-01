import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Revival",
				fr: "Réapparition",
				es: "Reaparición",
				it: "Vitalizzante",
				pt: "Renovação",
				de: "Wiederbeleben"
			},
			effect: {
				en: "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench.",
				fr: "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
				es: "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
				it: "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
				pt: "Coloque um Pokémon Básico da pilha de descarte do seu oponente no Banco desse oponente.",
				de: "Nimm 1 Basis-Pokémon vom Ablagestapel deines Gegners und lege es auf seine Bank."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sneaky Placement",
				fr: "Placement Vicieux",
				es: "Colocación Furtiva",
				it: "Furtivappoggio",
				pt: "Posição Sorrateira",
				de: "Heimlichtuerei"
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				it: "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 1 contador de danos no Pokémon Ativo do seu oponente.",
				de: "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281521
	}
}

export default card
