import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Manaphy EX",
		'fr-fr': "Manaphy EX",
		'es-es': "Manaphy EX",
		'it-it': "Manaphy EX",
		'pt-br': "Manaphy EX",
		'de-de': "Manaphy EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 120,

	types: [
		"Water",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aqua Tube",
				'fr-fr': "Tube Aqua",
				'es-es': "Tubo Acuático",
				'it-it': "Scivolo d'Acqua",
				'pt-br': "Aqua Tubo",
				'de-de': "Wasserkanal"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Water Energy attached to it has no Retreat Cost.",
				'fr-fr': "Chacun de vos Pokémon auquel de l'Énergie Water est attachée n'a pas de Coût de Retraite.",
				'es-es': "Cada uno de tus Pokémon que tenga alguna Energía Water unida a él no tiene ningún Coste de Retirada.",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Water assegnate ha costo di ritirata.",
				'pt-br': "Cada um dos seus Pokémon que possuir alguma Energia Water ligada não possui Custo para Recuar.",
				'de-de': "Jedes deiner Pokémon, an das Water-Energie angelegt ist, hat keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Mineral Pump",
				'fr-fr': "Pompe Minérale",
				'es-es': "Bombeo Mineral",
				'it-it': "Pompa Minerale",
				'pt-br': "Bomba Mineral",
				'de-de': "Mineralpumpe"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Benched Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				'pt-br': "Cura 30 de danos de cada Pokémon do Banco.",
				'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 288207,
		tcgplayer: 111538
	}
}

export default card
