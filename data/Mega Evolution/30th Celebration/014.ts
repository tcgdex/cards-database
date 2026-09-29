import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth."
	},

	name: {
		en: "Reshiram",
		fr: "Reshiram",
		de: "Reshiram",
		es: "Reshiram",
		it: "Reshiram",
		'es-mx': "Reshiram",
		pt: "Reshiram"
	},

	illustrator: "Uta",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [643],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			it: "Lacerazione",
			'es-mx': "Cuchillada",
			pt: "Talho"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Laser Flame",
			fr: "Flamme Laser",
			de: "Laserflamme",
			es: "Llama Láser",
			it: "Fiamma Laser",
			'es-mx': "Fuego Láser",
			pt: "Labareda Laser"
		},

		effect: {
			en: "If this Pokémon has any <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy attached, this attack does 80 more damage.",
			fr: "Si au moins une Énergie <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene alguna Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unida, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> assegnate, questo attacco infligge 80 danni in più.",
			'es-mx': "Si este Pokémon tiene alguna Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unida, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon tiver alguma Energia Lightning ligada a ele, este ataque causará 80 pontos de dano a mais."
		},

		damage: "80+",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907620,
				tcgplayer: 716447
			}
		}
	],
}

export default card
