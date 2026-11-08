import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Happiness Supplement",
				'fr-fr': "Complément de Joie",
				'es-es': "Suplemento de Felicidad",
				'it-it': "Integratore di Felicità",
				'pt-br': "Suplemento de Felicidade",
				'de-de': "Freudige Beilage"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove a Special Condition from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un État Spécial de votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes eliminar 1 Condición Especial de tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi rimuovere una condizione speciale dal tuo Pokémon attivo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode remover 1 Condição Especial do seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Speziellen Zustand von deinem Aktiven Pokémon entfernen."
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
				'en-us': "Powerful Slap",
				'fr-fr': "Grosse Baffe",
				'es-es': "Tremendo Bofetón",
				'it-it': "Schiaffettone",
				'pt-br': "Tapa Poderoso",
				'de-de': "Kraftklatscher"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
				'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
				'pt-br': "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
				'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
			},
			damage: "80×",

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
		'en-us': "Its fluffy fur coat acts as a sensor, enabling it to read the feelings of people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 365790,
		tcgplayer: 178974
	}
}

export default card
