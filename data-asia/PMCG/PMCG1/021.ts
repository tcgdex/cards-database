import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Charizard",
		ja: "カリザード",
		fr: "Charizard",
		de: "Charizard",
		es: "Charizard",
		it: "Charizard",
		pt: "Charizard",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [6],
	hp: 120,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Burn",
				ja: "エネルギー燃焼",
				fr: "Brûlure d'énergie",
				de: "Energieverbrennung",
				es: "Quema de energía",
				it: "ENERGIA Burn",
				pt: "Queima de energia",
			},
			effect: {
				en: "All Energy attached to this Pokmon are Fire Energy instead of their usual type. This Pokmon Power stops working if this Pokmon is Asleep, Confused, or Paralyzed.",
				ja: "このポケモンに取り付けられたすべてのエネルギーは、通常のタイプではなく火エネルギーです。このポクモンが眠ったり、混乱したり、麻痺したりしている場合、このポケモンのパワーは機能しなくなります。",
				fr: "Toute énergie attachée à ce pokemon est l'énergie du feu au lieu de leur type habituel. Cette puissance Pokémon cesse de fonctionner si ce Pokmon est endormi, confus ou paralysé.",
				de: "Alle an diesem Pokémon verbundenen Energie sind Feuerergie anstelle ihres üblichen Typs. Diese Pokemon -Kraft funktioniert nicht mehr, wenn dieses Pokmon schläft, verwirrt oder gelähmt ist.",
				es: "Toda la energía unida a este Pokémon son energía de fuego en lugar de su tipo habitual. Este poder de Pokémon deja de funcionar si este Pokmon está dormido, confundido o paralizado.",
				it: "Tutta l'energia attaccata a questo Pokemon è l'energia del fuoco anziché il loro solito tipo. Questo Pokemon Power smette di funzionare se questo Pokmon è addormentato, confuso o paralizzato.",
				pt: "Toda energia ligada a este Pokémon é energia de fogo em vez do tipo usual. Esse poder de Pokemon para de funcionar se esse Pokmon estiver dormindo, confuso ou paralisado.",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				en: "Fire Spin",
				ja: "火のスピン",
				fr: "Rotation de feu",
				de: "Feuerspin",
				es: "Giro de fuego",
				it: "Spin",
				pt: "Giro de fogo",
			},
			effect: {
				en: "Discard 2 Energy from this Pokemon.",
				ja: "このポケモンから2エネルギーを捨てます。",
				fr: "Jetez 2 énergie de ce Pokémon.",
				de: "Verwerfen Sie 2 Energie von diesem Pokémon.",
				es: "Deseche 2 energía de este Pokémon.",
				it: "Scartare 2 energia da questo Pokemon.",
				pt: "Descarte 2 energia deste Pokémon.",
			},
			damage: 100,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};
