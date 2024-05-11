import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray",
		es: "Luxray",
		it: "Luxray",
		pt: "Luxray",
		de: "Luxtra"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Swelling Flash",
			fr: "Flash Grandissant",
			es: "Destello Creciente",
			it: "Bagliore Amplificato",
			pt: "Clarão Crescente",
			de: "Anschwellender Blitz"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your hand and you have more Prize cards remaining than your opponent, you may put this Pokémon onto your Bench.",
			fr: "Une fois pendant votre tour, si ce Pokémon est dans votre main et qu'il vous reste plus de cartes Récompense qu'à votre adversaire, vous pouvez placer ce Pokémon sur votre Banc.",
			es: "Una vez durante tu turno, si este Pokémon está en tu mano y te quedan más cartas de Premio que a tu rival, puedes poner este Pokémon en tu Banca.",
			it: "Una sola volta durante il tuo turno, se hai questo Pokémon in mano e più carte Premio rimanenti del tuo avversario, puoi mettere questo Pokémon nella tua panchina.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver na sua mão e você tiver mais cartas de Prêmio restantes do que seu oponente, você poderá colocar este Pokémon no seu Banco.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Hand ist und du mehr verbleibende Preiskarten hast als dein Gegner, kannst du dieses Pokémon auf deine Bank legen."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
			es: "Voltio Cruel",
			it: "Sprizzalampo",
			pt: "Ataque Selvagem",
			de: "Stromstoß"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card