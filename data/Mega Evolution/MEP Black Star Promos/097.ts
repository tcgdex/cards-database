import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		de: "Arktos",
		it: "Articuno",
		pt: "Articuno",
	},

	illustrator: "Taira Akitsu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",
	dexId: [144],

	abilities: [{
		type: "Ability",

		name: {
			en: "Frosty Flapping",
			fr: "Battements Givrés",
			es: "Aleteo Helador",
			de: "Frostkaltes Flattern",
			it: "Battito d'Ali Gelido",
			pt: "Asas Árticas",
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Zapdos in play, you may use this Ability. Attach a Basic {W} Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Sulfura et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {W} de base de votre main à ce Pokémon.",
			es: "Una vez durante tu turno, si tienes a Moltres y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía {W} Básica de tu mano a este Pokémon.",
			de: "Einmal während deines Zuges, wenn du Lavados und Zapdos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{W}-Energiekarte aus deiner Hand an dieses Pokémon an.",
			it: "Una sola volta durante il tuo turno, se hai Moltres e Zapdos in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base {W} dalla tua mano.",
			pt: "Uma vez durante o seu turno, se você tiver Moltres e Zapdos em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {W} Básica da sua mão a este Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Hail",
			fr: "Grêle",
			es: "Granizo",
			de: "Hagelsturm",
			it: "Grandine",
			pt: "Granizo",
		},

		effect: {
			en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			de: "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
		}
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Metal",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895607,
				tcgplayer: 713265
			}
		}
	],
}

export default card
