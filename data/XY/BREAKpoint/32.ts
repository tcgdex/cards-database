import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Manaphy EX",
		fr: "Manaphy EX",
		es: "Manaphy EX",
		it: "Manaphy EX",
		pt: "Manaphy EX",
		de: "Manaphy EX"
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
				en: "Aqua Tube",
				fr: "Tube Aqua",
				es: "Tubo Acuático",
				it: "Scivolo d'Acqua",
				pt: "Aqua Tubo",
				de: "Wasserkanal"
			},
			effect: {
				en: "Each of your Pokémon that has any Water Energy attached to it has no Retreat Cost.",
				fr: "Chacun de vos Pokémon auquel de l'Énergie Water est attachée n'a pas de Coût de Retraite.",
				es: "Cada uno de tus Pokémon que tenga alguna Energía Water unida a él no tiene ningún Coste de Retirada.",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Water assegnate ha costo di ritirata.",
				pt: "Cada um dos seus Pokémon que possuir alguma Energia Water ligada não possui Custo para Recuar.",
				de: "Jedes deiner Pokémon, an das Water-Energie angelegt ist, hat keine Rückzugskosten."
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
				en: "Mineral Pump",
				fr: "Pompe Minérale",
				es: "Bombeo Mineral",
				it: "Pompa Minerale",
				pt: "Bomba Mineral",
				de: "Mineralpumpe"
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				it: "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				pt: "Cura 30 de danos de cada Pokémon do Banco.",
				de: "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
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
	stage: "Basic"
}

export default card
