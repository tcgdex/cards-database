import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'en-us': "Team Rocket's Houndoom",
		'fr-fr': "Démolosse de la Team Rocket",
		'de-de': "Team Rockets Hundemon",
		'it-it': "Houndoom del Team Rocket",
		'es-es': "Houndoom del Team Rocket",
		'pt-br': "Houndoom da Equipe Rocket",
		'es-mx': "Houndoom del Equipo Rocket"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Team Rocket's Houndour",
		'fr-fr': "Malosse de la Team Rocket",
		'de-de': "Team Rockets Hunduster",
		'it-it': "Houndour del Team Rocket",
		'es-es': "Houndour del Team Rocket",
		'pt-br': "Houndour da Equipe Rocket",
		'es-mx': "Houndour del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Cruel Coal",
			'fr-fr': "Charbon Cruel",
			'de-de': "Krude Kohle",
			'it-it': "Carboni Crudeli",
			'es-es': "Carbón Cruel",
			'pt-br': "Carvão Cruel",
			'es-mx': "Carbón Cruel"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned and Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Queimado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Quemado."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Scorching Fire",
			'fr-fr': "Feu Infernal",
			'de-de': "Versengendes Feuer",
			'it-it': "Fuoco Ustionante",
			'es-es': "Fuego Abrasador",
			'pt-br': "Fogo Ardente",
			'es-mx': "Fuego Ardiente"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'es-mx': "Descarta 1 Energía de este Pokémon."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825912,
				tcgplayer: 632857
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825912,
				tcgplayer: 632857
			}
		},
	],
}

export default card
