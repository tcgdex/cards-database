import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Hisuian Arcanine V",
		fr: "Arcanin de Hisui V",
		es: "Arcanine de Hisui V",
		it: "Arcanine di Hisui V",
		pt: "Arcanine de Hisui V",
		de: "Hisui-Arkani V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Irresistible Force",
			fr: "Force Irrésistible",
			es: "Fuerza Irresistible",
			it: "Forza Inarrestabile",
			pt: "Força Irresistível",
			de: "Unaufhaltbare Macht"
		},

		effect: {
			en: "As often as you like during your turn, you may move a Fighting Energy from 1 of your other Pokémon to this Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer une Énergie Fighting de l'un de vos autres Pokémon vers ce Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 Energía Fighting de 1 de tus otros Pokémon a este Pokémon.",
			it: "Durante il tuo turno, puoi spostare un'Energia Fighting da uno dei tuoi altri Pokémon a questo Pokémon tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 Energia Fighting de 1 dos seus outros Pokémon para este Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Fighting-Energie von 1 deiner anderen Pokémon auf dieses Pokémon verschieben."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rock Bullet",
			fr: "Fronde",
			es: "Bala Roca",
			it: "Dardopietra",
			pt: "Bala de Pedra",
			de: "Steinkugel"
		},

		effect: {
			en: "This attack does 30 more damage for each Fighting Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Fighting attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Fighting unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia Fighting assegnata a questo Pokémon.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Fighting ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Fighting-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682137
	}
}

export default card
