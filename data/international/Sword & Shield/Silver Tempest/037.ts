import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [320],
	set: Set,

	name: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'de-de': "Wailmer"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Gulp Down",
			'fr-fr': "Gorgées Goulues",
			'es-es': "Zampar",
			'it-it': "Inghiottimento",
			'pt-br': "Goela Abaixo",
			'de-de': "Großer Schluck"
		},

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
			'fr-fr': "Soignez ce Pokémon du nombre de dégâts que vous avez infligés au Pokémon Actif de votre adversaire.",
			'es-es': "Cura a este Pokémon la misma cantidad de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli che hai inflitto al Pokémon attivo del tuo avversario.",
			'pt-br': "Cure deste Pokémon a mesma quantidade de dano que você causou ao Pokémon Ativo do seu oponente.",
			'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682079,
				tcgplayer: 451671
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682079,
				tcgplayer: 451671
			}
		},
	],
}

export default card
