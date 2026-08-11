import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [1019],
	set: Set,

	name: {
		'en-us': "Hydrapple ex",
		'fr-fr': "Pomdorochi-ex",
		'es-es': "Hydrapple ex",
		'it-it': "Hydrapple-ex",
		'pt-br': "Hydrapple ex",
		'de-de': "Hydrapfel-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dipplin",
		'fr-fr': "Pomdramour",
		'es-es': "Dipplin",
		'it-it': "Dipplin",
		'pt-br': "Dipplin",
		'de-de': "Sirapfel"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Ripening Charge",
			'fr-fr': "Charge Mûrissante",
			'es-es': "Carga Maduración",
			'it-it': "Maturacarica",
			'pt-br': "Investida Madura",
			'de-de': "Reifende Aufladung"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic {G} Energy card from your hand to 1 of your Pokémon. If you attached Energy to a Pokémon in this way, heal 30 damage from that Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie {G} de base de votre main à l'un de vos Pokémon. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez 30 dégâts de ce Pokémon-là.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía {G} Básica de tu mano a uno de tus Pokémon. Si has unido Energía a un Pokémon de esta manera, cura 30 puntos de daño a ese Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base {G} dalla tua mano. Se hai assegnato dell'Energia a un Pokémon in questo modo, cura quel Pokémon da 30 danni.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia {G} Básica da sua mão a 1 dos seus Pokémon. Se você ligou Energia a um Pokémon desta forma, cure 30 pontos de dano daquele Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-{G}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, heile 30 Schadenspunkte bei jenem Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Syrup Storm",
			'fr-fr': "Tempête Nectar",
			'es-es': "Tormenta en Almíbar",
			'it-it': "Tempesta Sciroppata",
			'pt-br': "Tempestade Melada",
			'de-de': "Sirupsturm"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {G} Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie {G} attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía {G} unida a cada uno de tus Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia {G} assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia {G} ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte {G}-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 786021,
				tcgplayer: 567472
			}
		},
	],

	suffix: "ex",
	illustrator: "Teeziro",

}

export default card
