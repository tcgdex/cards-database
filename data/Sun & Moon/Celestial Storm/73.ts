import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		pt: "Donphan",
		de: "Donphan"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 130,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				es: "Azote",
				it: "Convulsione",
				pt: "Mangual",
				de: "Dreschflegel"
			},
			effect: {
				en: "This attack does 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour Rapide",
				es: "Giro Rápido",
				it: "Rapigiro",
				pt: "Giro Rápido",
				de: "Turbodreher"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
