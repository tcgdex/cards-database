import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Alolan Raticate",
		'fr-fr': "Rattatac d’Alola",
		'es-es': "Raticate de Alola",
		'it-it': "Raticate di Alola",
		'pt-br': "Raticate de Alola",
		'de-de': "Alola-Rattikarl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Enhanced Fang",
				'fr-fr': "Croc Amélioré",
				'es-es': "Incisivos Mejorados",
				'it-it': "Zanne Super",
				'pt-br': "Presa Acentuada",
				'de-de': "Spezial-Zahn"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 50 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 50 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 50 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 50 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Hyper Fang",
				'fr-fr': "Croc de Mort",
				'es-es': "Hipercolmillo",
				'it-it': "Iperzanna",
				'pt-br': "Hiperpresa",
				'de-de': "Hyperzahn"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It forms a group of Rattata, which it assumes command of. Each group has its own territory, and disputes over food happen often.",
	},

	thirdParty: {
		cardmarket: 299484,
		tcgplayer: 138570
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
