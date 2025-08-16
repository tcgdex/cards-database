import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [392],
	set: Set,

	name: {
		en: "Infernape",
		fr: "Simiabraz",
		es: "Infernape",
		it: "Infernape",
		pt: "Infernape",
		de: "Panferno"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pyro Dance",
			fr: "Danse Pyro",
			es: "Pirodanza",
			it: "Danza Infuocata",
			pt: "Dança Incendiária",
			de: "Pyrotanz"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic {R} Energy card, a Basic {F} Energy card, or 1 of each from your hand to your Pokémon in any way you like.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {R} de base, une carte Énergie {F} de base, ou une de chaque de votre main à vos Pokémon comme il vous plaît.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {R} Básica, 1 carta de Energía {F} Básica o 1 de cada una de tu mano a tus Pokémon de la manera que desees.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon una carta Energia base {R}, una carta Energia base {F} o entrambe dalla tua mano nel modo che preferisci.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {R} Básica, uma carta de Energia {F} Básica ou 1 de cada da sua mão aos seus Pokémon como desejar.",
			de: "Einmal während deines Zuges kannst du 1 Basis-{R}-Energiekarte, 1 Basis-{F}-Energiekarte oder von beiden 1 aus deiner Hand beliebig an deine Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Scorching Fire",
			fr: "Feu Infernal",
			es: "Fuego Abrasador",
			it: "Fuoco Ustionante",
			pt: "Fogo Ardente",
			de: "Versengendes Feuer"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			it: "Scarta un'Energia da questo Pokémon.",
			pt: "Descarte uma Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "Kazumasa Yasukuni"
}

export default card