import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		115,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe Transversale",
				'es-es': "Atajar",
				'it-it': "Fendente Incrociato",
				'pt-br': "Corte em Cruz",
				'de-de': "Überkreuzzerschneider"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hurricane Punch",
				'fr-fr': "Poing Ouragan",
				'es-es': "Puño Huracán",
				'it-it': "Pugno Uragano",
				'pt-br': "Soco Furacão",
				'de-de': "Hurrikanhieb"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

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
		'en-us': "Kangaskhan's maternal love is so deep that it will brave death to protect its offspring.",
	},

	thirdParty: {
		cardmarket: 295410,
		tcgplayer: 126971
	}
}

export default card
