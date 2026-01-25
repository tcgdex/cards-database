import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		en: "Misty's Magikarp",
		fr: "Magicarpe d'Ondine",
		de: "Mistys Karpador",
		it: "Magikarp di Misty",
		es: "Magikarp de Misty",
		pt: "Magikarp da Misty",
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
			en: "So Submerged",
			fr: "Submersion Profonde",
			de: "Total abgetaucht",
			it: "Immersione Totale",
			es: "Inmersión Asombrosa",
			pt: "Submergidaço",
			'es-mx': "Sumersión a Todo Dar"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.",
			fr: "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire.",
			de: "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden.",
			it: "Fintanto che questo Pokémon è nella tua panchina, previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			es: "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon.",
			pt: "Enquanto este Pokémon estiver no seu Banco, previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Splash",
			fr: "Trempette",
			de: "Platscher",
			it: "Splash",
			es: "Salpicadura",
			pt: "Borrifada",
			'es-mx': "Salpicadura"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 825922
	}
}

export default card
