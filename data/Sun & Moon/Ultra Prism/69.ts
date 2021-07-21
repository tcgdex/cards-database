import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		it: "Hippowdon",
		pt: "Hippowdon",
		de: "Hippoterus"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
				es: "Bucle Arena",
				it: "Sabbiotomba",
				pt: "Fosso de Areia",
				de: "Sandgrab"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dust Cannon",
				fr: "Canon Poussière",
				es: "Cañón Polvo",
				it: "Silicocannone",
				pt: "Canhão de Poeira",
				de: "Sandkanone"
			},
			effect: {
				en: "This attack does 10 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 10 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 10 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada Colorless no custo de Recuo do Pokémon Ativo do seu oponente.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Colorless-Symbole in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "100+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
