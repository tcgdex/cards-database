import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [964],
	set: Set,

	name: {
		en: "Palafin ex",
		fr: "Superdofin-ex",
		es: "Palafin ex",
		it: "Palafin-ex",
		pt: "Palafin ex",
		de: "Delfinator-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	evolveFrom: {
		en: "Finizen",
		fr: "Dofin",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Hero's Spirit",
			fr: "Âme Héroïque",
			es: "Espíritu Heroico",
			it: "Spirito dell'Eroe",
			pt: "Espírito de Herói",
			de: "Superheldenmut"
		},

		effect: {
			en: "Put this Pokémon into play only with the effect of Palafin's Zero to Hero Ability.",
			fr: "Ce Pokémon ne peut être mis en jeu que par l'effet du talent Supermutation de Superdofin.",
			es: "Pon este Pokémon en juego solo con el efecto de la habilidad Cambio Heroico de Palafin.",
			it: "Metti questo Pokémon in gioco solo per effetto dell'abilità Supercambio di Palafin.",
			pt: "Coloque este Pokémon em jogo somente com o efeito da Habilidade Do Abismo ao Heroísmo de Palafin.",
			de: "Bringe dieses Pokémon nur mit dem Effekt von Delfinators Fähigkeit Superwechsel ins Spiel."
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
			es: "Gigaimpacto",
			it: "Gigaimpatto",
			pt: "Gigaimpacto",
			de: "Gigastoß"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 250
	}],

	retreat: 2,
	regulationMark: "H",
	illustrator: "PLANETA Mochizuki"
}

export default card