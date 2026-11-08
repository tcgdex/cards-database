import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
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
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bear Hug",
				'fr-fr': "Câlin d’Ours",
				'es-es': "Abrazo de Oso",
				'it-it': "Presa dell’Orso",
				'pt-br': "Abraço de Urso",
				'de-de': "Dicke Umarmung"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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
				'en-us': "Superpower",
				'fr-fr': "Surpuissance",
				'es-es': "Fuerza Bruta",
				'it-it': "Troppoforte",
				'pt-br': "Superpoder",
				'de-de': "Kraftkoloss"
			},
			effect: {
				'en-us': "You may do 40 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, ce Pokémon s’inflige 20 dégâts.",
				'es-es': "Puedes hacer 40 puntos de daño más. Si lo haces, este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Puoi infliggere 40 danni in più. Se lo fai, questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Você pode causar 40 pontos de dano a mais. Se fizer isto, este Pokémon causará 20 pontos de dano a si mesmo.",
				'de-de': "Du kannst 40 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon sich selbst 20 Schadenspunkte zu."
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

	description: {
		'en-us': "This immensely dangerous Pokémon possesses overwhelming physical strength. Its habitat is generally off-limits.",
	},

	thirdParty: {
		cardmarket: 295424,
		tcgplayer: 126984
	}
}

export default card
