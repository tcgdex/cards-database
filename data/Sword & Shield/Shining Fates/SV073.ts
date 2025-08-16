import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [853],
	set: Set,

	name: {
		fr: "Krakos",
		en: "Grapploct",
		es: "Grapploct",
		it: "Grapploct",
		pt: "Grapploct",
		de: "Kaocto"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Poulpaf",
		en: "Clobbopus"
	},

	attacks: [{
		name: {
			fr: "Octoprise",
			en: "Octolock",
			es: "Octopresa",
			it: "Tentacolock",
			pt: "Chave de Tentáculos",
			de: "Octoklammer"
		},

		effect: {
			fr: "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n'est applicable qu'une fois.",
			en: "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once.",
			es: "Hasta que este Grapploct deje el Puesto Activo, los ataques del Pokémon Defensor cuestan ColorlessColorless más, y el Pokémon Defensor no puede retirarse. Este efecto no puede aplicarse más de una vez.",
			it: "Finché questo Grapploct è in posizione attiva, il costo degli attacchi del Pokémon difensore aumenta di ColorlessColorless e il Pokémon difensore non può ritirarsi. Questo effetto non può essere applicato più di una volta.",
			pt: "Até este Grapploct sair do Campo Ativo, o custo dos ataques do Pokémon Defensor será ColorlessColorless a mais e o Pokémon Defensor não poderá recuar. Este efeito não pode ser aplicado mais de uma vez.",
			de: "Bis dieses Kaocto die Aktive Position verlässt, erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um ColorlessColorless und das Verteidigende Pokémon kann sich nicht zurückziehen. Dieser Effekt kann nicht mehr als einmal angewandt werden."
		},

		cost: ["Fighting", "Fighting"]
	}, {
		name: {
			fr: "Frappe Solide",
			en: "Tough Swing",
			es: "Golpe Sólido",
			it: "Colpo Spietato",
			pt: "Tacada Sólida",
			de: "Wuchtiger Hieb"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			en: "This attack's damage isn't affected by Resistance.",
			es: "El daño de este ataque no se ve afectado por Resistencia.",
			it: "I danni di questo attacco non sono influenzati dalla resistenza.",
			pt: "O dano deste ataque não é afetado por Resistência.",
			de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful."
	},

	thirdParty: {
		cardmarket: 539753
	}
}

export default card
