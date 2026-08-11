import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		417,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Trick Sticker",
				'fr-fr': "Colle-Farce",
				'es-es': "Etiqueta Fullera",
				'it-it': "Foglietto Scherzetto",
				'pt-br': "Truque Grudento",
				'de-de': "Trick-Sticker"
			},
			effect: {
				'en-us': "The Defending Pokémon's Weakness is now Lightning until the end of your next turn. (The amount of Weakness doesn't change.)",
				'fr-fr': "La Faiblesse du Pokémon Défenseur est maintenant Lightning jusqu'à la fin de votre prochain tour. (La valeur de la Faiblesse ne change pas.)",
				'es-es': "La Debilidad del Pokémon Defensor pasa a ser Lightning hasta el final de tu próximo turno. (La cantidad de Debilidad no cambia).",
				'it-it': "La debolezza del Pokémon difensore diventa Lightning fino alla fine del tuo prossimo turno. Quanto è debole non cambia.",
				'pt-br': "A Fraqueza do Pokémon Defensor passa a ser Lightning até o final da sua próxima vez de jogar. (A quantidade de Fraqueza não muda.)",
				'de-de': "Bis zum Ende deines nächsten Zuges ist die Schwäche des Verteidigenden Pokémon jetzt Lightning. (Die Höhe der Schwäche ändert sich nicht.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Pachi",
				'fr-fr': "Pachi",
				'es-es': "Pachi",
				'it-it': "Pachi",
				'pt-br': "Pachi",
				'de-de': "Brzzzl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.",
	},

	thirdParty: {
		cardmarket: 281829,
		tcgplayer: 94158
	}
}

export default card
