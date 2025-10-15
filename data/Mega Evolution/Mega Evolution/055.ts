import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Kadabra",
		fr: "Kadabra",
		de: "Kadabra",
		it: "Kadabra",
		es: "Kadabra",
		pt: "Kadabra",
		'es-mx': "Kadabra"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psychic Draw",
			fr: "Pioche Psy",
			de: "Psycho-Ziehen",
			it: "Pesca Psichica",
			es: "Robo Psíquico",
			pt: "Compra Psíquica",
			'es-mx': "Robo Psíquico"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Draw 2 cards.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Piochez 2 cartes.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Ziehe 2 Karten.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Pesca due carte.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Roba 2 cartas.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Compre 2 cartas.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Roba 2 cartas."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			de: "Super-Psischlag",
			it: "Superpsico",
			es: "Superrayo Psi",
			pt: "Super-raio Psíquico",
			'es-mx': "Superpsicotrueno"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654394
	}
}

export default card