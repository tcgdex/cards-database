import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Teal Mask Ogerpon ex",
		fr: "Ogerpon Masque Turquoise-ex",
		es: "Ogerpon Máscara Turquesa ex",
		it: "Ogerpon Maschera Turchese-ex",
		pt: "Ogerpon Máscara Turquesa ex",
		de: "Türkisgrüne-Maske-Ogerpon-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Teal Dance",
			fr: "Danse Turquoise",
			es: "Danza Turquesa",
			it: "Danza Turchese",
			pt: "Dança Turquesa",
			de: "Türkisgrüner Tanz"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Grass Energy card from your hand to this Pokémon. If you attached Energy to a Pokémon in this way, draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Grass de base de votre main à ce Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, piochez une carte.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Grass Básica de tu mano a este Pokémon. Si has unido Energía a un Pokémon de esta manera, roba 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a questo Pokémon una carta Energia base Grass dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, pesca una carta.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Grass Básica da sua mão a este Pokémon. Se você ligou Energia a um Pokémon desta forma, compre uma carta.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Grass-Energiekarte aus deiner Hand an dieses Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Myriad Leaf Shower",
			fr: "Pluie de Feuilles",
			es: "Lluvia de Hojas",
			it: "Miriade di Foglie Cadenti",
			pt: "Chuva Infinita de Folhas",
			de: "Laubschauer"
		},

		effect: {
			en: "This attack does 30 more damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía unida a ambos Pokémon Activos.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia ligada a ambos os Pokémon Ativos.",
			de: "Diese Attacke fügt für jede an beide Aktiven Pokémon angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card