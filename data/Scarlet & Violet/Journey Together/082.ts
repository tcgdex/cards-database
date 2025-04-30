import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Regirock",
		fr: "Regirock",
		es: "Regirock",
		de: "Regirock",
		it: "Regirock",
		pt: "Regirock",
		'es-mx': "Regirock"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rock Armor",
			fr: "Armure Rocheuse",
			es: "Armadura Rocosa",
			de: "Steinrüstung",
			it: "Rocciacorazza",
			pt: "Armadura de Pedra",
			'es-mx': "Armadura Rocosa"
		},

		effect: {
			en: "If this Pokémon has any Energy attached, it takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Si de l'Énergie est attachée à ce Pokémon, il subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Si este Pokémon tiene alguna Energía unida, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, werden ihm durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			it: "Se questo Pokémon ha delle Energie assegnate, subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Se este Pokémon tiver alguma Energia ligada a ele, receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Si este Pokémon tiene alguna Energía unida, los ataques le hacen 30 puntos de daño menos (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Breaching Lariat",
			fr: "Lasso Perforateur",
			es: "Lazo Destructor",
			de: "Durchbrechendes Lasso",
			it: "Spaccalazo",
			pt: "Laço Destruidor",
			'es-mx': "Lazo Destructor"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
