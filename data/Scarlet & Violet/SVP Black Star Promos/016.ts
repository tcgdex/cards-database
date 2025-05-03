import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Ampharos ex",
		fr: "Pharamp-ex",
		es: "Ampharos ex",
		it: "Ampharos-ex",
		pt: "Ampharos ex",
		de: "Ampharos-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 60
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Thunderstrike Tail",
			fr: "Queue Foudroyante",
			es: "Cola Trueno",
			it: "Coda Fulminante",
			pt: "Cauda Trovoada",
			de: "Gewitterschweif"
		},

		effect: {
			en: "You may discard 2 Energy from this Pokémon to have this attack do 100 more damage.",
			fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon pour que cette attaque inflige 100 dégâts supplémentaires.",
			es: "Puedes descartar 2 Energías de este Pokémon para que este ataque haga 100 puntos de daño más.",
			it: "Puoi scartare due Energie da questo Pokémon per infliggere 100 danni in più con questo attacco.",
			pt: "Você pode descartar 2 Energias deste Pokémon para fazer este ataque causar 100 pontos de dano a mais.",
			de: "Du kannst 2 Energien von diesem Pokémon auf deinen Ablagestapel legen, sodass diese Attacke 100 Schadenspunkte mehr zufügt."
		},

		damage: "140+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card