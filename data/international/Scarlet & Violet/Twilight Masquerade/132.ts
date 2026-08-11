import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'es-es': "Farfetch'd",
		'it-it': "Farfetch'd",
		'pt-br': "Farfetch'd",
		'de-de': "Porenta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Impromptu Carrier",
			'fr-fr': "Transporteur Improvisé",
			'es-es': "Reparto Sorpresa",
			'it-it': "Corriere Improvvisato",
			'pt-br': "Transporte Improvisado",
			'de-de': "Spontaner Träger"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Pokémon Tool card and attach it to this Pokémon. Then, shuffle your deck.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, puis l'attacher à ce Pokémon. Mélangez ensuite votre deck.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon y unirla a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon e assegnarla a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por uma carta de Ferramenta Pokémon no seu baralho e ligá-la a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen und sie an dieses Pokémon anlegen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mach Cut",
			'fr-fr': "Coupe Vive",
			'es-es': "Corte Mach",
			'it-it': "Taglio Mach",
			'pt-br': "Corte Supersônico",
			'de-de': "Schallschnitt"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769306,
				tcgplayer: 550176
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769306,
				tcgplayer: 550176
			}
		},
	],

	illustrator: "miki kudo",

}

export default card