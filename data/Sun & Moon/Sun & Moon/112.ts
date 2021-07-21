import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bear Hug",
				fr: "Câlin d’Ours",
				es: "Abrazo de Oso",
				it: "Presa dell’Orso",
				pt: "Abraço de Urso",
				de: "Dicke Umarmung"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Superpower",
				fr: "Surpuissance",
				es: "Fuerza Bruta",
				it: "Troppoforte",
				pt: "Superpoder",
				de: "Kraftkoloss"
			},
			effect: {
				en: "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s’inflige 20 dégâts.",
				es: "Puedes hacer 40 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Puoi infliggere 40 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Você pode causar 40 pontos de dano a mais. Se fizer isto, este Pokémon causará 20 pontos de dano a si mesmo.",
				de: "Du kannst 40 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
