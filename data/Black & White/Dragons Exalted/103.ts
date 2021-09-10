import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
		es: "Slaking",
		it: "Slaking",
		pt: "Slaking",
		de: "Letarking"
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unobservant",
				fr: "Distrait",
				es: "Descuido",
				it: "Sbadataggine",
				pt: "Desatenção",
				de: "Unachtsam"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this Pokémon can’t attack.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, ce Pokémon ne peut pas attaquer.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, este Pokémon no puede atacar.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, questo Pokémon non può attaccare.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, este Pokémon não poderá atacar.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, kann dieses Pokémon nicht angreifen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crushing Blow",
				fr: "Coup Écrasant",
			},
			effect: {
				en: "Discard an Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Défenseur.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
