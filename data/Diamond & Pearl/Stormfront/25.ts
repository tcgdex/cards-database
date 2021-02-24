import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Scizor",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Honeycomb Defender",
				fr: "Défenseur de nid d'abeille",
			},
			effect: {
				en: "If Scizor has 6 or more damage counters on it, any damage done to Scizor by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Si Cizayox possède au moins 6 marqueurs de dégât, tous dégâts infligés à Cizayox par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Accelerate",
				fr: "Accélérer",
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out by this attack, prevent all effects of an attack, including damage, done to Scizor during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Cizayox lors du prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Pound Down",
				fr: "Mettre en bouillie",
			},
			effect: {
				en: "If you don't have any Pokémon with any Poké-Powers in play, this attack does 40 damage plus 30 more damage.",
				fr: "Si vous n'avez pas de Pokémon possédant des Poké-Powers en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
