import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		en: "Chandelure V",
		fr: "Lugulabre V",
		es: "Chandelure V",
		it: "Chandelure V",
		pt: "Chandelure V",
		de: "Skelabra V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Saki Hayashiro",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
			de: "Konfusstrahl",
			es: "Rayo Confuso",
			pt: "Raio da Confusão",
			it: "Stordiraggio"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Poltergeist",
			fr: "Esprit Frappeur",
			de: "Poltergeist",
			es: "Poltergeist",
			pt: "Poltergeist",
			it: "Poltergeist"
		},

		damage: "40×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 40 damage for each Trainer card you find there.",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 40 dégâts pour chaque carte Dresseur que vous y trouvez.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 40 Schadenspunkte zu.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 40 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			pt: "Seu oponente revela a própria mão. Este ataque causa 40 pontos de dano para cada carta de Treinador que encontrar lá.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 40 danni per ogni carta Allenatore presente tra quelle carte."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582173,
		tcgplayer: 253141
	}
}

export default card