import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Flareon",
		'fr-fr': "Pyroli",
		'es-es': "Flareon",
		'it-it': "Flareon",
		'pt-br': "Flareon",
		'de-de': "Flamara"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		136,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flare Effect",
				'fr-fr': "Effet Flamboyant",
				'es-es': "Efecto Ígneo",
				'it-it': "Fuocoeffetto",
				'pt-br': "Efeito de Labareda",
				'de-de': "Feuer-Effekt"
			},
			effect: {
				'en-us': "Each of your Stage 1 Pokémon in play is now a Fire Pokémon in addition to its existing types.",
				'fr-fr': "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Fire en plus de ses types existants.",
				'es-es': "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Fire además de sus tipos actuales.",
				'it-it': "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Fire in aggiunta ai suoi tipi originari.",
				'pt-br': "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Fire, além dos seus tipos existentes.",
				'de-de': "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Fire-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Breath",
				'fr-fr': "Souffle Ardent",
				'es-es': "Aliento Ardiente",
				'it-it': "Alitorovente",
				'pt-br': "Bafo de Calor",
				'de-de': "Heißer Atem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,000 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 284194,
		tcgplayer: 101437
	}
}

export default card
