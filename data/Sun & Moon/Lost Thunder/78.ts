import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ampharos",
		fr: "Pharamp",
		es: "Ampharos",
		it: "Ampharos",
		pt: "Ampharos",
		de: "Ampharos"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Flaaffy",
		fr: "Lainergie",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unseen Flash",
				fr: "Flash Invisible",
				es: "Destello Oculto",
				it: "Bagliore Perduto",
				pt: "Clarão Oculto",
				de: "Unbemerkter Blitz"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 Lightning Energy cards from your hand in the Lost Zone. If you do, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 cartes Énergie Lightning de votre main dans la Zone Perdue. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 2 cartas de Energía Lightning de tu mano en la Zona Perdida. Si lo haces, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere due carte Energia Lightning dalla tua mano e metterle nell’area perduta. Se lo fai, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 2 cartas de Energia Lightning da sua mão na Zona Perdida. Se fizer isto, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 2 Lightning-Energiekarten aus deiner Hand ins Nirgendwo legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Split Bomb",
				fr: "Bombe Fendante",
				es: "Bomba Separada",
				it: "Squarciabomba",
				pt: "Bomba Dividida",
				de: "Splitterbombe"
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365716
	}
}

export default card
