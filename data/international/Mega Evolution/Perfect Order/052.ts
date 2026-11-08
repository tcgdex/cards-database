import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [452],

	name: {
		'en-us': "Drapion",
		'fr-fr': "Drascore",
		'es-es': "Drapion",
		'es-mx': "Drapion",
		'de-de': "Piondragi",
		'it-it': "Drapion",
		'pt-br': "Drapion"
	},

	evolveFrom: {
		'en-us': "Skorupi",
		'fr-fr': "Rapion",
		'es-es': "Skorupi",
		'es-mx': "Skorupi",
		'de-de': "Pionskora",
		'it-it': "Skorupi",
		'pt-br': "Skorupi",
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Wrack Down",
			'fr-fr': "Réduire en Poussière",
			'es-es': "Desmoronar",
			'es-mx': "Desmoronar",
			'de-de': "Niederschleudern",
			'it-it': "Abbattere",
			'pt-br': "Desmoronar"
		},

		damage: 60
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			'en-us': "Hazardous Tail",
			'fr-fr': "Queue Nocive",
			'es-es': "Cola Nociva",
			'es-mx': "Cola Nociva",
			'de-de': "Bedrohlicher Schweif",
			'it-it': "Coda Insidiosa",
			'pt-br': "Cauda Periculosa"
		},

		effect: {
			'en-us': "This Pokémon also does 70 damage to itself. Your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			'fr-fr': "Ce Pokémon s'inflige aussi 70 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			'es-es': "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			'es-mx': "Este Pokémon también se hace 70 puntos de daño a sí mismo. El Pokémon Activo de tu rival ahora está Envenenado y Paralizado.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet.",
			'it-it': "Questo Pokémon infligge anche 70 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			'pt-br': "Este Pokémon também causa 70 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684433,
				cardmarket: 877468
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684433,
				cardmarket: 877468
			}
		}
	],

}

export default card
