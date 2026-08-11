import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		'en-us': "Froslass",
		'fr-fr': "Momartik",
		'es-es': "Froslass",
		'it-it': "Froslass",
		'pt-br': "Froslass",
		'de-de': "Frosdedje"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Frost Over",
			'fr-fr': "Givre",
			'es-es': "Escarcha Helada",
			'it-it': "Raggelare",
			'pt-br': "Cobertura Gélida",
			'de-de': "Überfrieren"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie Water de votre pile de défausse à l'un de vos Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Water dalla tua pila degli scarti.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Water-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Crystal Breath",
			'fr-fr': "Souffle de Cristal",
			'es-es': "Aliento Cristal",
			'it-it': "Cristalspiro",
			'pt-br': "Sopro de Cristal",
			'de-de': "Kristallhauch"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 90,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It spits out cold air of nearly −60 degrees Fahrenheit to freeze its quarry. It brings frozen prey back to its lair and neatly lines them up."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567116,
				tcgplayer: 241689
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567116,
				tcgplayer: 241689
			}
		},
	],
}

export default card
