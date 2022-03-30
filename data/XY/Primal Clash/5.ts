import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
				es: "Megaagotar",
				it: "Megassorbimento",
				pt: "Megadreno",
				de: "Megasauger"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grass Knot",
				fr: "Nœud Herbe",
				es: "Hierba Lazo",
				it: "Laccioerboso",
				pt: "Nó de Grama",
				de: "Strauchler"
			},
			effect: {
				en: "This attack does 10 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Esse ataque causa 10 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
