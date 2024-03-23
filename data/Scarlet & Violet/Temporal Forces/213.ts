import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Leaves ex",
		fr: "Vert-de-Fer-ex",
		es: "Ferroverdor ex",
		it: "Fogliaferrea-ex",
		pt: "Folhas Férreas ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Vernier",
			fr: "Vernier Rapide",
			es: "Propulsor Vernier",
			it: "Propulsore Vernier",
			pt: "Agilidade Vernier"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, you may move any amount of Energy from your other Pokémon to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l'échanger contre votre Pokémon Actif. Dans ce cas, vous pouvez déplacer autant d'Énergies que vous le voulez de vos autres Pokémon vers ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiarlo por tu Pokémon Activo. Si lo haces, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, puoi spostare un numero qualsiasi di Energie dai tuoi altri Pokémon su questo Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isto, você poderá mover qualquer quantidade de Energia dos seus outros Pokémon para este Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Prism Edge",
			fr: "Lame Prisme",
			es: "Filo Prisma",
			it: "Lama Prisma",
			pt: "Lâmina Prisma"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card