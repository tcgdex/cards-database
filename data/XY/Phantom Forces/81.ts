import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tender Vengeance",
				fr: "Douce Vengeance",
				es: "Dulce Venganza",
				it: "Tenerivalsa",
				pt: "Doce Vingança",
				de: "Süße Rache"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage times the number of damage counters on each of your Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts placés sur chacun de vos Pokémon de Banc.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon en Banca.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon in panchina.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 10 de danos vezes o número de contadores de danos em cada um dos seus Pokémon no Banco.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte für jede Schadensmarke auf den Pokémon auf deiner Bank zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charge Dash",
				fr: "Attaque Précipitée",
				es: "Carga Arrojada",
				it: "Corsacarica",
				pt: "Rasgo Feroz",
				de: "Sturmlauf"
			},
			effect: {
				en: "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				fr: "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
				es: "Puedes hacer 20 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Puoi infliggere 20 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Você pode causar 20 de danos adicionais. Se você fizer isso, o Pokémon causará 20 de danos a ele mesmo.",
				de: "Du kannst mit diesem Angriff 20 weitere Schadenspunkte zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281887
	}
}

export default card
