import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'es-es': "Parasect",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Panic Spores",
				'fr-fr': "Spores en Panique",
				'es-es': "Esporas de Pánico",
				'it-it': "Spore Incontrollabili",
				'pt-br': "Esporos de Pânico",
				'de-de': "Paniksporen"
			},
			effect: {
				'en-us': "Put 2 damage counters on your opponent’s Confused Pokémon between turns.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Confus de votre adversaire entre chaque tour.",
				'es-es': "Pon 2 contadores de daño en el Pokémon Confundido de tu rival entre turnos.",
				'it-it': "Metti due segnalini danno sul Pokémon confuso del tuo avversario tra un turno e l’altro.",
				'pt-br': "Coloque 2 contadores de dano no Pokémon Confuso do seu oponente entre as vezes de jogar.",
				'de-de': "Lege zwischen den Zügen 2 Schadensmarken auf die verwirrten Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Mysterious Powder",
				'fr-fr': "Poudre Mystérieuse",
				'es-es': "Polvo Misterioso",
				'it-it': "Polvere Misteriosa",
				'pt-br': "Pó Misterioso",
				'de-de': "Mysteriöser Puder"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving.",
	},

	thirdParty: {
		cardmarket: 368940,
		tcgplayer: 183778
	}
}

export default card
