import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
		es: "Dragonite",
		it: "Dragonite",
		pt: "Dragonite",
		de: "Dragoran"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
		es: "Dragonair",
		it: "Dragonair",
		pt: "Dragonair",
		de: "Dragonir"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Max Wind",
				fr: "Vent Max",
				es: "Viento Máximo",
				it: "Ventoforte",
				pt: "Vento Máximo",
				de: "Top-Wind"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may heal all damage from 1 of your Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez soigner tous les dégâts de l'un de vos Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes curar todos los puntos de daño a 1 de tus Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi curare uno dei tuoi Pokémon da tutti i danni.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode curar todos os danos de 1 dos seus Pokémon.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du alle Schadenspunkte bei 1 deiner Pokémon heilen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mach Press",
				fr: "Mach Press",
				es: "Presión Mach",
				it: "Pressa Mach",
				pt: "Aperto Supersônico",
				de: "Tempo-Druckstoß"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 2 monedas. Si ambas son cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 2 moedas. Se ambas forem cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 2 Münzen. Zeigen beide \"Kopf\", ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
