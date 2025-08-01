import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [553],
	set: Set,

	name: {
		en: "Krookodile",
		fr: "Crocorible",
		es: "Krookodile",
		it: "Krookodile",
		pt: "Krookodile",
		de: "Rabigator"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Krokorok",
		fr: "Escroco",
		es: "Krokorok",
		it: "Krokorok",
		pt: "Krokorok",
		de: "Rokkaiman"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Bully of the Sands",
			fr: "Tyran des Sables",
			es: "Terror de las Arenas",
			it: "Tiranno del Deserto",
			pt: "Brutamonte das Areias",
			de: "Tyrann der Wüste"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard a random card from your opponent's hand. If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent's attack, you may discard a random card from your opponent's hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez défausser au hasard une carte de la main de votre adversaire. Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d'une attaque de votre adversaire, vous pouvez défausser au hasard une carte de la main de votre adversaire.",
			es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar 1 carta aleatoria de la mano de tu rival. Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, puedes descartar 1 carta aleatoria de la mano de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare una carta a caso dalla mano del tuo avversario. Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco dell'avversario, puoi scartare una carta a caso dalla mano del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá descartar 1 carta aleatória da mão do seu oponente. Se este Pokémon for o seu Pokémon Ativo e ele for Nocauteado pelo dano de um ataque do seu oponente, você poderá descartar 1 carta aleatória da mão do seu oponente.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel legen. Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, kannst du 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge",
			fr: "Damoclès",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682160
	}
}

export default card
