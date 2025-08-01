import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Defensive Scales",
				fr: "Écailles Défensives",
				es: "Escamas Defensivas",
				it: "Difesa Squamata",
				pt: "Escamas de Defesa",
				de: "Schuppenschutz"
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				fr: "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				pt: "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rain Splash",
				fr: "Pluie Éclaboussante",
				es: "Golpe de Lluvia",
				it: "Spruzzapioggia",
				pt: "Chuva Borrifante",
				de: "Regenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 369044
	}
}

export default card
