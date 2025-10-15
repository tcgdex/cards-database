import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Manectric ex",
		fr: "Méga-Élecsprint-ex",
		de: "Mega Voltenso-ex",
		it: "Mega Manectric-ex",
		es: "Mega-Manectric ex",
		pt: "Mega Manectric ex",
		'es-mx': "Mega-Manectric ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Flash Ray",
			fr: "Rayon Flash",
			de: "Blitzstrahl",
			it: "Raggio Flash",
			es: "Rayo Destello",
			pt: "Raio de Clarão",
			'es-mx': "Rayo Destello"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Basis-Pokémon zugefügt wird.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos.",
			'es-mx': "Durante el próximo turno de tu rival, se evita todo el daño infligido por ataques de Pokémon Básicos a este Pokémon."
		},

		damage: 120
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Riotous Blasting",
			fr: "Explosion Incontrôlée",
			de: "Tobende Explosion",
			it: "Esplosione Tumultuosa",
			es: "Estallido Desenfrenado",
			pt: "Detonação Desenfreada",
			'es-mx': "Explosión Desenfrenada"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon and have this attack do 130 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies de ce Pokémon et infliger 130 dégâts supplémentaires avec cette attaque.",
			de: "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen und diese Attacke 130 Schadenspunkte mehr zufügen lassen.",
			it: "Puoi scartare tutte le Energie da questo Pokémon e infliggere 130 danni in più con questo attacco.",
			es: "Puedes descartar todas las Energías de este Pokémon y hacer que este ataque haga 130 puntos de daño más.",
			pt: "Você pode descartar todas as Energias deste Pokémon e fazer este ataque causar 130 pontos de dano a mais.",
			'es-mx': "Puedes descartar todas las Energías de este Pokémon y hacer que este ataque haga 130 puntos de daño más."
		},

		damage: "200+"
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654389
	}
}

export default card