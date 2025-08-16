import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [181],
	set: Set,

	name: {
		en: "Team Rocket's Ampharos",
		fr: "Pharamp de la Team Rocket",
		de: "Team Rockets Ampharos",
		it: "Ampharos del Team Rocket",
		es: "Ampharos del Team Rocket",
		pt: "Ampharos da Equipe Rocket",
		'es-mx': "Ampharos del Equipo Rocket"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Darkest Impulse",
			fr: "Impulsion des plus Obscures",
			de: "Dunkelster Impuls",
			it: "Impulso Oscuro",
			es: "Impulso Sombrío",
			pt: "Impulso Mais Sombrio",
			'es-mx': "Impulso Oscuro"
		},

		effect: {
			en: "Whenever your opponent plays a Pokémon from their hand to evolve 1 of their Pokémon, put 4 damage counters on that Pokémon. The effect of Darkest Impulse doesn't stack.",
			fr: "Chaque fois que votre adversaire joue un Pokémon de sa main pour faire évoluer l'un de ses Pokémon, placez 4 marqueurs de dégâts sur ce Pokémon-là. L'effet d'Impulsion des plus Obscures n'est pas cumulable.",
			de: "Lege jedes Mal, wenn dein Gegner 1 Pokémon aus seiner Hand spielt, um 1 seiner Pokémon zu entwickeln, 4 Schadensmarken auf jenes Pokémon. Der Effekt von Dunkelster Impuls stapelt sich nicht.",
			it: "Ogni volta che il tuo avversario gioca un Pokémon dalla sua mano per far evolvere uno dei suoi Pokémon, metti quattro segnalini danno su quel Pokémon. L'effetto di Impulso Oscuro non è cumulabile.",
			es: "Cada vez que tu rival juegue un Pokémon de su mano para hacer evolucionar a uno de sus Pokémon, pon 4 contadores de daño en ese Pokémon. El efecto de Impulso Sombrío no se acumula.",
			pt: "Sempre que seu oponente jogar um Pokémon da mão dele para evoluir 1 dos Pokémon dele, coloque 4 contadores de dano naquele Pokémon. O efeito de Impulso Mais Sombrio não acumula.",
			'es-mx': "Cada vez que tu rival juegue 1 Pokémon de su mano para hacer evolucionar a 1 de sus Pokémon, pon 4 contadores de daño en ese Pokémon. El efecto de Impulso Oscuro no se acumula."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			de: "Kopf-Blitz",
			it: "Zuccalampo",
			es: "Rayo de Cabeza",
			pt: "Raio de Cabeça",
			'es-mx': "Rayo Capital"
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card