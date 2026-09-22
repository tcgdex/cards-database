import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds."
	},

	name: {
		en: "Zapdos",
		fr: "Électhor",
		de: "Zapdos",
		es: "Zapdos",
		it: "Zapdos",
		'es-mx': "Zapdos"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [145],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flash-Pop Flapping",
			fr: "Battements Fulgurants",
			de: "Funkendes Flattern",
			es: "Aleteo Chisporroteante",
			it: "Battito d'Ali Folgorante",
			'es-mx': "Aleteo Chispeante"
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Articuno in play, you may use this Ability. Attach a Basic Lightning Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Sulfura et Artikodin en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie Lightning de base de votre main à ce Pokémon.",
			de: "Einmal während deines Zuges, wenn du Lavados und Arktos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-Lightning-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Una vez durante tu turno, si tienes a Moltres y a Articuno en juego, puedes usar esta habilidad. Une 1 carta de Energía Lightning Básica de tu mano a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai Moltres e Articuno in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base Lightning dalla tua mano.",
			'es-mx': "Una vez durante tu turno, si tienes Moltres y Articuno en juego, puedes usar esta Habilidad. Une 1 carta de Energía Lightning Básica de tu mano a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Thundering Lightning",
			fr: "Foudre Fracassante",
			de: "Donnernder Blitz",
			es: "Relámpago Atronador",
			it: "Saetta Roboante",
			'es-mx': "Relámpago Atronador"
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			'es-mx': "Este Pokémon también se hace 60 puntos de daño a sí mismo."
		},

		damage: 210,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907662,
				tcgplayer: 716455
			}
		}
	],
}

export default card
