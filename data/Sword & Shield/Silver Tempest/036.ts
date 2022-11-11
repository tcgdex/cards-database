import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ice Wing",
			fr: "Aile Glace",
			es: "Ala Gélida",
			it: "Alagelata",
			pt: "Asa de Gelo",
			de: "Frostschwinge"
		},

		damage: 20
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Wild Freeze",
			fr: "Gel Sauvage",
			es: "Congelación Salvaje",
			it: "Gelo Selvaggio",
			pt: "Congelamento Selvagem",
			de: "Wilder Frost"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself. Your opponent's Active Pokémon is now Paralyzed.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso. Il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo. O Pokémon Ativo do seu oponente agora está Paralisado.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card