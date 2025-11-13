import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [601],
	set: Set,

	name: {
		en: "Klinklang",
		fr: "Cliticlic",
		es: "Klinklang",
		it: "Klinklang",
		pt: "Klinklang",
		de: "Klikdiklak"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Emergency Rotation",
			fr: "Rotation d'Urgence",
			es: "Rotación de Emergencia",
			it: "Rotazione di Emergenza",
			pt: "Rotação Emergencial",
			de: "Notfallrotation"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your hand and your opponent has any Stage 2 Pokémon in play, you may put this Pokémon onto your Bench.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre main et que votre adversaire a au moins un Pokémon de Niveau 2 en jeu, vous pouvez placer ce Pokémon sur votre Banc.",
			es: "Una vez durante tu turno, si este Pokémon está en tu mano y tu rival tiene algún Pokémon de Fase 2 en juego, puedes poner este Pokémon en tu Banca.",
			it: "Una sola volta durante il tuo turno, se hai questo Pokémon in mano e il tuo avversario ha dei Pokémon di Fase 2 in gioco, puoi mettere questo Pokémon nella tua panchina.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua mão e seu oponente tiver algum Pokémon Estágio 2 em jogo, você poderá colocar este Pokémon no seu Banco.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Hand ist und dein Gegner mindestens 1 Phase-2-Pokémon im Spiel hat, kannst du dieses Pokémon auf deine Bank legen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hyper Ray",
			fr: "Hyper Rayon",
			es: "Hiperdescarga",
			it: "Granraggio",
			pt: "Hiperfeixe",
			de: "Hyperlicht"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "Tonji Matsuno",

	thirdParty: {
		cardmarket: 785955
	}
}

export default card
