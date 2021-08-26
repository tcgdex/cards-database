import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		it: "Mandibuzz",
		pt: "Mandibuzz",
		de: "Grypheldis"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		630,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bone Drop",
				fr: "Chute Osseuse",
				es: "Caída Ósea",
				it: "Sganciaosso",
				pt: "Queda Óssea",
				de: "Knochenfall"
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent’s Pokémon that has an Ability. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l’un des Pokémon de votre adversaire ayant un talent. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival que tenga una habilidad. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario che abbia un’abilità. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 60 de danos a 1 dos Pokémon do seu oponente que possui uma Habilidade. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon deines Gegners, das eine Fähigkeit hat, 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
				es: "Viento Helado",
				it: "Vento Tagliente",
				pt: "Vento Dilacerante",
				de: "Schneidender Wind"
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



}

export default card
