import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
		es: "Glaceon",
		it: "Glaceon",
		pt: "Glaceon",
		de: "Glaziola"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		471,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freeze Zone",
				fr: "Zone de Gel",
				es: "Congelar Zona",
				it: "Freddezza",
				pt: "Zona de Congelamento",
				de: "Frostzone"
			},
			effect: {
				en: "The Retreat Cost of each of your Team Plasma Pokémon in play is ColorlessColorless less.",
				fr: "Le coût de Retraite de chacun de vos Pokémon de la Team Plasma en jeu est diminué de ColorlessColorless.",
				es: "El Coste de Retirada de cada uno de tus Pokémon del Equipo Plasma en juego es de ColorlessColorless menos.",
				it: "Il costo di ritirata di ciascun Pokémon Team Plasma in gioco scende di ColorlessColorless.",
				pt: "O Custo para Recuar de cada um de seus Pokémon da Equipe Plasma em jogo será de Colorless Colorless a menos.",
				de: "Die Rückzugskosten aller Team-Plasma-Pokémon im Spiel verringern sich um Colorless Colorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent Glace",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280901
	}
}

export default card
