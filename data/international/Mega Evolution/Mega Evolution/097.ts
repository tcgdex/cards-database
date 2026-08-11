import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'de-de': "Tafforgita",
		'it-it': "Tinkatuff",
		'es-es': "Tinkatuff",
		'pt-br': "Tinkatuff",
		'es-mx': "Tinkatuff"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'de-de': "Forgita",
		'it-it': "Tinkatink",
		'es-es': "Tinkatink",
		'pt-br': "Tinkatink",
		'es-mx': "Tinkatink"
	},
	stage: "Stage1",
	dexId: [958],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Haphazard Hammer",
			'fr-fr': "Marteau Hasardeux",
			'de-de': "Ungestümer Hammer",
			'it-it': "Martello Imprevedibile",
			'es-es': "Martillo Súbito",
			'pt-br': "Martelo Aleatório",
			'es-mx': "Martillo Abrupto"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		}
	}],

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Light Punch",
			'fr-fr': "Poing Léger",
			'de-de': "Leichter Hieb",
			'it-it': "Pugnetto",
			'es-es': "Puño Ligero",
			'pt-br': "Soco de Luz",
			'es-mx': "Puño Ligero"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851168,
				tcgplayer: 654436
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851168,
				tcgplayer: 654436
			}
		},
	],
}

export default card
