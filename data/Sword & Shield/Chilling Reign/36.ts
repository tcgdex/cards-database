import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Frost Over",
			fr: "Givre",
			es: "Escarcha Helada",
			it: "Raggelare",
			pt: "Cobertura Gélida",
			de: "Überfrieren"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Water dalla tua pila degli scarti.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá ligar 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Water-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		name: {
			en: "Crystal Breath",
			fr: "Souffle de Cristal",
			es: "Aliento Cristal",
			it: "Cristalspiro",
			pt: "Sopro de Cristal",
			de: "Kristallhauch"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 90,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card