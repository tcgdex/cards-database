import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [97],
	set: Set,

	name: {
		fr: "Hypnomade",
		en: "Hypno",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Soporifik",
		en: "Drowzee",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Hypnose Soudaine",
			en: "Here for Hypnosis",
			es: "Toma Hipnosis",
			it: "Pronta Ipnosi",
			pt: "Aqui para Hipnotizar",
			de: "Hypnosetermin"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Asleep.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Dormido.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario addormentato.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Adormecido.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners einschlafen lassen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			fr: "Super Psy",
			en: "Super Psy Bolt",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico",
			de: "Super-Psischlag"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mousho",

	thirdParty: {
		cardmarket: 733692
	}
}

export default card