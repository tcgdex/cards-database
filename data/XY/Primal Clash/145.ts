import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Trevenant EX",
		fr: "Desséliande EX",
		es: "Trevenant EX",
		it: "Trevenant EX",
		pt: "Trevenant EX",
		de: "Trombork EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dark Forest",
				fr: "Forêt Sombre",
				es: "Bosque Oscuro",
				it: "Boscoscuro",
				pt: "Floresta Sombria",
				de: "Dunkler Wald"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wood Blast",
				fr: "Explobois",
				es: "Estallido Arbolado",
				it: "Urtolegno",
				pt: "Explosão de Madeira",
				de: "Holzexplosion"
			},
			effect: {
				en: "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Grass unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Grass assegnata a questo Pokémon.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia Grass ligada a este Pokémon.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Grass-Energie zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic"
}

export default card
