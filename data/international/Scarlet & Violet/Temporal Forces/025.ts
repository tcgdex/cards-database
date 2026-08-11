import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1010],
	set: Set,

	name: {
		'en-us': "Iron Leaves ex",
		'fr-fr': "Vert-de-Fer-ex",
		'es-es': "Ferroverdor ex",
		'it-it': "Fogliaferrea-ex",
		'pt-br': "Folhas Férreas ex",
		'de-de': "Eisenblatt-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rapid Vernier",
			'fr-fr': "Vernier Rapide",
			'es-es': "Propulsor Vernier",
			'it-it': "Propulsore Vernier",
			'pt-br': "Agilidade Vernier",
			'de-de': "Schnelle Justierung"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, you may move any amount of Energy from your other Pokémon to this Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l'échanger contre votre Pokémon Actif. Dans ce cas, vous pouvez déplacer autant d'Énergies que vous le voulez de vos autres Pokémon vers ce Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes cambiarlo por tu Pokémon Activo. Si lo haces, puedes mover cualquier cantidad de Energías de tus otros Pokémon a este Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scambiarlo con il tuo Pokémon attivo. Se lo fai, puoi spostare un numero qualsiasi di Energie dai tuoi altri Pokémon su questo Pokémon.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá trocá-lo pelo seu Pokémon Ativo. Se fizer isto, você poderá mover qualquer quantidade de Energia dos seus outros Pokémon para este Pokémon.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du es gegen dein Aktives Pokémon austauschen. Wenn du das machst, kannst du beliebig viele Energien von deinen anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Prism Edge",
			'fr-fr': "Lame Prisme",
			'es-es': "Filo Prisma",
			'it-it': "Lama Prisma",
			'pt-br': "Lâmina Prisma",
			'de-de': "Prismaklinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760655,
				tcgplayer: 542769
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card