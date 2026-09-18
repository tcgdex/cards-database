import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow."
	},

	name: {
		en: "Moltres",
		fr: "Sulfura",
		de: "Lavados",
		es: "Moltres",
		it: "Moltres",
		'es-mx': "Moltres"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [146],
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fiery Flapping",
			fr: "Battements Ardents",
			de: "Feuriges Flattern",
			es: "Aleteo Abrasador",
			it: "Battito d'Ali Infuocato",
			'es-mx': "Aleteo Calcinante"
		},

		effect: {
			en: "Once during your turn, if you have Articuno and Zapdos in play, you may use this Ability. Attach a Basic Fire Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Artikodin et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie Fire de base de votre main à ce Pokémon.",
			de: "Einmal während deines Zuges, wenn du Arktos und Zapdos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-Fire-Energiekarte aus deiner Hand an dieses Pokémon an.",
			es: "Una vez durante tu turno, si tienes a Articuno y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía Fire Básica de tu mano a este Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai Articuno e Zapdos in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base Fire dalla tua mano.",
			'es-mx': "Una vez durante tu turno, si tienes Articuno y Zapdos en juego, puedes usar esta Habilidad. Une 1 carta de Energía Fire Básica de tu mano a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			de: "Feuerwirbel",
			es: "Giro Fuego",
			it: "Turbofuoco",
			'es-mx': "Giro Fuego"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon."
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907617,
				tcgplayer: 716445
			}
		}
	],
}

export default card