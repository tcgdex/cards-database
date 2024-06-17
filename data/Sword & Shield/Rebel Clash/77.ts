import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [178],
	name: {
		en: "Xatu",
		fr: "Xatu",
		es: "Xatu",
		it: "Xatu",
		pt: "Xatu",
		de: "Xatu"
	},

	illustrator: "so-taro",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
		es: "Natu",
		it: "Natu",
		pt: "Natu",
		de: "Natu"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Warp",
				fr: "Téléportation d'Énergie",
				es: "Teletransporte Energía",
				it: "Distorsione Energetica",
				pt: "Portal de Energia",
				de: "Energiewarp"
			},
			effect: {
				en: "Move an Energy from 1 of your opponent's Benched Pokémon to their Active Pokémon.",
				fr: "Déplacez une Énergie de l'un des Pokémon de Banc de votre adversaire vers son Pokémon Actif.",
				es: "Mueve 1 Energía de 1 de los Pokémon en Banca de tu rival a su Pokémon Activo.",
				it: "Sposta un'Energia da uno dei Pokémon nella panchina del tuo avversario al suo Pokémon attivo.",
				pt: "Mova 1 Energia de 1 dos Pokémon no Banco do seu oponente para o Pokémon Ativo dele(a).",
				de: "Verschiebe 1 Energie von 1 Pokémon auf der Bank deines Gegners auf sein Aktives Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
				es: "Psíquico",
				it: "Psichico",
				pt: "Psíquico",
				de: "Psychokinese"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

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
			value: "-30"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Psychic"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "They say that it stays still and quiet because it is seeing both the past and future at the same time."
	}
}

export default card
