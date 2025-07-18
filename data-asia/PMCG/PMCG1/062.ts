import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		en: "Raticate",
		ja: "ラティテート",
		fr: "Ratiquer",
		de: "Ratatisch",
		es: "Raticato",
		it: "Raticata",
		pt: "Raticate",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Bite",
				ja: "噛む",
				fr: "Mordre",
				de: "Beißen",
				es: "Morder",
				it: "Morso",
				pt: "Morder",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Super Fang",
				ja: "スーパーファング",
				fr: "Super croc",
				de: "Super Fang",
				es: "Súper colmillo",
				it: "Super Fang",
				pt: "Super Fang",
			},
			effect: {
				en: "Does damage to the Defending Pokemon equal to half the Defending Pokemon's remaining HP (rounded up to the nearest 10).",
				ja: "防御ポケモンへの損傷は、防御ポケモンの残りのHPの半分に等しい（最も近い10に丸められています）。",
				fr: "Endommage le Pokémon en défense égal à la moitié du HP restant du Pokémon en défense (arrondi jusqu'au 10 le plus proche).",
				de: "Schädigt das verteidigende Pokemon der Hälfte der verbleibenden HP des Titelverteidigers (bis zum nächsten 10).",
				es: "Da daño al Pokémon defensor igual a la mitad del HP restante del Pokémon defensor (redondeado a los 10 más cercanos).",
				it: "Danni al Pokemon in difesa pari alla metà del restante HP rimanente del Pokemon (arrotondato fino ai 10 più vicini).",
				pt: "Danos ao Pokémon atual igual a metade do HP restante do Pokemon atual (arredondado para os 10 mais próximos).",
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};
