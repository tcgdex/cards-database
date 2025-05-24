import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mist Float",
			fr: "Flottaison Brume",
			es: "Flotación Nebulosa",
			it: "Salvagente Nebbioso",
			pt: "Névoa Flutuante",
			de: "Gischtgleiter"
		},

		effect: {
			en: "If this Pokémon has any {P} Energy attached, it has no Retreat Cost.",
			fr: "Si au moins une Énergie {P} est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon tiene alguna Energía {P} unida, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie {P} assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia {P} ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 {P}-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			de: "Psychosphäre"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "hncl"
}

export default card