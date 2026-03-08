import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		de: "Enton",
		it: "Psyduck",
		es: "Psyduck",
		pt: "Psyduck"
	},

	illustrator: "Jiro Sasumo",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [54],

	abilities: [{
		type: "Ability",

		name: {
			en: "Damp",
			fr: "Moiteur",
			de: "Feuchtigkeit",
			it: "Umidità",
			es: "Humedad",
			pt: "Umidade"
		},

		effect: {
			en: "Pokémon in play (both yours and your opponent's) lose all Abilities that require those Pokémon to be Knocked Out.",
			fr: "Les Pokémon en jeu (les vôtres et ceux de votre adversaire) perdent tout talent qui demande au Pokémon l'utilisant de se mettre K.O.",
			de: "Pokémon im Spiel (deine und die deines Gegners) verlieren alle Fähigkeiten, die erfordern, dass diese Pokémon kampfunfähig gemacht werden.",
			it: "I Pokémon in gioco (sia tuoi che del tuo avversario) perdono tutte le abilità che richiedono che quei Pokémon vengano messi KO.",
			es: "Los Pokémon en juego (tanto tuyos como de tu rival) pierden todas las habilidades que requieren que esos Pokémon sean Fuera de Combate.",
			pt: "Os Pokémon em jogo (tanto seus quanto do seu oponente) perdem todas as Habilidades que exigem que esses Pokémon sejam Nocauteados."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Collision",
			fr: "Collision",
			de: "Kollision",
			it: "Collisione",
			es: "Colisión",
			pt: "Colisão"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 656257,
		cardmarket: 851053
	},
	variants: [
		{
			type: "holo",
		}
	]
}

export default card

