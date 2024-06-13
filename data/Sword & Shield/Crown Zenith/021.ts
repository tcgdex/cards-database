import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		en: "Entei",
		fr: "Entei",
		es: "Entei",
		it: "Entei",
		pt: "Entei",
		de: "Entei"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Explosive Heat Dash",
			fr: "Ruée Chaleur Explosive",
			es: "Carga Ardiente Explosiva",
			it: "Rogoscatto Esplosivo",
			pt: "Arremetida de Calor Explosiva",
			de: "Explosiver Hitzespurt"
		},

		effect: {
			en: "If this Pokémon has any Fire Energy attached, it has no Retreat Cost.",
			fr: "Si au moins une Énergie Fire est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon tiene alguna Energía Fire unida a él, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie Fire assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia Fire ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
