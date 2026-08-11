import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alakazam",
		'fr-fr': "Alakazam",
		'de-de': "Simsala",
		'it-it': "Alakazam",
		'es-es': "Alakazam",
		'pt-br': "Alakazam",
		'es-mx': "Alakazam"
	},

	evolveFrom: {
		'en-us': "Kadabra",
		'fr-fr': "Kadabra",
		'de-de': "Kadabra",
		'it-it': "Kadabra",
		'es-es': "Kadabra",
		'pt-br': "Kadabra",
		'es-mx': "Kadabra",
	},

	illustrator: "cochi8i",
	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",
	dexId: [65],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psychic Draw",
			'fr-fr': "Pioche Psy",
			'de-de': "Psycho-Ziehen",
			'it-it': "Pesca Psichica",
			'es-es': "Robo Psíquico",
			'pt-br': "Compra Psíquica",
			'es-mx': "Robo Psíquico"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Draw 3 cards.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Piochez 3 cartes.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Ziehe 3 Karten.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Pesca tre carte.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Roba 3 cartas.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Compre 3 cartas.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Roba 3 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Powerful Hand",
			'fr-fr': "Main Puissante",
			'de-de': "Mächtige Hand",
			'it-it': "Mano Potente",
			'es-es': "Mano Poderosa",
			'pt-br': "Mão Poderosa",
			'es-mx': "Poder de Mano"
		},

		effect: {
			'en-us': "Place 2 damage counters on your opponent's Active Pokémon for each card in your hand.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque carte dans votre main.",
			'de-de': "Lege für jede Karte auf deiner Hand 2 Schadensmarken auf das Aktive Pokémon deines Gegners.",
			'it-it': "Metti due segnalini danno sul Pokémon attivo del tuo avversario per ogni carta che hai in mano.",
			'es-es': "Pon 2 contadores de daño en el Pokémon Activo de tu rival por cada carta en tu mano.",
			'pt-br': "Coloque 2 contadores de dano no Pokémon Ativo do seu oponente para cada carta na sua mão.",
			'es-mx': "Pon 2 contadores de daño en el Pokémon Activo de tu rival por cada carta en tu mano."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Darkness",
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
				cardmarket: 851047,
				tcgplayer: 654597
			}
		},
		{
			type: "holo",
			stamp: ["set-logo","staff"],
			thirdParty: {
				cardmarket: 851048,
				tcgplayer: 656385
			}
		},
	],
}

export default card
