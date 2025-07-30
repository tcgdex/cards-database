import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		en: "Goodra",
		fr: "Muplodocus",
		es: "Goodra",
		it: "Goodra",
		pt: "Goodra",
		de: "Viscogon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus",
		es: "Sliggoo",
		it: "Sliggoo",
		pt: "Sliggoo",
		de: "Viscargot"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Nagomi Nijo",

	description: {
		en: "Its form of offense is forcefully stretching out its horns. The strikes land 100 times harder than any blow from a heavyweight boxer."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Slimy Room",
			fr: "Zone Gluante",
			de: "Glitschiger Raum",
			es: "Área Viscosa",
			pt: "Recinto Gosmento",
			it: "Zona Viscida"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent tries to attach an Energy card from their hand to a Pokémon, they must flip a coin. If tails, your opponent discards that Energy card instead of attaching it, and this doesn't use up their Energy attachment for the turn.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que votre adversaire essaie d'attacher une carte Énergie de sa main à un Pokémon, il doit lancer une pièce. Si c'est pile, votre adversaire défausse cette carte Énergie au lieu de l'attacher mais peut encore attacher une Énergie pour ce tour.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, muss dein Gegner jedes Mal, wenn er versucht, 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anzulegen, 1 Münze werfen. Bei Zahl legt dein Gegner jene Energiekarte stattdessen auf seinen Ablagestapel. Dadurch wird seine Energieanlegung für den Zug nicht verbraucht.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que tu rival intente unir 1 carta de Energía de su mano a 1 Pokémon, debe lanzar 1 moneda. Si sale cruz, tu rival descarta esa carta de Energía en vez de unirla, y esto no cuenta como su carta de Energía a unir por turno.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que seu oponente tentar ligar 1 carta de Energia da própria mão a 1 Pokémon, ele(a) deverá jogar uma moeda. Se sair coroa, o seu oponente descartará aquela carta de Energia ao invés de ligá-la ao Pokémon, e isto não gastará a vez de ligar Energia do turno dele(a).",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che il tuo avversario prova ad assegnare a uno dei suoi Pokémon una carta Energia dalla sua mano, deve lanciare una moneta. Se esce croce, il tuo avversario scarta quella carta Energia invece di assegnarla e non esaurisce la sua assegnazione di Energia per il turno."
		}
	}],

	attacks: [{
		cost: ["Water", "Psychic"],

		name: {
			en: "Buster Tail",
			fr: "Queue Destructrice",
			de: "Zertrümmernder Schweif",
			es: "Cola Destructora",
			pt: "Cauda Aniquiladora",
			it: "Coda Distruttrice"
		},

		damage: 120
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582871
	}
}

export default card