import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it."
	},

	name: {
		en: "Articuno",
		fr: "Artikodin",
		de: "Arktos",
		es: "Articuno",
		it: "Articuno",
		'es-mx': "Articuno"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [144],
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Frosty Flapping",
			fr: "Battements Givrés",
			de: "Frostkaltes Flattern",
			es: "Aleteo Helador",
			it: "Battito d'Ali Gelido",
			'es-mx': "Aleteo Congelante"
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Zapdos in play, you may use this Ability. Attach a Basic Water Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Sulfura et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie Water de base de votre main à ce Pokémon.",
			de: "Einmal während deines Zuges, wenn du Lavados und Zapdos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-Water-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Una vez durante tu turno, si tienes a Moltres y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía Water Básica de tu mano a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai Moltres e Zapdos in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base Water dalla tua mano.",
			'es-mx': "Una vez durante tu turno, si tienes Moltres y Zapdos en juego, puedes usar esta Habilidad. Une 1 carta de Energía Water Básica de tu mano a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hail",
			fr: "Grêle",
			de: "Hagelsturm",
			es: "Granizo",
			it: "Grandine",
			'es-mx': "Granizo"
		},

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. <em>(Don't apply Weakness and Resistance for Benched Pokémon.)</em>",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. <em>(N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)</em>",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. <em>(Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)</em>",
			es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca)</em>.",
			it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. <em>Non applicare debolezza e resistenza ai Pokémon in panchina</em>.",
			'es-mx': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. <em>(No apliques Debilidad y Resistencia a los Pokémon en Banca).</em>"
		},

		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907740,
				tcgplayer: 716220
			}
		}
	],
}

export default card