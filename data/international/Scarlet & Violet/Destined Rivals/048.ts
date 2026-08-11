import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'en-us': "Misty's Magikarp",
		'fr-fr': "Magicarpe d'Ondine",
		'de-de': "Mistys Karpador",
		'it-it': "Magikarp di Misty",
		'es-es': "Magikarp de Misty",
		'pt-br': "Magikarp da Misty",
		'es-mx': "Magikarp de Misty"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "So Submerged",
			'fr-fr': "Submersion Profonde",
			'de-de': "Total abgetaucht",
			'it-it': "Immersione Totale",
			'es-es': "Inmersión Asombrosa",
			'pt-br': "Submergidaço",
			'es-mx': "Sumersión a Todo Dar"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'es-es': "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Splash",
			'fr-fr': "Trempette",
			'de-de': "Platscher",
			'it-it': "Splash",
			'es-es': "Salpicadura",
			'pt-br': "Borrifada",
			'es-mx': "Salpicadura"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825922,
				tcgplayer: 630815
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825922,
				tcgplayer: 630815
			}
		},
	],
}

export default card
