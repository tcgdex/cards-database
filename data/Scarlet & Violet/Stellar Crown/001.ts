import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur ex",
		fr: "Florizarre-ex",
		es: "Venusaur ex",
		it: "Venusaur-ex",
		pt: "Venusaur ex",
		de: "Bisaflor-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tranquil Flower",
			fr: "Fleur Paisible",
			es: "Flor Silente",
			it: "Calmafiore",
			pt: "Flor Serena",
			de: "Ruhige Blume"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may heal 60 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez soigner 60 dégâts de l'un de vos Pokémon.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes curar 60 puntos de daño a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi curare uno dei tuoi Pokémon da 60 danni.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá curar 60 pontos de dano de 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 60 Schadenspunkte bei 1 deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Dangerous Toxwhip",
			fr: "Fouet Vénéneux",
			es: "Toxilatigazo Peligroso",
			it: "Tossifrusta Pericolosa",
			pt: "Chicotóxico Perigoso",
			de: "Gefährliche Giftranke"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
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
		normal: false,
		reverse: false
	},

	illustrator: "Saki Hayashiro",

	thirdParty: {
		cardmarket: 785852
	}
}

export default card
