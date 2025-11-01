import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		en: "Team Rocket's Zapdos",
		fr: "Électhor de la Team Rocket",
		de: "Team Rockets Zapdos",
		it: "Zapdos del Team Rocket",
		es: "Zapdos del Team Rocket",
		pt: "Zapdos da Equipe Rocket",
		'es-mx': "Zapdos del Equipo Rocket"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Jamming Wing",
			fr: "Aile Encombrante",
			de: "Störflügel",
			it: "Ala di Interferenza",
			es: "Ala Fastidiosa",
			pt: "Asa Bloqueadora",
			'es-mx': "Ala Fastidiosa"
		},

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			de: "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben.",
			it: "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			es: "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			pt: "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			'es-mx': "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Wicked Thunder",
			fr: "Tonnerre Malveillant",
			de: "Arglistiger Donner",
			it: "Tuono Malvagio",
			es: "Trueno Malvado",
			pt: "Trovão Traiçoeiro",
			'es-mx': "Trueno Malvado"
		},

		effect: {
			en: "If this Pokémon has any Team Rocket's Energy attached, this attack does 60 more damage.",
			fr: "Si au moins une Énergie de la Team Rocket est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon mindestens 1 Team Rockets Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha delle Energie del Team Rocket assegnate, questo attacco infligge 60 danni in più.",
			es: "Si este Pokémon tiene alguna Energía del Team Rocket unida, este ataque hace 60 puntos de daño más.",
			pt: "Se este Pokémon tiver alguma Energia da Equipe Rocket ligada a ele, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene alguna Energía del Equipo Rocket unida, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 825944
	}
}

export default card
