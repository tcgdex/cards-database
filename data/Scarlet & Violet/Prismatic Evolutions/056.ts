import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Sandy Shocks ex",
		fr: "Pelage-Sablé-ex",
		es: "Pelarena ex",
		pt: "Choque Areia ex",
		it: "Peldisabbia-ex",
		de: "Sandfell-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Magnetic Absorption",
			fr: "Absorption Magnétique",
			es: "Absorción Magnética",
			pt: "Absorção Magnética",
			it: "Assorbimento Magnetico",
			de: "Magnetische Absorption"
		},

		effect: {
			en: "Once during your turn, if your opponent has 4 or fewer Prize cards remaining, you may attach a Basic {F} Energy card from your discard pile to this Pokémon.",
			fr: "Une fois pendant votre tour, s'il reste 4 cartes Récompense ou moins à votre adversaire, vous pouvez attacher une carte Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			es: "Una vez durante tu turno, si a tu rival le quedan 4 cartas de Premio o menos, puedes unir 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			pt: "Uma vez durante o seu turno, se o seu oponente tiver 4 ou menos cartas de Prêmio restantes, você poderá ligar uma carta de Energia {F} Básica da sua pilha de descarte a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se il tuo avversario ha quattro o meno carte Premio rimanenti, puoi assegnare a questo Pokémon una carta Energia base {F} dalla tua pila degli scarti.",
			de: "Einmal während deines Zuges, wenn dein Gegner 4 oder weniger verbleibende Preiskarten hat, kannst du 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthen Spike",
			fr: "Piquant Terrestre",
			es: "Púas Terrestres",
			pt: "Espinho Terrestre",
			it: "Terrapunta",
			de: "Irdendorn"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "PLANETA Mochizuki",

	thirdParty: {
		cardmarket: 805445
	}
}

export default card