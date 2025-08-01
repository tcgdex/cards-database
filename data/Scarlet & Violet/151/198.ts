import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		fr: "Florizarre-ex",
		en: "Venusaur ex",
		es: "Venusaur ex",
		it: "Venusaur-ex",
		pt: "Venusaur ex",
		de: "Bisaflor-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Fleur Paisible",
			en: "Tranquil Flower",
			es: "Flor Silente",
			it: "Calmafiore",
			pt: "Flor Serena",
			de: "Ruhige Blume"
		},

		effect: {
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez soigner 60 dégâts de l'un de vos Pokémon.",
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may heal 60 damage from 1 of your Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes curar 60 puntos de daño a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi curare uno dei tuoi Pokémon da 60 danni.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá curar 60 pontos de dano de 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 60 Schadenspunkte bei 1 deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Fouet Vénéneux",
			en: "Dangerous Toxwhip",
			es: "Toxilatigazo Peligroso",
			it: "Tossifrusta Pericolosa",
			pt: "Chicotóxico Perigoso",
			de: "Gefährliche Giftranke"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 733598
	}
}

export default card