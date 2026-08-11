import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'en-us': "Team Rocket's Zapdos",
		'fr-fr': "Électhor de la Team Rocket",
		'de-de': "Team Rockets Zapdos",
		'it-it': "Zapdos del Team Rocket",
		'es-es': "Zapdos del Team Rocket",
		'pt-br': "Zapdos da Equipe Rocket",
		'es-mx': "Zapdos del Equipo Rocket"
	},


	illustrator: "Nurikabe",

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Jamming Wing",
			'fr-fr': "Aile Encombrante",
			'de-de': "Störflügel",
			'it-it': "Ala di Interferenza",
			'es-es': "Ala Fastidiosa",
			'pt-br': "Asa Bloqueadora",
			'es-mx': "Ala Fastidiosa"
		},

		effect: {
			'en-us': "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			'fr-fr': "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
			'de-de': "Du kannst 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank verschieben.",
			'it-it': "Puoi spostare un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
			'es-es': "Puedes mover 1 Energía del Pokémon Activo de tu rival a uno de sus Pokémon en Banca.",
			'pt-br': "Você pode mover uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele.",
			'es-mx': "Puedes mover 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca."
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Wicked Thunder",
			'fr-fr': "Tonnerre Malveillant",
			'de-de': "Arglistiger Donner",
			'it-it': "Tuono Malvagio",
			'es-es': "Trueno Malvado",
			'pt-br': "Trovão Traiçoeiro",
			'es-mx': "Trueno Malvado"
		},

		effect: {
			'en-us': "If this Pokémon has any Team Rocket's Energy attached, this attack does 60 more damage.",
			'fr-fr': "Si au moins une Énergie de la Team Rocket est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Team Rockets Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha delle Energie del Team Rocket assegnate, questo attacco infligge 60 danni in più.",
			'es-es': "Si este Pokémon tiene alguna Energía del Team Rocket unida, este ataque hace 60 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver alguma Energia da Equipe Rocket ligada a ele, este ataque causará 60 pontos de dano a mais.",
			'es-mx': "Si este Pokémon tiene alguna Energía del Equipo Rocket unida, este ataque hace 60 puntos de daño más."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825944,
				tcgplayer: 630818
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 825944,
				tcgplayer: 630818
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 827836,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			stamp: ["eb-games"],
			thirdParty: {
				cardmarket: 848308,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862171,
			}
		},
	],
}

export default card
