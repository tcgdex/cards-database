import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee ex",
		fr: "Évoli-ex",
		es: "Eevee ex",
		pt: "Eevee ex",
		it: "Eevee-ex",
		de: "Evoli-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rainbow DNA",
			fr: "ADN Arc-en-Ciel",
			es: "ADN Arcoíris",
			pt: "DNA Arco-íris",
			it: "DNA Arcobaleno",
			de: "Regenbogen-DNA"
		},

		effect: {
			en: "This Pokémon can evolve into any Pokémon ex that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
			fr: "Ce Pokémon peut évoluer en n'importe quel Pokémon-ex qui évolue d'Évoli, si vous le jouez de votre main sur ce Pokémon. (Ce Pokémon ne peut pas évoluer pendant votre premier tour ou pendant le tour où vous le jouez.)",
			es: "Este Pokémon puede evolucionar a cualquier Pokémon ex que evolucione de Eevee si pones en juego ese Pokémon ex sobre este Pokémon desde tu mano. (Este Pokémon no puede evolucionar durante tu primer turno ni durante el turno en que lo pongas en juego).",
			pt: "Este Pokémon poderá evoluir para qualquer Pokémon ex que evolua de Eevee se você jogar aquele Pokémon ex da sua mão sobre este Pokémon. (Este Pokémon não poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.)",
			it: "Questo Pokémon può evolversi in qualsiasi Pokémon-ex che si evolve da Eevee, se giochi quel Pokémon-ex dalla tua mano mettendolo sopra questo Pokémon. Questo Pokémon non può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			de: "Dieses Pokémon kann sich zu einem beliebigen Pokémon-ex entwickeln, das sich aus Evoli entwickelt, wenn du es aus deiner Hand auf dieses Pokémon spielst. (Dieses Pokémon kann sich während deines ersten Zuges oder während des Zuges, in dem du es spielst, nicht entwickeln.)"
		}
	}],

	attacks: [{
		cost: ["Fire", "Water", "Lightning"],

		name: {
			en: "Coruscating Quartz",
			fr: "Quartz Scintillant",
			es: "Cuarzo Brillante",
			pt: "Quartzo Cintilante",
			it: "Quarzo Scintillante",
			de: "Funkelnder Quarz"
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 805465
	}
}

export default card