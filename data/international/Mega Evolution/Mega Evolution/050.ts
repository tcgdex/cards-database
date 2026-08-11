import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Manectric ex",
		'fr-fr': "Méga-Élecsprint-ex",
		'de-de': "Mega Voltenso-ex",
		'it-it': "Mega Manectric-ex",
		'es-es': "Mega-Manectric ex",
		'pt-br': "Mega Manectric ex",
		'es-mx': "Mega-Manectric ex"
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz",
		'it-it': "Electrike",
		'es-es': "Electrike",
		'pt-br': "Electrike",
		'es-mx': "Electrike"
	},
	stage: "Stage1",
	dexId: [310],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Flash Ray",
			'fr-fr': "Rayon Flash",
			'de-de': "Blitzstrahl",
			'it-it': "Raggio Flash",
			'es-es': "Rayo Destello",
			'pt-br': "Raio de Clarão",
			'es-mx': "Rayo Destello"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			'es-es': "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon."
		},

		damage: 120
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Riotous Blasting",
			'fr-fr': "Explosion Incontrôlée",
			'de-de': "Tobende Explosion",
			'it-it': "Esplosione Tumultuosa",
			'es-es': "Estallido Desenfrenado",
			'pt-br': "Detonação Desenfreada",
			'es-mx': "Explosión Desenfrenada"
		},

		effect: {
			'en-us': "You may discard all Energy from this Pokémon and have this attack do 130 more damage.",
			'fr-fr': "Vous pouvez défausser toutes les Énergies de ce Pokémon et infliger 130 dégâts supplémentaires avec cette attaque.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen und diese Attacke 130 Schadenspunkte mehr zufügen lassen.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon e infliggere 130 danni in più con questo attacco.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon y hacer que este ataque haga 130 puntos de daño más.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon e fazer este ataque causar 130 pontos de dano a mais.",
			'es-mx': "Puedes descartar todas las Energías de este Pokémon y hacer que este ataque haga 130 puntos de daño más."
		},

		damage: "200+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851121,
				tcgplayer: 654389
			}
		},
	],
}

export default card
