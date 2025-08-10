import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [1010],
	set: Set,

	name: {
		en: "Iron Leaves ex",
		fr: "Vert-de-Fer-ex",
		es: "Ferroverdor ex",
		pt: "Folhas Férreas ex",
		it: "Fogliaferrea-ex",
		de: "Eisenblatt-ex"
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
			pt: "Agilidade Vernier",
			it: "Propulsore Vernier",
			de: "Schnelle Justierung"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, you may move any amount of Energy from your other Pokémon to this Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l'échanger contre votre Pokémon Actif. Dans ce cas, vous pouvez déplacer autant d'Énergies que vous le voulez de vos autres Pokémon vers ce Pokémon.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiarlo por tu Pokémon Activo. Si lo haces, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isto, você poderá mover qualquer quantidade de Energia dos seus outros Pokémon para este Pokémon.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, puoi spostare un numero qualsiasi di Energie dai tuoi altri Pokémon su questo Pokémon.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Prism Edge",
			fr: "Lame Prisme",
			es: "Filo Prisma",
			pt: "Lâmina Prisma",
			it: "Lama Prisma",
			de: "Prismaklinge"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "5ban Graphics"
}

export default card