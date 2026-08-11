import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Grapploct",
		'fr-fr': "Krakos",
		'es-es': "Grapploct",
		'it-it': "Grapploct",
		'pt-br': "Grapploct",
		'de-de': "Kaocto"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Clobbopus",
		'fr-fr': "Poulpaf",
		'es-es': "Clobbopus",
		'it-it': "Clobbopus",
		'pt-br': "Clobbopus",
		'de-de': "Klopptopus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Octolock",
				'fr-fr': "Octoprise",
				'es-es': "Octopresa",
				'it-it': "Tentacolock",
				'pt-br': "Chave de Tentáculos",
				'de-de': "Octoklammer"
			},
			effect: {
				'en-us': "Until this Grapploct leaves the Active Spot, the Defending Pokémon's attacks cost ColorlessColorless more, and the Defending Pokémon can't retreat. This effect can't be applied more than once.",
				'fr-fr': "Tant que ce Krakos est sur le Poste Actif, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus, et le Pokémon Défenseur ne peut pas battre en retraite. Cet effet n'est applicable qu'une fois.",
				'es-es': "Hasta que este Grapploct deje el Puesto Activo, los ataques del Pokémon Defensor cuestan ColorlessColorless más, y el Pokémon Defensor no puede retirarse. Este efecto no puede aplicarse más de una vez.",
				'it-it': "Finché questo Grapploct è in posizione attiva, il costo degli attacchi del Pokémon difensore aumenta di ColorlessColorless e il Pokémon difensore non può ritirarsi. Questo effetto non può essere applicato più di una volta.",
				'pt-br': "Até este Grapploct sair do Campo Ativo, o custo dos ataques do Pokémon Defensor será ColorlessColorless a mais e o Pokémon Defensor não poderá recuar. Este efeito não pode ser aplicado mais de uma vez.",
				'de-de': "Bis dieses Kaocto die Aktive Position verlässt, erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um ColorlessColorless und das Verteidigende Pokémon kann sich nicht zurückziehen. Dieser Effekt kann nicht mehr als einmal angewandt werden."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tough Swing",
				'fr-fr': "Frappe Solide",
				'es-es': "Golpe Sólido",
				'it-it': "Colpo Spietato",
				'pt-br': "Tacada Sólida",
				'de-de': "Wuchtiger Hieb"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful."
	},

	dexId: [853],

	thirdParty: {
		cardmarket: 436684,
		tcgplayer: 208422
	}
}

export default card
