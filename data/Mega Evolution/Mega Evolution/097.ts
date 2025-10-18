import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatuff",
		fr: "Forgella",
		de: "Tafforgita",
		it: "Tinkatuff",
		es: "Tinkatuff",
		pt: "Tinkatuff",
		'es-mx': "Tinkatuff"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",
	dexId: [958],

	abilities: [{
		type: "Ability",

		name: {
			en: "Haphazard Hammer",
			fr: "Marteau Hasardeux",
			de: "Ungestümer Hammer",
			it: "Martello Imprevedibile",
			es: "Martillo Súbito",
			pt: "Martelo Aleatório",
			'es-mx': "Martillo Abrupto"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			it: "Pugnetto",
			es: "Puño Ligero",
			pt: "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654436
	}
}

export default card