import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		es: "Ludicolo",
		'es-mx': "Ludicolo",
		de: "Kappalores",
		it: "Ludicolo",
		pt: "Ludicolo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [272],

	abilities: [{
		type: "Ability",

		name: {
			en: "Excited Heal",
			fr: "Soin Dynamique",
			es: "Impulso Curativo",
			'es-mx': "Curación Vibrante",
			de: "Begeisterte Heilung",
			it: "Fervorcura",
			pt: "Cura Animada"
		},

		effect: {
			en: "Once during your turn, if you have any {G} Mega Evolution Pokémon ex in play, you may use this Ability. Heal 60 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, si vous avez au moins un Pokémon-ex Méga-Évolution {G} en jeu, vous pouvez utiliser ce talent. Soignez 60 dégâts de l'un de vos Pokémon.",
			es: "Una vez durante tu turno, si tienes algún Pokémon ex Megaevolución {G} en juego, puedes usar esta habilidad. Cura 60 puntos de daño a uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, si tienes algún Pokémon ex Megaevolución {G} en juego, puedes usar esta Habilidad. Cura 60 puntos de daño a 1 de tus Pokémon.",
			de: "Einmal während deines Zuges, wenn du mindestens 1 {G}-Mega-Entwicklungs-Pokémon-ex im Spiel hast, kannst du diese Fähigkeit einsetzen. Heile 60 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Una sola volta durante il tuo turno, se hai dei Pokémon-ex Megaevoluzione {G} in gioco, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 60 danni.",
			pt: "Uma vez durante o seu turno, se você tiver algum Pokémon ex de Megaevolução {G} em jogo, você poderá usar esta Habilidade. Cure 60 pontos de dano de 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			'es-mx': "Embestida Brusca",
			de: "Sprungangriff",
			it: "Affondo Lungo",
			pt: "Bote"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		cardmarket: 857670,
		tcgplayer: 662180
	}
}

export default card