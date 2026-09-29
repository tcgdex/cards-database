import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		de: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
	},

	illustrator: "SIE NANAHARA",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [145],

	abilities: [{
		type: "Ability",

		name: {
			en: "Flash-Pop Flapping",
			fr: "Battements Fulgurants",
			es: "Aleteo Chisporroteante",
			de: "Funkendes Flattern",
			it: "Battito d'Ali Folgorante",
			pt: "Asas Ampéricas",
		},

		effect: {
			en: "Once during your turn, if you have Moltres and Articuno in play, you may use this Ability. Attach a Basic {L} Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Sulfura et Artikodin en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {L} de base de votre main à ce Pokémon.",
			es: "Una vez durante tu turno, si tienes a Moltres y a Articuno en juego, puedes usar esta habilidad. Une 1 carta de Energía {L} Básica de tu mano a este Pokémon.",
			de: "Einmal während deines Zuges, wenn du Lavados und Arktos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{L}-Energiekarte aus deiner Hand an dieses Pokémon an.",
			it: "Una sola volta durante il tuo turno, se hai Moltres e Articuno in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base {L} dalla tua mano.",
			pt: "Uma vez durante o seu turno, se você tiver Moltres e Articuno em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {L} Básica da sua mão a este Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thundering Lightning",
			fr: "Foudre Fracassante",
			es: "Relámpago Atronador",
			de: "Donnernder Blitz",
			it: "Saetta Roboante",
			pt: "Relâmpago Trovejante",
		},

		effect: {
			en: "This Pokémon also does 60 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
		},

		damage: 210
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895608,
				tcgplayer: 713266
			}
		}
	],
}

export default card
