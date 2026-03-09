import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		de: "Entoron",
		it: "Golduck",
		es: "Golduck",
		pt: "Golduck"
	},

	illustrator: "Jiro Sasumo",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	dexId: [55],

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
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			de: "Hydropumpe",
			it: "Idropompa",
			es: "Hidrobomba",
			pt: "Hidro Bomba"
		},

		damage: "60+",

		effect: {
			en: "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 656258,
		cardmarket: 851054
	},
	variants: [
		{
			type: "holo",
		}
	]
}

export default card

