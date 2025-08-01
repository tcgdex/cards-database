import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [12],
	set: Set,

	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},

	stage: "Stage2",
	retreat: 1,
	regulationMark: "E",
	illustrator: "ryoma uratsuka",

	description: {
		en: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Tricolored Scales",
			fr: "Écailles Tricolores",
			de: "Dreifarbiger Flügelstaub",
			es: "Escamas Tricolores",
			pt: "Escamas Tricolores",
			it: "Scaglie Tricolori"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent's Active Pokémon Burned, Confused, and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé, Confus et Empoisonné.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du das Aktive Pokémon deines Gegners verbrennen, verwirren und vergiften.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido, Envenenado y Quemado.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso, Envenenado e Queimado.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario bruciato, confuso e avvelenato."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			de: "Windstoß",
			es: "Tornado",
			pt: "Lufada de Vento",
			it: "Raffica"
		},

		damage: 90
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582031
	}
}

export default card
