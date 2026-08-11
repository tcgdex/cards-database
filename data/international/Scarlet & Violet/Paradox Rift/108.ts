import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [989],
	set: Set,

	name: {
		'en-us': "Sandy Shocks ex",
		'fr-fr': "Pelage-Sablé-ex",
		'es-es': "Pelarena ex",
		'it-it': "Peldisabbia-ex",
		'pt-br': "Choque Areia ex",
		'de-de': "Sandfell-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Magnetic Absorption",
			'fr-fr': "Absorption Magnétique",
			'es-es': "Absorción Magnética",
			'it-it': "Assorbimento Magnetico",
			'pt-br': "Absorção Magnética",
			'de-de': "Magnetische Absorption"
		},

		effect: {
			'en-us': "Once during your turn, if your opponent has 4 or fewer Prize cards remaining, you may attach a Basic {F} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Une fois pendant votre tour, s'il reste 4 cartes Récompense ou moins à votre adversaire, vous pouvez attacher une carte Énergie {F} de base de votre pile de défausse à ce Pokémon.",
			'es-es': "Una vez durante tu turno, si a tu rival le quedan 4 cartas de Premio o menos, puedes unir 1 carta de Energía {F} Básica de tu pila de descartes a este Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, se il tuo avversario ha quattro o meno carte Premio rimanenti, puoi assegnare a questo Pokémon una carta Energia base {F} dalla tua pila degli scarti.",
			'pt-br': "Uma vez durante o seu turno, se o seu oponente tiver 4 ou menos cartas de Prêmio restantes, você poderá ligar uma carta de Energia {F} Básica da sua pilha de descarte a este Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn dein Gegner 4 oder weniger verbleibende Preiskarten hat, kannst du 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an dieses Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Earthen Spike",
			'fr-fr': "Piquant Terrestre",
			'es-es': "Púas Terrestres",
			'it-it': "Terrapunta",
			'pt-br': "Espinho Terrestre",
			'de-de': "Irdendorn"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740625,
				tcgplayer: 523780,
				cardtrader: 265218
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Mochizuki",

	
}

export default card
