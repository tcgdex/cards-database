import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Flamigo",
		fr: "Flamenroule",
		es: "Flamigo",
		it: "Flamigo",
		pt: "Flamigo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Insta-Flock",
			fr: "Instanta-Nuée",
			es: "Instabandada",
			it: "Frotta Istantanea",
			pt: "Bando Instantâneo"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 Flamigo, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 Flamenroule, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 3 Flamigo, enseñarlos y ponerlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a tre Flamigo, mostrarli e aggiungerli alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 3 Flamigo no seu baralho, revelá-los e colocá-los na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "United Wings",
			fr: "Ailes Unies",
			es: "Alas Unidas",
			it: "Ali Unite",
			pt: "União Alada"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the United Wings attack.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l'attaque Ailes Unies.",
			es: "Este ataque hace 20 puntos de daño por cada Pokémon en tu pila de descartes que tenga el ataque Alas Unidas.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua pila degli scarti che ha l'attacco Ali Unite.",
			pt: "Este ataque causa 20 pontos de dano para cada Pokémon na sua pilha de descarte que tiver o ataque União Alada."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card