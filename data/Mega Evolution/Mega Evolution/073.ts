import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Hariyama",
		fr: "Hariyama",
		de: "Hariyama",
		it: "Hariyama",
		es: "Hariyama",
		pt: "Hariyama",
		'es-mx': "Hariyama"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",
	dexId: [297],

	abilities: [{
		type: "Ability",

		name: {
			en: "Heave-Ho Catcher",
			fr: "Attrape-Oh-Hisse",
			de: "Hauruckfänger",
			it: "Vigorcattura",
			es: "Grito Capturador",
			pt: "Pegador Mestre",
			'es-mx': "Grito Capturador"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Envoyez sur le Poste Actif l'un des Pokémon de Banc de votre adversaire.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Wild Press",
			fr: "Pression Sauvage",
			de: "Ungestümes Hämmern",
			it: "Pressa Selvaggia",
			es: "Presión Salvaje",
			pt: "Apertão Selvagem",
			'es-mx': "Prensa Salvaje"
		},

		effect: {
			en: "This Pokémon also does 70 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 70 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 70 danni a se stesso.",
			es: "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 70 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 70 puntos de daño a sí mismo."
		},

		damage: 210
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654412,
		cardmarket: 851144
	}
}

export default card