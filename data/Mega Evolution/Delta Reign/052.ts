import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Steelix",
		fr: "Steelix",
		de: "Stahlos",
		es: "Steelix",
		it: "Steelix",
		pt: "Steelix",
		'es-mx': "Steelix"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "High Density Armor",
			fr: "Armure Résistante",
			de: "Schwere Rüstung",
			es: "Armadura Alta Densidad",
			it: "Corazza Dura",
			pt: "Armadura de Alta Densidade",
			'es-mx': "Armadura Maciza"
		},

		effect: {
			en: "If this Pokémon has full HP, it takes 60 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			de: "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken von Pokémon deines Gegners 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			es: "Si este Pokémon tiene todos sus PS, los ataques de los Pokémon de tu rival le hacen 60 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			it: "Se questo Pokémon ha tutti i PS, subisce 60 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Se este Pokémon tiver PS cheio, ele receberá 60 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'es-mx': "Si este Pokémon tiene todos sus PS, este recibe 60 puntos de daño menos de los ataques de los Pokémon de tu rival (después de aplicar Debilidad y Resistencia)."
		}
	}],

	attacks: [{
		name: {
			en: "Tough Swing",
			fr: "Frappe Solide",
			de: "Wuchtiger Hieb",
			es: "Golpe Sólido",
			it: "Colpo Spietato",
			pt: "Tacada Sólida",
			'es-mx': "Golpe Duro"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			'es-mx': "El daño de este ataque no se ve afectado por Resistencia."
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	thirdParty: {
		tcgplayer: 728029,
		cardmarket: 918875
	}
}

export default card