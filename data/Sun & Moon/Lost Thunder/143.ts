import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
		es: "Carbink",
		it: "Carbink",
		pt: "Carbink",
		de: "Rocara"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wonder Ray",
				fr: "Rayon Miracle",
				es: "Rayo Prodigioso",
				it: "Raggio Meraviglia",
				pt: "Raio Encantado",
				de: "Wunderstrahl"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all effects of attacks, including damage, done to this Pokémon by any Pokémon that has an Ability.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon ayant un talent.",
				es: "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por cualquier Pokémon que tenga una habilidad.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da qualsiasi Pokémon che abbia un’abilità.",
				pt: "Durante a próxima vez de jogar do seu oponente, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon por qualquer Pokémon que tiver uma Habilidade.",
				de: "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners durch Pokémon, die eine Fähigkeit haben, zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Gem",
				fr: "Rayon Gemme",
				es: "Joya de Luz",
				it: "Gemmoforza",
				pt: "Gema Poderosa",
				de: "Juwelenkraft"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365754
	}
}

export default card
