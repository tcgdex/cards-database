import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		es: "Farfetch'd",
		it: "Farfetch'd",
		pt: "Farfetch'd",
		de: "Porenta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Impromptu Carrier",
			fr: "Transporteur Improvisé",
			es: "Reparto Sorpresa",
			it: "Corriere Improvvisato",
			pt: "Transporte Improvisado",
			de: "Spontaner Träger"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Pokémon Tool card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, puis l'attacher à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon y unirla a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon e assegnarla a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por uma carta de Ferramenta Pokémon no seu baralho e ligá-la a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mach Cut",
			fr: "Coupe Vive",
			es: "Corte Mach",
			it: "Taglio Mach",
			pt: "Corte Supersônico",
			de: "Schallschnitt"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card