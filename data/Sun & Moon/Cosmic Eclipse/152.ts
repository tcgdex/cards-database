import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		671,
	],
	hp: 130,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Picking",
				fr: "Cueillette de Fleurs",
				es: "Recogida de Flores",
				it: "Raccolta di Fiori",
				pt: "Colhendo Flores",
				de: "Blumenpflücken"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose 2 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into their deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes et les mélange avec son deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes elegir 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scegliere due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode escolher 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no próprio baralho.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 zufällige Karten aus der Hand deines Gegners wählen. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
				es: "Danza Pétalo",
				it: "Petalodanza",
				pt: "Dança das Pétalas",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 damage for each heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face. Ce Pokémon est maintenant Confus.",
				es: "Lanza 3 monedas. Este ataque hace 60 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				pt: "Jogue 3 moedas. Este ataque causa 60 pontos de dano para cada cara. Este Pokémon agora está Confuso.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
