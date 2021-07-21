import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		460,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Freeze",
				fr: "Gel Rapide",
				es: "Congelación Rápida",
				it: "Congelamento Rapido",
				pt: "Congelamento Veloz",
				de: "Schnellfrost"
			},
			effect: {
				en: "If your opponent’s Active Pokémon has any Water Energy attached to it, it is now Paralyzed.",
				fr: "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, ce Pokémon est maintenant Paralysé.",
				es: "Si el Pokémon Activo de tu rival tiene alguna Energía Water unida a él, este pasa a estar Paralizado.",
				it: "Se il Pokémon attivo del tuo avversario ha delle Energie Water assegnate, viene paralizzato.",
				pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Water ligada a ele, ele será Paralisado.",
				de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Water-Energie angelegt ist, ist es jetzt paralysiert."
			},
			damage: 70,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
				es: "Placaje Salvaje",
				it: "Azionferoce",
				pt: "Investida Feroz",
				de: "Wilder Tackle"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
