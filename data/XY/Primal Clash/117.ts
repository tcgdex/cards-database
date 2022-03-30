import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},
	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		399,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Régénération α",
				en: "α Recovery",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				en: "When this Pokémon is healed, double the amount healed.",
				es: "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				it: "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				pt: "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				de: "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
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
				en: "Drench",
				fr: "Trempage",
				es: "Empapar",
				it: "Inzuppato",
				pt: "Encharcar",
				de: "Durchnässen"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, this attack does 20 more damage.",
				fr: "Si de l'Énergie Water est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 20 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 20 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Water ligada a ele, esse ataque causará 20 de danos adicionais.",
				de: "Wenn an dieses Pokémon bereits Water-Energie angelegt ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
