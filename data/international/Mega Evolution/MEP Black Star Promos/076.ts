import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'es-mx': "Crobat",
		'de-de': "Iksbat",
		'it-it': "Crobat",
		'pt-br': "Crobat"
	},

	illustrator: "Apios",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [169],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'es-mx': "Golbat",
		'de-de': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Nighttime Maneuvers",
			'fr-fr': "Manigances Nocturnes",
			'es-es': "Maniobras de Medianoche",
			'es-mx': "Maniobras de Medianoche",
			'de-de': "Manöver bei Nacht",
			'it-it': "Manovre nell'Oscurità",
			'pt-br': "Manobras na Penumbra"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte. Mélangez votre deck, puis placez cette carte sur le dessus de votre deck.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Karte. Mische dein Deck und lege anschließend jene Karte darauf.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Cerca nel tuo mazzo una carta. Rimischia il tuo mazzo, poi metti quella carta in cima al mazzo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Procure por 1 carta no seu baralho. Embaralhe o seu baralho e, em seguida, coloque aquela carta como a carta de cima do seu baralho."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Poison Sound Wave",
			'fr-fr': "Onde Sonore Toxique",
			'es-es': "Onda Sónica Venenosa",
			'es-mx': "Onda Sónica Venenosa",
			'de-de': "Gift-Schallwelle",
			'it-it': "Onda Sonora Velenosa",
			'pt-br': "Vibração Venenosa"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado."
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 884756,
				tcgplayer: 694686

			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 884757,
				tcgplayer: 694687

			}
		},
	],
}

export default card
