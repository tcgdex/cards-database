import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Hydrapple ex",
		fr: "Pomdorochi-ex",
		es: "Hydrapple ex",
		pt: "Hydrapple ex",
		it: "Hydrapple-ex",
		de: "Hydrapfel-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ripening Charge",
			fr: "Charge Mûrissante",
			es: "Carga Maduración",
			pt: "Investida Madura",
			it: "Maturacarica",
			de: "Reifende Aufladung"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic Grass Energy card from your hand to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Grass de base de votre main à l'un de vos Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez 30 dégâts de ce Pokémon-là.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Grass Básica de tu mano a uno de tus Pokémon. Si has unido Energía a un Pokémon de esta manera, cura 30 puntos de daño a ese Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Grass Básica da sua mão a 1 dos seus Pokémon. Se você ligou Energia a um Pokémon desta forma, cure 30 pontos de dano daquele Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base Grass dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da 30 danni.",
			de: "Einmal während deines Zuges kannst du 1 Basis-Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile 30 Schadenspunkte bei jenem Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Syrup Storm",
			fr: "Tempête Nectar",
			es: "Tormenta en Almíbar",
			pt: "Tempestade Melada",
			it: "Tempesta Sciroppata",
			de: "Sirupsturm"
		},

		effect: {
			en: "This attack does 30 more damage for each Grass Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Grass attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Grass unida a cada uno de tus Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Grass ligada a todos os seus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Grass assegnata ai tuoi Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Grass-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card