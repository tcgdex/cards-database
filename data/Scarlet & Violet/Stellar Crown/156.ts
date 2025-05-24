import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Hydrapple ex",
		fr: "Pomdorochi-ex",
		es: "Hydrapple ex",
		it: "Hydrapple-ex",
		pt: "Hydrapple ex",
		de: "Hydrapfel-ex"
	},

	rarity: "Ultra Rare",
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
			it: "Maturacarica",
			pt: "Investida Madura",
			de: "Reifende Aufladung"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic {G} Energy card from your hand to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {G} de base de votre main à l'un de vos Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez 30 dégâts de ce Pokémon-là.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon. Si has unido Energía a un Pokémon de esta manera, cura 30 puntos de daño a ese Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {G} dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da 30 danni.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon. Se você ligou Energia a um Pokémon desta forma, cure 30 pontos de dano daquele Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-{G}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile 30 Schadenspunkte bei jenem Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Syrup Storm",
			fr: "Tempête Nectar",
			es: "Tormenta en Almíbar",
			it: "Tempesta Sciroppata",
			pt: "Tempestade Melada",
			de: "Sirupsturm"
		},

		effect: {
			en: "This attack does 30 more damage for each {G} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {G} attachée à tous vos Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a cada uno de tus Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia {G} assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia {G} ligada a todos os seus Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte {G}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "5ban Graphics"
}

export default card
