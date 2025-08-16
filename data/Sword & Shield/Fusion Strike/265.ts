import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		en: "Chandelure VMAX",
		fr: "Lugulabre VMAX",
		es: "Chandelure VMAX",
		it: "Chandelure VMAX",
		pt: "Chandelure VMAX",
		de: "Skelabra VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Chandelure V",
		fr: "Lugulabre-V",
		es: "Chandelure V",
		it: "Chandelure-V",
		pt: "Chandelure V",
		de: "Skelabra-V"
	},

	stage: "VMAX",
	retreat: 2,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Shimmer",
			fr: "Scintillement Maudit",
			de: "Flimmernder Fluch",
			es: "Destello Maldito",
			pt: "Brilho Amaldiçoado",
			it: "Luccichio Maledetto"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon Tool cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Outil Pokémon de sa main.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon-Ausrüstungen aus seiner Hand spielen.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Herramienta Pokémon de su mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Ferramenta Pokémon da própria mão.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Oggetto Pokémon che ha in mano."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Max Poltergeist",
			fr: "Esprit Frappeuromax",
			de: "Dyna-Poltergeist",
			es: "Maxipoltergeist",
			pt: "Poltergeist Max",
			it: "Dynapoltergeist"
		},

		damage: "70×",

		effect: {
			en: "Your opponent reveals their hand. This attack does 70 damage for each Trainer card you find there.",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 70 dégâts pour chaque carte Dresseur que vous y trouvez.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 70 Schadenspunkte zu.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 70 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			pt: "Seu oponente revela a própria mão. Este ataque causa 70 pontos de dano para cada carta de Treinador que encontrar lá.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 70 danni per ogni carta Allenatore presente tra quelle carte."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card