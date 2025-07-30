import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [630],
	set: Set,

	name: {
		en: "Mandibuzz",
		fr: "Vaututrice",
		es: "Mandibuzz",
		it: "Mandibuzz",
		pt: "Mandibuzz",
		de: "Grypheldis"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		it: "Vullaby",
		pt: "Vullaby",
		de: "Skallyk"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		en: "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Bone Block",
			fr: "Blocage Osseux",
			de: "Knochenblockade",
			es: "Bloqueo Hueso",
			pt: "Bloqueio Ossudo",
			it: "Blocco Osseo"
		},

		damage: 20,

		effect: {
			en: "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, aucun Pokémon ne peut être joué de la main de votre adversaire sur le Pokémon Défenseur pour le faire évoluer.",
			de: "Während des nächsten Zuges deines Gegners können keine Pokémon aus der Hand deines Gegners gespielt werden, um das Verteidigende Pokémon zu entwickeln.",
			es: "Durante el próximo turno de tu rival, no se pueden jugar Pokémon de la mano de tu rival para hacer evolucionar al Pokémon Defensor.",
			pt: "Durante o próximo turno do seu oponente, Pokémon não poderão ser jogados da mão do seu oponente para evoluir o Pokémon Defensor.",
			it: "Durante il prossimo turno del tuo avversario, nessun Pokémon può essere giocato dalla mano del tuo avversario per far evolvere il Pokémon difensore."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			de: "Dunkler Zerschneider",
			es: "Cuchilla Oscura",
			pt: "Cortador de Escuridão",
			it: "Oscurotaglio"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582801
	}
}

export default card