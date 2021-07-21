import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Never Give Up",
				fr: "Persistance",
				es: "Nunca Rendirse",
				it: "Mai Arrendersi",
				pt: "Nunca Desista",
				de: "Niemals aufgeben"
			},
			effect: {
				en: "You can use this attack only if you have at least 3 more Prize cards remaining than your opponent. Attach all Lightning Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Vous ne pouvez utiliser cette attaque que s’il vous reste au moins 3 cartes Récompense de plus qu’à votre adversaire. Attachez toutes les cartes Énergie Lightning de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
				es: "Puedes usar este ataque solo si te quedan por lo menos 3 cartas de Premio más que a tu rival. Une todas las cartas de Energía Lightning de tu pila de descartes a tus Pokémon de la manera que desees.",
				it: "Puoi usare questo attacco solo se hai almeno tre carte Premio rimanenti più del tuo avversario. Assegna a piacimento ai tuoi Pokémon tutte le carte Energia Lightning dalla tua pila degli scarti.",
				pt: "Você só pode usar este ataque se tiver pelo menos 3 cartas de Prêmio restantes a mais do que seu oponente. Ligue todas as cartas de Energia Lightning da sua pilha de descarte aos seus Pokémon como desejar.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du mindestens 3 verbleibende Preiskarten mehr hast als dein Gegner. Lege alle Lightning-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Raio de Cabeça",
				de: "Kopf-Blitz"
			},

			damage: 110,

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



}

export default card
