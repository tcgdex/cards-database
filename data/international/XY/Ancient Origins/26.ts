import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'es-es': "Jolteon",
		'it-it': "Jolteon",
		'pt-br': "Jolteon",
		'de-de': "Blitza"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 90,

	types: [
		"Lightning",
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
				'en-us': "Electric Effect",
				'fr-fr': "Effet Électrique",
				'es-es': "Efecto Eléctrico",
				'it-it': "Elettreffetto",
				'pt-br': "Efeito Elétrico",
				'de-de': "Elektro-Effekt"
			},
			effect: {
				'en-us': "Each of your Stage 1 Pokémon in play is now a Lightning Pokémon in addition to its existing types.",
				'fr-fr': "Chacun de vos Pokémon de Niveau 1 en jeu est maintenant un Pokémon Lightning en plus de ses types existants.",
				'es-es': "Cada uno de tus Pokémon de Fase 1 en juego pasa a ser un Pokémon Lightning además de sus tipos actuales.",
				'it-it': "Ciascuno dei tuoi Pokémon di Fase 1 in gioco diventa di tipo Lightning in aggiunta ai suoi tipi originari.",
				'pt-br': "Cada um dos seus Pokémon Estágio 1 em jogo é agora um Pokémon Lightning, além dos seus tipos existentes.",
				'de-de': "Jedes deiner Phase-1-Pokémon im Spiel ist jetzt zusätzlich zu seinen bereits vorhandenen Typen ein Lightning-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Blast",
				'fr-fr': "Grondement de Tonnerre",
				'es-es': "Estallido Trueno",
				'it-it': "Tuonobomba",
				'pt-br': "Explosão de Trovões",
				'de-de': "Donnerkeil"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 80,

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

	retreat: 0,

	description: {
		'en-us': "It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.",
	},

	thirdParty: {
		cardmarket: 284207,
		tcgplayer: 101447
	}
}

export default card
