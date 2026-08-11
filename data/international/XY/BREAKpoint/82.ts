import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 100,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Moon Barrier",
				'fr-fr': "Barrière Lunaire",
				'es-es': "Barrera Lunar",
				'it-it': "Barriera Lunare",
				'pt-br': "Barreira de Lua",
				'de-de': "Mondbarriere"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Dragon Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon Dragon.",
				'es-es': "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon Dragon.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon Dragon.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, previna todos os efeitos dos ataques a este Pokémon, inclusive danos, causados por Pokémon Dragon.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Dragon-Pokémon während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tumbling Attack",
				'fr-fr': "Attaque Trébuchante",
				'es-es': "Ataque Tambaleante",
				'it-it': "Attacco Capriola",
				'pt-br': "Ataque Cambalhota",
				'de-de': "Taumler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
	},

	thirdParty: {
		cardmarket: 288257,
		tcgplayer: 111618
	}
}

export default card
