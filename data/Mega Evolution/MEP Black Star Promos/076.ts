import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		'es-mx': "Crobat",
		de: "Iksbat",
		it: "Crobat",
		pt: "Crobat"
	},

	illustrator: "Apios",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",
	dexId: [169],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		'es-mx': "Golbat",
		de: "Golbat",
		it: "Golbat",
		pt: "Golbat"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Nighttime Maneuvers",
			fr: "Manigances Nocturnes",
			es: "Maniobras de Medianoche",
			'es-mx': "Maniobras de Medianoche",
			de: "Manöver bei Nacht",
			it: "Manovre nell'Oscurità",
			pt: "Manobras na Penumbra"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte. Mélangez votre deck, puis placez cette carte sur le dessus de votre deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Busca en tu baraja 1 carta. Baraja las cartas de tu baraja y, luego, pon esa carta en la parte superior de tu baraja.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Karte. Mische dein Deck und lege anschließend jene Karte darauf.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Cerca nel tuo mazzo una carta. Rimischia il tuo mazzo, poi metti quella carta in cima al mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Procure por 1 carta no seu baralho. Embaralhe o seu baralho e, em seguida, coloque aquela carta como a carta de cima do seu baralho."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Sound Wave",
			fr: "Onde Sonore Toxique",
			es: "Onda Sónica Venenosa",
			'es-mx': "Onda Sónica Venenosa",
			de: "Gift-Schallwelle",
			it: "Onda Sonora Velenosa",
			pt: "Vibração Venenosa"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado."
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
			type: "holo"
		}
	]
}

export default card
