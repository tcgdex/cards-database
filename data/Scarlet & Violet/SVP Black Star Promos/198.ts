import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [888],
	set: Set,

	name: {
		en: "Zacian ex",
		fr: "Zacian-ex",
		de: "Zacian-ex",
		es: "Zacian ex",
		it: "Zacian-ex",
		pt: "Zacian ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Steel Armament",
			fr: "Artillerie d'Acier",
			de: "Stahlrüstung",
			es: "Armamento de Acero",
			it: "Dotazione d'Acciaio",
			pt: "Armamento de Aço"
		},

		effect: {
			en: "Search your deck for a Basic {M} Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Énergie {M} de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Basis-{M}-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			es: "Busca en tu baraja 1 carta de Energía {M} Básica y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base {M} e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Energia {M} Básica no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho."
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
			de: "Schlitzender Schlag",
			es: "Golpe Cuchillazo",
			it: "Lacerattacco",
			pt: "Ataque Cortante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Ataque Cortante."
		},

		damage: 210
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card