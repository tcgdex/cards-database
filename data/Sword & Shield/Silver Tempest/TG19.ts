import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Corviknight VMAX",
		fr: "Corvaillus VMAX",
		es: "Corviknight VMAX",
		it: "Corviknight VMAX",
		pt: "Corviknight VMAX",
		de: "Krarmor VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],

	evolveFrom: {
		en: "Corviknight V",
		fr: "Corvaillus-V",
		es: "Corviknight V",
		it: "Corviknight-V",
		pt: "Corviknight V",
		de: "Krarmor-V"
	},

	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lustrous Body",
			fr: "Corps Lustré",
			es: "Cuerpo Lustroso",
			it: "Splendicorpo",
			pt: "Corpo Lustroso",
			de: "Glänzender Körper"
		},

		effect: {
			en: "Prevent all effects of your opponent's Pokémon's Abilities done to this Pokémon.",
			fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			es: "Evita todos los efectos de las habilidades de los Pokémon de tu rival infligidos a este Pokémon.",
			it: "Previeni tutti gli effetti delle abilità dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			pt: "Previna todos os efeitos das Habilidades dos Pokémon do seu oponente causados a este Pokémon.",
			de: "Verhindere alle Effekte von Fähigkeiten der Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "G-Max Hurricane",
			fr: "Vent Violent G-Max",
			es: "Gigavendaval",
			it: "Gigatifone",
			pt: "Furacão G-Max",
			de: "Giga-Orkan"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use G-Max Hurricane.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vent Violent G-Max.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Gigavendaval.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigatifone.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Furacão G-Max.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Giga-Orkan nicht einsetzen."
		},

		damage: 240
	}],

	retreat: 0,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682283
	}
}

export default card
