import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama",
		'it-it': "Hariyama",
		'es-es': "Hariyama",
		'pt-br': "Hariyama",
		'es-mx': "Hariyama"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'de-de': "Makuhita",
		'it-it': "Makuhita",
		'es-es': "Makuhita",
		'pt-br': "Makuhita",
		'es-mx': "Makuhita"
	},
	stage: "Stage1",
	dexId: [297],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Heave-Ho Catcher",
			'fr-fr': "Attrape-Oh-Hisse",
			'de-de': "Hauruckfänger",
			'it-it': "Vigorcattura",
			'es-es': "Grito Capturador",
			'pt-br': "Pegador Mestre",
			'es-mx': "Grito Capturador"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Envoyez sur le Poste Actif l'un des Pokémon de Banc de votre adversaire.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Wild Press",
			'fr-fr': "Pression Sauvage",
			'de-de': "Ungestümes Hämmern",
			'it-it': "Pressa Selvaggia",
			'es-es': "Presión Salvaje",
			'pt-br': "Apertão Selvagem",
			'es-mx': "Prensa Salvaje"
		},

		effect: {
			'en-us': "This Pokémon also does 70 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 70 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 70 danni a se stesso.",
			'es-es': "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 70 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 70 puntos de daño a sí mismo."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851144,
				tcgplayer: 654412
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851144,
				tcgplayer: 654412
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851262,
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"]
		}
	],
}

export default card