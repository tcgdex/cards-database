import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		en: "Team Rocket's Weezing",
		fr: "Smogogo de la Team Rocket",
		de: "Team Rockets Smogmog",
		it: "Weezing del Team Rocket",
		es: "Weezing del Team Rocket",
		pt: "Weezing da Equipe Rocket",
		'es-mx': "Weezing del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		en: "Team Rocket's Koffing",
		fr: "Smogo de la Team Rocket",
		de: "Team Rockets Smogon",
		it: "Koffing del Team Rocket",
		es: "Koffing del Team Rocket",
		pt: "Koffing da Equipe Rocket",
		'es-mx': "Koffing del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Explode Together Now",
			fr: "Explosion Groupée",
			de: "Gemeinsam explodieren – jetzt!",
			it: "Esplosione Congiunta",
			es: "Explotemos Juntos",
			pt: "Explodir Juntos Agora",
			'es-mx': "Explotemos Ya"
		},

		effect: {
			en: "This attack does 40 damage for each Pokémon in play that has \"Koffing\" or \"Weezing\" in its name (both yours and your opponent's).",
			fr: "Cette attaque inflige 40 dégâts pour chaque Pokémon en jeu ayant \" Smogo \" ou \" Smogogo \" dans son nom (les vôtres et ceux de votre adversaire).",
			de: "Diese Attacke fügt für jedes Pokémon im Spiel (deine und die deines Gegners), bei dem \"Smogon\" oder \"Smogmog\" zum Namen gehört, 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni Pokémon in gioco che ha \"Koffing\" o \"Weezing\" nel nome, sia tuo che del tuo avversario.",
			es: "Este ataque hace 40 puntos de daño por cada Pokémon en juego que tenga \"Koffing\" o \"Weezing\" en su nombre (tanto tuyos como de tu rival).",
			pt: "Este ataque causa 40 pontos de dano para cada Pokémon em jogo que tenha \"Koffing\" ou \"Weezing\" em seu nome (seus e do seu oponente).",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Pokémon en juego que tenga \"Koffing\" o \"Weezing\" en su nombre (tanto tuyos como de tu rival)."
		},

		damage: "40×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
