import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		426,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Transport",
				fr: "Transport de Dégâts",
				es: "Transporte de Daño",
				it: "Trasporto Danni",
				pt: "Transporte de Dano",
				de: "Schadensflug"
			},
			effect: {
				en: "Move 4 damage counters from each of your Pokémon to your opponent’s Active Pokémon.",
				fr: "Déplacez 4 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
				es: "Mueve 4 contadores de daño de cada uno de tus Pokémon al Pokémon Activo de tu rival.",
				it: "Sposta quattro segnalini danno da ciascuno dei tuoi Pokémon al Pokémon attivo del tuo avversario.",
				pt: "Mova 4 contadores de dano de cada um dos seus Pokémon para o Pokémon Ativo do seu oponente.",
				de: "Verschiebe 4 Schadensmarken von jedem deiner Pokémon auf das Aktive Pokémon deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Wheel",
				fr: "Roue Éolienne",
				es: "Rueda de Viento",
				it: "Girandola",
				pt: "Roda de Vento",
				de: "Windrad"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		cardmarket: 315982,
		tcgplayer: 157669
	}
}

export default card
