import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		en: "Palafin ex",
		fr: "Superdofin-ex",
		es: "Palafin ex",
		pt: "Palafin ex",
		it: "Palafin-ex",
		de: "Delfinator-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hero's Spirit",
			fr: "Âme Héroïque",
			es: "Espíritu Heroico",
			pt: "Espírito de Herói",
			it: "Spirito dell'Eroe",
			de: "Superheldenmut"
		},

		effect: {
			en: "Put this Pokémon into play only with the effect of Palafin's Zero to Hero Ability.",
			fr: "Ce Pokémon ne peut être mis en jeu que par l'effet du talent Supermutation de Superdofin.",
			es: "Pon este Pokémon en juego solo con el efecto de la habilidad Cambio Heroico de Palafin.",
			pt: "Coloque este Pokémon em jogo somente com o efeito da Habilidade Do Abismo ao Heroísmo de Palafin.",
			it: "Metti questo Pokémon in gioco solo per effetto dell'abilità Supercambio di Palafin.",
			de: "Bringe dieses Pokémon nur mit dem Effekt von Delfinators Fähigkeit Superwechsel ins Spiel."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			pt: "Gigaimpacto",
			it: "Gigaimpatto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "Tetsuo Hara"
}

export default card