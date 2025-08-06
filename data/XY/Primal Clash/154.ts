import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "M Aggron EX",
		fr: "M-Galeking EX",
		es: "M-Aggron EX",
		it: "M Aggron EX",
		pt: "M-Aggron EX",
		de: "M-Stolloss EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 240,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Aggron-EX",
		fr: "Galeking-EX",
		es: "Aggron-EX",
		it: "Aggron-EX",
		pt: "Aggron-EX",
		de: "Stolloss-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Megaton Slam",
				fr: "Écrasement Mégatonne",
				es: "Golpe Megatón",
				it: "Schianto Megatonico",
				pt: "Pancada Megaton",
				de: "Megatonnenhieb"
			},
			effect: {
				en: "You may flip a coin. If heads, this attack does 120 more damage. If tails, this attack does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 120 dégâts supplémentaires. Si c'est pile, cette attaque inflige 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Puedes lanzar 1 moneda. Si sale cara, este ataque hace 120 puntos de daño más. Si sale cruz, este ataque hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Puoi lanciare una moneta. Se esce testa, questo attacco infligge 120 danni in più. Se esce croce, questo attacco infligge 20 danni a ciascuno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Você pode jogar uma moeda. Se sair cara, esse ataque causará 120 de danos adicionais. Se sair coroa, esse ataque causará 20 de danos a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Du kannst 1 Münze werfen. Bei \"Kopf\" fügt dieser Angriff 120 weitere Schadenspunkte zu. Bei \"Zahl\" fügt dieser Angriff jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 96052
	}
}

export default card
