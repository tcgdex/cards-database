import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Moltres",
		fr: "Sulfura",
		es: "Moltres",
		de: "Lavados",
		it: "Moltres",
		pt: "Moltres",
	},

	illustrator: "Krgc",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",
	dexId: [146],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fiery Flapping",
			fr: "Battements Ardents",
			es: "Aleteo Abrasador",
			de: "Feuriges Flattern",
			it: "Battito d'Ali Infuocato",
			pt: "Asas Abrasadoras",
		},

		effect: {
			en: "Once during your turn, if you have Articuno and Zapdos in play, you may use this Ability. Attach a Basic {R} Energy card from your hand to this Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez Artikodin et Électhor en jeu, vous pouvez utiliser ce talent. Attachez une carte Énergie {R} de base de votre main à ce Pokémon.",
			es: "Una vez durante tu turno, si tienes a Articuno y a Zapdos en juego, puedes usar esta habilidad. Une 1 carta de Energía {R} Básica de tu mano a este Pokémon.",
			de: "Einmal während deines Zuges, wenn du Arktos und Zapdos im Spiel hast, kannst du diese Fähigkeit einsetzen. Lege 1 Basis-{R}-Energiekarte aus deiner Hand an dieses Pokémon an.",
			it: "Una sola volta durante il tuo turno, se hai Articuno e Zapdos in gioco, puoi usare questa abilità. Assegna a questo Pokémon una carta Energia base {R} dalla tua mano.",
			pt: "Uma vez durante o seu turno, se você tiver Articuno e Zapdos em jogo, você poderá usar esta Habilidade. Ligue uma carta de Energia {R} Básica da sua mão a este Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Fire Spin",
			fr: "Danse Flammes",
			es: "Giro Fuego",
			de: "Feuerwirbel",
			it: "Turbofuoco",
			pt: "Chama Furacão",
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895606,
				tcgplayer: 713264
			}
		}
	],
}

export default card
