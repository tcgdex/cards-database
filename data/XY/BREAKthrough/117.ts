import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
		es: "Dodrio",
		it: "Dodrio",
		pt: "Dodrio",
		de: "Dodri"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Retreat Aid",
				fr: "Soutien de Retraite",
				es: "Ayuda de Retirada",
				it: "Assistente alla Ritirata",
				pt: "Ajuda para Recuar",
				de: "Rückzugshilfe"
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
				fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
				es: "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de ColorlessColorless menos.",
				it: "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di ColorlessColorless.",
				pt: "Enquanto este Pokémon estiver no seu Banco, o Custo para Recuar do seu Pokémon Ativo é ColorlessColorless menor.",
				de: "Solang sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um ColorlessColorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				es: "Ataque Furia",
				it: "Furia",
				pt: "Ataque de Fúria",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 40 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

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
		cardmarket: 286363
	}
}

export default card
