import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [181],
	set: Set,

	name: {
		'en-us': "Team Rocket's Ampharos",
		'fr-fr': "Pharamp de la Team Rocket",
		'de-de': "Team Rockets Ampharos",
		'it-it': "Ampharos del Team Rocket",
		'es-es': "Ampharos del Team Rocket",
		'pt-br': "Ampharos da Equipe Rocket",
		'es-mx': "Ampharos del Equipo Rocket"
	},


	illustrator: "Shiburingaru",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Team Rocket's Flaaffy",
		'fr-fr': "Lainergie de la Team Rocket",
		'de-de': "Team Rockets Waaty",
		'it-it': "Flaaffy del Team Rocket",
		'es-es': "Flaaffy del Team Rocket",
		'pt-br': "Flaaffy da Equipe Rocket",
		'es-mx': "Flaaffy del Equipo Rocket"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Darkest Impulse",
			'fr-fr': "Impulsion des plus Obscures",
			'de-de': "Dunkelster Impuls",
			'it-it': "Impulso Oscuro",
			'es-es': "Impulso Sombrío",
			'pt-br': "Impulso Mais Sombrio",
			'es-mx': "Impulso Oscuro"
		},

		effect: {
			'en-us': "Whenever your opponent plays a Pokémon from their hand to evolve 1 of their Pokémon, put 4 damage counters on that Pokémon. The effect of Darkest Impulse doesn't stack.",
			'fr-fr': "Chaque fois que votre adversaire joue un Pokémon de sa main pour faire évoluer l'un de ses Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là. L'effet d'Impulsion des plus Obscures n'est pas cumulable.",
			'de-de': "Lege jedes Mal, wenn dein Gegner 1 Pokémon aus seiner Hand spielt, um 1 seiner Pokémon zu entwickeln, 4 Schadensmarken auf jenes Pokémon. Der Effekt von Dunkelster Impuls stapelt sich nicht.",
			'it-it': "Ogni volta che il tuo avversario gioca un Pokémon dalla sua mano per far evolvere uno dei suoi Pokémon, metti quattro segnalini danno su quel Pokémon. L'effetto di Impulso Oscuro non è cumulabile.",
			'es-es': "Cada vez que tu rival juegue un Pokémon de su mano para hacer evolucionar a uno de sus Pokémon, pon 4 contadores de daño en ese Pokémon. El efecto de Impulso Sombrío no se acumula.",
			'pt-br': "Sempre que seu oponente jogar um Pokémon da mão dele para evoluir 1 dos Pokémon dele, coloque 4 contadores de dano naquele Pokémon. O efeito de Impulso Mais Sombrio não acumula.",
			'es-mx': "Cada vez que tu rival juegue 1 Pokémon de su mano para hacer evolucionar a 1 de sus Pokémon, pon 4 contadores de daño en ese Pokémon. El efecto de Impulso Oscuro no se acumula."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'de-de': "Kopf-Blitz",
			'it-it': "Zuccalampo",
			'es-es': "Rayo de Cabeza",
			'pt-br': "Raio de Cabeça",
			'es-mx': "Rayo Capital"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825948,
				tcgplayer: 632884
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825948,
				tcgplayer: 632884
			}
		},
	],
}

export default card
