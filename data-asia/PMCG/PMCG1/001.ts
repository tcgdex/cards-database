import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Bulbasaur",
		ja: "ブルバサウルス",
		fr: "Bulbasaur",
		de: "Bulbasaur",
		es: "Bulbasaurio",
		it: "Bulbasaur",
		pt: "Bulbasaur",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [1],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				en: "Leech Seed",
				ja: "リーチシード",
				fr: "Graine de sangsue",
				de: "Blutegelsamen",
				es: "Semilla sanguijuela",
				it: "Seme di sanguisuga",
				pt: "Semente de sanguessuga",
			},
			effect: {
				en: "Heal 10 damage from this Pokemon.",
				ja: "このポケモンから10ダメージを癒します。",
				fr: "Guérez 10 dégâts de ce Pokémon.",
				de: "Heilen Sie 10 Schäden durch dieses Pokémon.",
				es: "Sanar 10 daño de este Pokémon.",
				it: "Guarisci 10 danni da questo Pokemon.",
				pt: "Cure 10 danos deste Pokémon.",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
