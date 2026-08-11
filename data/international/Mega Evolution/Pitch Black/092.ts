import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'es-es': "Thievul",
		'es-mx': "Thievul",
		'de-de': "Gaunux",
		'it-it': "Thievul",
		'pt-br': "Thievul"
	},

	illustrator: "Jerky",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [828],
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Nickit"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Skill Thief",
			'fr-fr': "Vol de Compétence",
			'es-es': "Ladrón de Talentos",
			'es-mx': "Robo de Talentos",
			'de-de': "Trickdieb",
			'it-it': "Rubatalento",
			'pt-br': "Afanar Talento"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "If you have no cards in your hand, choose an attack from 1 of your opponent's Pokémon in play and use it as this attack.",
			'fr-fr': "Si vous n'avez aucune carte dans votre main, choisissez une attaque de l'un des Pokémon en jeu de votre adversaire et utilisez-la en tant que cette attaque.",
			'es-es': "Si no tienes ninguna carta en tu mano, elige un ataque de uno de los Pokémon en juego de tu rival y úsalo para este ataque.",
			'es-mx': "Si no tienes ninguna carta en tu mano, elige 1 ataque de 1 de los Pokémon en juego de tu rival y úsalo como este ataque.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, wähle 1 Attacke von 1 Pokémon deines Gegners im Spiel und setze sie als diese Attacke ein.",
			'it-it': "Se non hai carte in mano, scegli un attacco di uno dei Pokémon del tuo avversario in gioco e usalo al posto di questo attacco.",
			'pt-br': "Se você não tiver cartas na sua mão, escolha um ataque de 1 dos Pokémon do seu oponente em jogo e use-o como este ataque."
		}
	}, {
		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'es-mx': "Colmillo Afilado",
			'de-de': "Scharfe Fänge",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada"
		},

		cost: ["Darkness", "Colorless", "Colorless"],

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895876,
				tcgplayer: 704849
			}
		},
	],
}

export default card
