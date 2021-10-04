import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		es: "Cinderace",
		it: "Cinderace",
		pt: "Cinderace",
		de: "Liberlo"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
		es: "Raboot",
		it: "Raboot",
		pt: "Raboot",
		de: "Kickerlo"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Libero",
				fr: "Libéro",
				es: "Líbero",
				it: "Libero",
				pt: "Líbero",
				de: "Libero"
			},
			effect: {
				en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may attach up to 2 Fire Energy cards from your discard pile to it.",
				fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez lui attacher jusqu’à 2 cartes Énergie Fire de votre pile de défausse.",
				es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes unirle hasta 2 cartas de Energía Fire de tu pila de descartes.",
				it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi assegnargli fino a due carte Energia Fire dalla tua pila degli scarti.",
				pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá ligar até 2 cartas de Energia Fire da sua pilha de descarte a ele.",
				de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du bis zu 2 Fire-Energiekarten aus deinem Ablagestapel an es anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Striker",
				fr: "But Enflammé",
				es: "Delantero Ígneo",
				it: "Cannoniere Ardente",
				pt: "Artilheiro em Chamas",
				de: "Feuerstürmer"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie da questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "It’s skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
	}
}

export default card
