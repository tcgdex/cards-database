import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		en: "Garganacl",
		fr: "Gigansel",
		es: "Garganacl",
		it: "Garganacl",
		pt: "Garganacl",
		de: "Saltigant"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energizing Rock Salt",
			fr: "Halite Énergisante",
			es: "Halita Vigorizante",
			it: "Salgemma Energizzante",
			pt: "Pedra de Sal Energizante",
			de: "Energiespendendes Steinsalz"
		},

		effect: {
			en: "Once during your turn, you may attach a Basic {F} Energy card from your discard pile to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {F} de base de votre pile de défausse à l'un de vos Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez 30 dégâts de ce Pokémon-là.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía {F} Básica de tu pila de descartes a uno de tus Pokémon. Si has unido Energía a un Pokémon de esta manera, cura 30 puntos de daño a ese Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {F} dalla tua pila degli scarti. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da 30 danni.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {F} Básica da sua pilha de descarte a 1 dos seus Pokémon. Se você ligou Energia a um Pokémon desta forma, cure 30 pontos de dano daquele Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile 30 Schadenspunkte bei jenem Pokémon."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			pt: "Aperto de Terra",
			de: "Schollenbrecher"
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Souichirou Gunjima"
}

export default card