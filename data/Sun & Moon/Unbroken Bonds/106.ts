import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Stakataka",
		fr: "Ama-Ama",
		es: "Stakataka",
		it: "Stakataka",
		pt: "Stakataka",
		de: "Muramura"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		805,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wall of Stone",
				fr: "Mur de Pierres",
				es: "Muro de Piedra",
				it: "Muropietra",
				pt: "Muralha de Pedra",
				de: "Steinmauer"
			},
			effect: {
				en: "If your opponent has 3 or fewer Prize cards remaining, this Pokémon’s maximum HP is 200.",
				fr: "S’il reste 3 cartes Récompense ou moins à votre adversaire, les PV maximum de ce Pokémon sont de 200.",
				es: "Si a tu rival le quedan 3 o menos cartas de Premio, los PS máximos de este Pokémon son 200.",
				it: "Se il tuo avversario ha tre o meno carte Premio rimanenti, i PS massimi di questo Pokémon diventano 200.",
				pt: "Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, o PS máximo deste Pokémon será 200.",
				de: "Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, betragen die maximalen KP dieses Pokémon 200."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Top Down",
				fr: "Écras’Montagne",
				es: "Escalada",
				it: "Scalata",
				pt: "De Cima para Baixo",
				de: "Kopfüber"
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard the top card of your opponent’s deck.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
				es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
				it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
				pt: "Jogue 1 moeda até sair coroa. Para cada cara, descarte a primeira carta do baralho do seu oponente.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 372397
	}
}

export default card
