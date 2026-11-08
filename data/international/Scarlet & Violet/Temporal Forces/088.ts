import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [623],
	set: Set,

	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Iron Defense",
			'fr-fr': "Mur de Fer",
			'es-es': "Defensa Férrea",
			'it-it': "Ferroscudo",
			'pt-br': "Defesa de Ferro",
			'de-de': "Eisenabwehr"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Fighting Fist",
			'fr-fr': "Poing Combattant",
			'es-es': "Puño Luchador",
			'it-it': "Pugno Combattente",
			'pt-br': "Punhos de Guerreiro",
			'de-de': "Kampffaust"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex or Pokémon V, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex ou un Pokémon-V, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex o un Pokémon V, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex o un Pokémon-V, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex ou um Pokémon V, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex oder Pokémon-V ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",

	description: {
		'en-us': "Artillery platforms built into the walls of ancient castles served as perches from which Golurk could fire energy beams.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760718,
				tcgplayer: 542832
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760718,
				tcgplayer: 542832
			}
		},
	],

	illustrator: "Oku",

}

export default card